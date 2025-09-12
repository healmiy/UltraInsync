const clickToEnlarge = "Click and hold to enlarge. SHIFT + wheel to zoom. ESC to reset.";
const clickToCollapse = "ESC to reset. Click and hold to collapse. SHIFT + wheel to zoom";

console.log('SVG Interactive Script Loading...');

// Global status tracking
window.svgProcessingStatus = {
  totalFound: 0,
  processed: 0,
  failed: 0,
  retries: 0
};

// Check if in iframe - if so, don't process SVGs and just handle iframe styling
const isInIframe = window.self !== window.top;

if (isInIframe) {
  console.log('Detected iframe context - SVG processing disabled, hiding non-content elements...');
  
  const hideElements = () => {
    const elements = [
      "div.left.sidebar", "div.right.sidebar", "div.page-header", "div.page-footer",
      "header", "footer", "nav", ".breadcrumb-container", ".giscus", ".darkmode",
      ".search", ".explorer", ".toc", ".graph", ".backlinks", "#links-header-container"
    ];
    
    elements.forEach(selector => {
      try {
        document.querySelectorAll(selector).forEach(element => {
          element.style.display = "none";
        });
      } catch (e) {
        console.warn('Error hiding element:', selector);
      }
    });
    
    // Hide non-content elements
    try {
      document.querySelectorAll("#quartz-body > *:not(.center)").forEach(element => {
        element.style.display = "none";
      });
      document.querySelectorAll(".center > *:not(article)").forEach(element => {
        element.style.display = "none";
      });
    } catch (e) {
      console.warn('Error hiding non-content elements:', e);
    }
  };
  
  hideElements();
  setTimeout(hideElements, 100);
  
  // Style iframe content
  setTimeout(() => {
    const article = document.querySelector('article.popover-hint') || document.querySelector('article');
    if (article) {
      article.classList.remove('popover-hint');
      article.style.cssText = `
        margin: 0 !important;
        padding: 1rem !important;
        max-width: 100% !important;
        width: 100% !important;
        box-shadow: none !important;
        border: none !important;
      `;
    }
    
    document.body.classList.add('iframe-content');
    document.body.style.cssText = `
      margin: 0 !important;
      padding: 0 !important;
      overflow-x: hidden !important;
      background: var(--light, #ffffff) !important;
    `;
    
    // Make all links open in parent window
    document.querySelectorAll('a[href]').forEach(link => {
      if (!link.getAttribute('target')) {
        link.setAttribute('target', '_top');
      }
    });
    
    // Ensure SVG images in iframes remain as regular images
    document.querySelectorAll('img[src$=".svg"]').forEach(img => {
      img.style.cssText = `
        max-width: 100%;
        height: auto;
        pointer-events: none;
      `;
      // Mark as processed to prevent any future processing
      img.dataset.processed = 'true';
      img.dataset.iframeImg = 'true';
    });
    
    console.log('Iframe SVG images disabled for interactivity');
  }, 100);
}

const baseUrl = `${window.location.origin}/`;

// Device detection
const [isDesktop, isMobile, isTablet] = (() => {
  const userAgent = navigator.userAgent;
  const mobileKeywords = ['Mobile', 'Android', 'iPhone', 'iPad', 'Windows Phone'];
  
  const isMobile = mobileKeywords.some(keyword => userAgent.includes(keyword));
  const isTablet = /iPad/i.test(userAgent) || (isMobile && !/Mobile/i.test(userAgent));
  const isDesktop = !isMobile && !isTablet;
  
  console.log('Device detection:', { isDesktop, isMobile, isTablet });
  return [isDesktop, isMobile, isTablet];
})();

