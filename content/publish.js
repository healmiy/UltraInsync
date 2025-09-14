console.log('SVG Inline Script Loading...');

// Check if in iframe - if so, don't process SVGs
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
        margin: 0 0rem 0 0rem !important;
        padding: 0 0rem 0 0rem !important;
        max-width: 100% !important;
        width: 100% !important;
        box-shadow: none !important;
        border: none !important;
      `;
    }
    
    document.body.classList.add('iframe-content');
    document.body.style.cssText = `
      margin: 0 !important;
      padding: 0 0rem 0 2rem !important;
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
} else {
  console.log('Main window detected - SVG processing enabled');
}

const baseUrl = `${window.location.origin}/`;

// Device detection
const isDesktop = !(/Mobile|Android|iPhone|iPad|Windows Phone/i.test(navigator.userAgent));

// Convert URLs in SVG content
function convertUrls(svgContent) {
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
  
  return converted;
}

// Simple function to make SVG inline
const makeInlineSVG = (img) => {
  if (isInIframe || !img || !img.src || !img.src.includes('.svg')) {
    return;
  }
  
  if (img.dataset.processed) {
    return;
  }
  
  img.dataset.processed = 'true';
  console.log('Making SVG inline:', img.src);
  
  const container = img.parentElement;
  if (!container) {
    console.error('No parent container found');
    return;
  }
  
  fetch(img.src)
    .then(response => response.text())
    .then(svgContent => {
      const convertedSvgContent = convertUrls(svgContent);
      
      // Create simple SVG container
      const svgContainer = document.createElement('div');
      svgContainer.className = 'inline-svg';
      svgContainer.innerHTML = convertedSvgContent;
      
      // Style the SVG to be responsive and highly zoomable
      const svgElement = svgContainer.querySelector('svg');
      if (svgElement) {
        svgElement.style.cssText = `
          max-width: none;
          width: 100%;
          height: auto;
          display: block;
          touch-action: pinch-zoom;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          transform-origin: center center;
        `;
        
        // Enable aggressive browser zoom for the container
        svgContainer.style.cssText = `
          touch-action: pinch-zoom;
          user-select: none;
          -webkit-user-select: none;
          overflow: visible;
          transform-origin: center center;
          will-change: transform;
          contain: layout style paint;
          isolation: isolate;
        `;
        
        // Add viewport meta adjustments for better zoom
        let viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
          viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=10.0, user-scalable=yes';
        }
      }
      
      // Replace img with SVG container
      container.removeChild(img);
      container.appendChild(svgContainer);
      
      // Add desktop keyboard navigation if on desktop
      if (isDesktop) {
        addKeyboardNavigation(svgContainer);
      }
      
      console.log('SVG made inline successfully');
    })
    .catch(error => {
      console.error('Error making SVG inline:', error);
      img.dataset.processed = ''; // Reset on error
    });
};

// Performant keyboard navigation for desktop
const addKeyboardNavigation = (svgContainer) => {
  const svgElement = svgContainer.querySelector('svg');
  if (!svgElement) return;
  
  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let isActive = false;
  
  // Add keyboard hint
  const hint = document.createElement('div');
  hint.style.cssText = `
    position: absolute;
    top: -20px;
    left: 0;
    background: rgba(0,0,0,0.7);
    color: white;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 10px;
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
    white-space: nowrap;
  `;
  hint.textContent = 'Click to focus • Arrow keys: navigate • +/-: zoom • Esc: reset';
  
  // Style container for focus
  svgContainer.style.cssText = `
    position: relative;
    display: inline-block;
    outline: none;
    border: 2px solid transparent;
    border-radius: 4px;
    transition: border-color 0.2s;
    cursor: pointer;
    z-index: 10;
    overflow: visible;
  `;
  svgContainer.tabIndex = 0; // Make focusable
  svgContainer.appendChild(hint);
  
  // Apply transform (CSS only, no JS animations)
  const applyTransform = () => {
    svgElement.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    svgElement.style.transformOrigin = '0 0';
  };
  
  // Focus/blur handling
  svgContainer.addEventListener('focus', () => {
    isActive = true;
    svgContainer.style.borderColor = 'var(--secondary, #4472a5)';
    svgContainer.style.zIndex = '1000'; // Bring SVG to front
    hint.style.opacity = '1';
    
    // Move other elements back
    document.querySelectorAll('.inline-svg').forEach(other => {
      if (other !== svgContainer) {
        other.style.zIndex = '1';
      }
    });
  });
  
  svgContainer.addEventListener('blur', () => {
    isActive = false;
    svgContainer.style.borderColor = 'transparent';
    svgContainer.style.zIndex = '10'; // Reset z-index
    hint.style.opacity = '0';
  });
  
  // Click to focus
  svgContainer.addEventListener('click', () => {
    svgContainer.focus();
  });
  
  // Show hint on hover even when not focused
  svgContainer.addEventListener('mouseenter', () => {
    if (!isActive) hint.style.opacity = '0.7';
  });
  
  svgContainer.addEventListener('mouseleave', () => {
    if (!isActive) hint.style.opacity = '0';
  });
  
  // Keyboard navigation
  svgContainer.addEventListener('keydown', (e) => {
    if (!isActive) return;
    
    const step = 30;
    const zoomStep = 0.3; // Increased zoom power
    
    switch(e.key) {
      case 'ArrowUp':
        e.preventDefault();
        translateY += step;
        applyTransform();
        break;
      case 'ArrowDown':
        e.preventDefault();
        translateY -= step;
        applyTransform();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        translateX += step;
        applyTransform();
        break;
      case 'ArrowRight':
        e.preventDefault();
        translateX -= step;
        applyTransform();
        break;
      case '+':
      case '=':
        e.preventDefault();
        scale = Math.min(10, scale + zoomStep); // Increased max zoom to 10x
        applyTransform();
        console.log(`Zoom: ${(scale * 100).toFixed(0)}%`);
        break;
      case '-':
        e.preventDefault();
        scale = Math.max(0.1, scale - zoomStep); // Decreased min zoom to 0.1x
        applyTransform();
        console.log(`Zoom: ${(scale * 100).toFixed(0)}%`);
        break;
      case 'Escape':
        e.preventDefault();
        scale = 1;
        translateX = 0;
        translateY = 0;
        applyTransform();
        break;
      case '0':
        e.preventDefault();
        scale = 1;
        translateX = 0;
        translateY = 0;
        applyTransform();
        break;
    }
  });
  
  // Initial setup
  svgElement.style.transformOrigin = '0 0';
  svgElement.style.transition = 'none'; // No CSS transitions for performance
  
  console.log('Keyboard navigation added');
};

// Process all existing SVG images
const processExistingSVGs = () => {
  if (isInIframe) return;
  
  const svgImages = document.querySelectorAll('img[src$=".svg"]');
  console.log(`Found ${svgImages.length} SVG images to process`);
  
  svgImages.forEach(makeInlineSVG);
};

// Simple initialization - no timers, no delays, just process immediately
if (!isInIframe) {
  // Process immediately if DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', processExistingSVGs);
  } else {
    processExistingSVGs();
  }
  
  // Set up mutation observer for new images
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const svgImg = node.querySelector ? node.querySelector('img[src$=".svg"]') : null;
            if (svgImg) {
              makeInlineSVG(svgImg);
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
  
  console.log('SVG inline processing ready');
}