// Convert URLs in SVG content
function convertUrls(svgContent) {
  console.log('Converting URLs in SVG content...');
  
  let converted = svgContent;
  
  // Convert obsidian:// URLs
  converted = converted.replace(
    /obsidian:\/\/open\?vault=[^&]*&file=([^"&]*)/g,
    (match, file) => {
      const decodedFile = decodeURIComponent(file).replace(/\s+/g, '+');
      return baseUrl + decodedFile;
    }
  );
  
  // Convert app://obsidian.md/ URLs
  converted = converted.replace(
    /app:\/\/obsidian\.md\/content\//g,
    baseUrl
  );
  
  converted = converted.replace(
    /app:\/\/obsidian\.md\//g,
    baseUrl
  );
  
  // Convert /content/ URLs
  converted = converted.replace(
    /["']\/content\//g,
    `"${baseUrl}`
  );
  
  console.log('URL conversion complete');
  return converted;
}

// Process individual SVG image with retry logic
const processIMG = (img, retryCount = 0) => {
  // Safety check: don't process SVGs in iframes
  if (isInIframe) {
    console.log('Skipping SVG processing - in iframe context');
    return;
  }
  
  if (!img || !img.src || !img.src.includes('.svg')) {
    console.log('Skipping non-SVG or invalid image');
    return;
  }
  
  if (img.dataset.processed || img.dataset.iframeImg) {
    console.log('Image already processed or marked as iframe image');
    return;
  }
  
  // Check if image is still in DOM
  if (!img.parentElement) {
    console.log('Image no longer in DOM, skipping');
    return;
  }
  
  img.dataset.processed = 'true';
  console.log('Processing SVG:', img.src, retryCount > 0 ? `(retry ${retryCount})` : '');
  
  const container = img.parentElement;
  if (!container) {
    console.error('No parent container found for image');
    return;
  }
  
  // Add loading indicator
  img.style.opacity = '0.7';
  img.style.filter = 'blur(1px)';
  img.title = 'Loading interactive SVG...';
  
  fetch(img.src)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(svgContent => {
      console.log('SVG content fetched successfully');
      
      // Convert URLs in the SVG content
      const convertedSvgContent = convertUrls(svgContent);
      
      // Create SVG container
      const svgContainer = document.createElement('div');
      svgContainer.className = 'excalidraw-svg';
      svgContainer.dataset.tip = clickToEnlarge;
      svgContainer.innerHTML = convertedSvgContent;
      
      // Double-check container is still in DOM before replacing
      if (container.parentElement && img.parentElement === container) {
        // Replace the img with the SVG container
        container.removeChild(img);
        container.appendChild(svgContainer);
        
        console.log('SVG container created, adding navigation...');
        
        // Add interactive functionality for desktop
        if (isDesktop) {
          // Small delay to ensure SVG is fully rendered
          setTimeout(() => {
            addNavigationToDiv(svgContainer);
            // Add visual indicator that SVG is interactive
            svgContainer.style.opacity = '1';
            svgContainer.title = 'Interactive SVG - Hover for controls';
            window.svgProcessingStatus.processed++;
            console.log('SVG interactive functionality ready!', window.svgProcessingStatus);
          }, 50);
        } else {
          // For non-desktop, just show it's ready
          svgContainer.style.opacity = '1';
          window.svgProcessingStatus.processed++;
          console.log('SVG ready (non-interactive on mobile)', window.svgProcessingStatus);
        }
      } else {
        console.warn('Container removed from DOM during processing');
      }
    })
    .catch(error => {
      console.error('Error processing SVG:', img.src, error);
      
      // Retry logic for failed fetches
      if (retryCount < 2) {
        window.svgProcessingStatus.retries++;
        console.log(`Retrying SVG processing in ${(retryCount + 1) * 1000}ms...`, window.svgProcessingStatus);
        img.dataset.processed = ''; // Reset processed flag
        img.style.opacity = ''; // Reset loading style
        img.style.filter = '';
        setTimeout(() => {
          processIMG(img, retryCount + 1);
        }, (retryCount + 1) * 1000);
      } else {
        window.svgProcessingStatus.failed++;
        console.error('Max retries exceeded for SVG:', img.src, window.svgProcessingStatus);
        // Reset image appearance
        img.style.opacity = '';
        img.style.filter = '';
        img.title = 'Failed to load interactive SVG';
      }
    });
};

// Add navigation controls to SVG container
const addNavigationToDiv = (targetDiv) => {
  if (!targetDiv) {
    console.error('No target div provided for navigation');
    return;
  }
  
  console.log('Adding navigation to div:', targetDiv);
  
  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let isEnlarged = false;
  
  const svgElement = targetDiv.querySelector('svg');
  if (!svgElement) {
    console.error('No SVG element found in container');
    return;
  }
  
  // Set up the SVG element with initial styling
  svgElement.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: auto;
    cursor: grab;
    transition: transform 0.2s ease;
    user-select: none;
  `;
  
  // Add visual feedback for interactivity
  targetDiv.style.cssText = `
    position: relative;
    display: inline-block;
    border: 2px solid transparent;
    border-radius: 4px;
    transition: border-color 0.2s ease;
  `;
  
  // Add hover effect
  targetDiv.addEventListener('mouseenter', () => {
    targetDiv.style.borderColor = 'var(--secondary, #888)';
  });
  
  targetDiv.addEventListener('mouseleave', () => {
    if (!isDragging) {
      targetDiv.style.borderColor = 'transparent';
    }
  });
  
  // Apply transform with smooth transition
  const applyTransform = (smooth = false) => {
    if (smooth) {
      svgElement.style.transition = 'transform 0.1s ease-out';
      setTimeout(() => {
        svgElement.style.transition = '';
      }, 100);
    }
    svgElement.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  };
  
  // Reset function
  const reset = () => {
    scale = 1;
    translateX = 0;
    translateY = 0;
    isEnlarged = false;
    targetDiv.dataset.tip = clickToEnlarge;
    applyTransform(true); // Apply with smooth transition
    console.log('SVG reset to original state');
  };
  
  // Enlarge function
  const enlarge = () => {
    scale = 2;
    translateX = 0;
    translateY = 0;
    isEnlarged = true;
    targetDiv.dataset.tip = clickToCollapse;
    applyTransform(true); // Apply with smooth transition
    console.log('SVG enlarged');
  };
  
  // Mouse down event
  targetDiv.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    svgElement.style.cursor = 'grabbing';
    
    if (!isEnlarged) {
      enlarge();
    }
  });
  
  // Mouse move event
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    applyTransform();
  });
  
  // Mouse up event
  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      svgElement.style.cursor = 'grab';
    }
  });
  
  // Wheel event for zooming
  targetDiv.addEventListener('wheel', (e) => {
    if (!e.shiftKey) return;
    
    e.preventDefault();
    
    // Smoother zoom with smaller increments
    const zoomIntensity = 0.05;
    const delta = e.deltaY > 0 ? -zoomIntensity : zoomIntensity;
    const newScale = Math.max(0.1, Math.min(10, scale * (1 + delta)));
    
    if (newScale !== scale) {
      // Get mouse position relative to the SVG for zoom centering
      const rect = targetDiv.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate offset from center
      const offsetX = (mouseX - centerX) / scale;
      const offsetY = (mouseY - centerY) / scale;
      
      // Update scale
      const oldScale = scale;
      scale = newScale;
      
      // Adjust translation to keep zoom centered on mouse
      const scaleChange = scale - oldScale;
      translateX -= offsetX * scaleChange;
      translateY -= offsetY * scaleChange;
      
      applyTransform(true); // Apply with smooth transition
      
      // Update tooltip based on zoom level
      if (scale > 1.1) {
        targetDiv.dataset.tip = `${clickToCollapse} (${(scale * 100).toFixed(0)}%)`;
      } else {
        targetDiv.dataset.tip = clickToEnlarge;
      }
      
      console.log('Smooth zoom level:', (scale * 100).toFixed(1) + '%');
    }
  });
  
  // Escape key to reset
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      reset();
    }
  });
  
  console.log('Navigation controls added successfully');
};

// Mutation observer for new images
const addImgMutationObserver = () => {
  // Don't set up mutation observer in iframes
  if (isInIframe) {
    console.log('Skipping mutation observer setup - in iframe context');
    return;
  }
  
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const svgImg = node.querySelector ? node.querySelector('img[src$=".svg"]') : null;
            if (svgImg) {
              processIMG(svgImg);
            }
          }
        });
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  console.log('Mutation observer set up for new images');
};

// Initialize SVG processing
// Initialize SVG processing - only for main window, not iframes
const initSVGProcessing = () => {
  // Skip SVG processing if we're in an iframe
  if (isInIframe) {
    console.log('Skipping SVG processing - running in iframe');
    return;
  }
  
  console.log('Initializing SVG processing...');
  
  // Process existing SVG images
  const existingImages = document.querySelectorAll('img[src$=".svg"]');
  window.svgProcessingStatus.totalFound += existingImages.length;
  console.log(`Found ${existingImages.length} existing SVG images (Total found: ${window.svgProcessingStatus.totalFound})`);
  
  existingImages.forEach(processIMG);
  
  // Set up mutation observer for new images
  addImgMutationObserver();
  
  console.log('SVG processing initialization complete');
  console.log('Status:', window.svgProcessingStatus);
};

// Robust initialization that handles multiple scenarios
const robustInit = () => {
  if (isInIframe) {
    console.log('SVG processing disabled - running in iframe context');
    return;
  }
  
  // Try to process immediately if DOM is ready
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('DOM ready, initializing SVG processing immediately');
    initSVGProcessing();
  } else {
    console.log('DOM not ready, waiting for DOMContentLoaded');
    document.addEventListener('DOMContentLoaded', initSVGProcessing);
  }
  
  // Additional fallback timers to catch late-loading content
  setTimeout(() => {
    console.log('Fallback timer 1: Re-checking for SVG images...');
    initSVGProcessing();
  }, 500);
  
  setTimeout(() => {
    console.log('Fallback timer 2: Final SVG processing attempt...');
    initSVGProcessing();
  }, 2000);
  
  // Also process when images finish loading
  window.addEventListener('load', () => {
    console.log('Window load complete, processing any remaining SVGs...');
    setTimeout(initSVGProcessing, 100);
  });
};

// Start robust initialization
robustInit();