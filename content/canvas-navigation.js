console.log('Canvas Navigation Script Loading...');

const baseUrl = `${window.location.origin}/`;

// Function to make SVG inline (minimal styling - CSS handles responsiveness)
const makeInlineSVG = (img) => {
  if (!img || !img.src || !img.src.includes('.svg') || img.dataset.processed) {
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
      // Create minimal wrapper - CSS handles all styling
      const svgWrapper = document.createElement('div');
      svgWrapper.className = 'inline-svg-wrapper';
      svgWrapper.innerHTML = svgContent;
      
      // Minimal SVG processing for responsiveness
      const svgElement = svgWrapper.querySelector('svg');
      if (svgElement) {
        // Ensure proper scaling by setting viewBox if missing
        if (!svgElement.getAttribute('viewBox')) {
          const width = svgElement.getAttribute('width') || svgElement.getBoundingClientRect().width;
          const height = svgElement.getAttribute('height') || svgElement.getBoundingClientRect().height;
          if (width && height) {
            svgElement.setAttribute('viewBox', `0 0 ${width} ${height}`);
          }
        }
        
        // Remove fixed dimensions to allow responsive scaling
        svgElement.removeAttribute('width');
        svgElement.removeAttribute('height');
      }
      
      // Replace img with SVG wrapper
      container.removeChild(img);
      container.appendChild(svgWrapper);
      
      // Process canvas labels after SVG is inline
      setTimeout(() => {
        makeCanvasNodesClickable(svgWrapper);
        makeMarkdownLinksClickable(svgWrapper);
      }, 50);
      
      console.log('SVG made inline successfully');
    })
    .catch(error => {
      console.error('Error making SVG inline:', error);
      img.dataset.processed = ''; // Reset on error
    });
};

// Function to extract clean text from canvas nodes
const getCleanText = (element) => {
  // Try to get text from direct text nodes first
  let text = '';
  
  // Method 1: Look for text in direct child text nodes
  for (let child of element.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) {
      const nodeText = child.textContent?.trim();
      if (nodeText) {
        text = nodeText;
        break;
      }
    }
  }
  
  // Method 2: Look for text in span elements (common in Canvas exports)
  if (!text) {
    const spans = element.querySelectorAll('span');
    for (let span of spans) {
      const spanText = span.textContent?.trim();
      if (spanText && !spanText.includes('css')) {
        text = spanText;
        break;
      }
    }
  }
  
  // Method 3: Fallback to innerText (avoids CSS content)
  if (!text) {
    text = element.innerText?.trim() || '';
  }
  
  // Clean up the text - remove CSS properties and other garbage
  if (text.includes('accent-color-auto') || text.includes('webkit-') || text.length > 100) {
    // This looks like CSS content, ignore it
    return '';
  }
  
  return text;
};

// Function to make canvas node labels clickable
const makeCanvasNodesClickable = (container = document) => {
  // Only target div elements with exact class "canvas-node-label"
  const canvasLabels = container.querySelectorAll('svg div.canvas-node-label');
  console.log(`Found ${canvasLabels.length} canvas-node-label divs to process`);
  
  canvasLabels.forEach((label, index) => {
    const text = getCleanText(label);
    if (!text) {
      console.log(`Skipping canvas label ${index}: no clean text found`);
      return;
    }
    
    console.log(`Processing canvas label ${index}: "${text}"`);
    
    // Convert text to URL slug
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-#]/g, '') // Remove special characters except spaces, hyphens, and hash
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .replace(/-+/g, '-')      // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, '');   // Remove leading/trailing hyphens
    
    const targetUrl = `${baseUrl}${slug}`;
    console.log(`Canvas label "${text}" → URL: ${targetUrl}`);
    
    // Make the label clickable
    if (!label.dataset.canvasClickable) {
      label.dataset.canvasClickable = 'true';
      
      // Add click handler - open in new tab
      label.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(`Canvas label clicked: "${text}" → Opening in new tab: ${targetUrl}`);
        
        // Open in new tab
        window.open(targetUrl, '_blank');
      });
      
      // Add title attribute for accessibility
      label.setAttribute('title', `Click to open: ${text}`);
      
      console.log(`Made canvas label clickable: "${text}"`);
    }
  });
};

// Function to make markdown embed internal links clickable
const makeMarkdownLinksClickable = (container = document) => {
  // Target internal links with data-href attribute within markdown-embed-content
  const internalLinks = container.querySelectorAll('.markdown-embed-content a.internal-link[data-href]');
  console.log(`Found ${internalLinks.length} markdown internal links to process`);
  
  internalLinks.forEach((link, index) => {
    const dataHref = link.getAttribute('data-href');
    const linkText = link.textContent?.trim();
    
    if (!dataHref || !linkText) {
      console.log(`Skipping markdown link ${index}: missing data-href or text`);
      return;
    }
    
    console.log(`Processing markdown link ${index}: "${linkText}" (data-href: "${dataHref}")`);
    
    // Convert data-href to URL slug
    const slug = dataHref
      .toLowerCase()
      .replace(/[^\w\s-#]/g, '') // Remove special characters except spaces, hyphens, and hash
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .replace(/-+/g, '-')      // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, '');   // Remove leading/trailing hyphens
    
    const targetUrl = `${baseUrl}${slug}`;
    console.log(`Markdown link "${linkText}" → URL: ${targetUrl}`);
    
    // Make the link clickable if not already processed
    if (!link.dataset.markdownClickable) {
      link.dataset.markdownClickable = 'true';
      
      // Remove existing click handlers and override behavior
      link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(`Markdown link clicked: "${linkText}" → Opening in new tab: ${targetUrl}`);
        
        // Open in new tab
        window.open(targetUrl, '_blank');
      });
      
      // Update title attribute for accessibility
      link.setAttribute('title', `Click to open: ${linkText}`);
      
      console.log(`Made markdown link clickable: "${linkText}"`);
    }
  });
};

// Process all existing SVG images
const processExistingSVGs = () => {
  const svgImages = document.querySelectorAll('img[src$=".svg"]');
  console.log(`Found ${svgImages.length} SVG images to process`);
  
  svgImages.forEach(makeInlineSVG);
  
  // Also process any existing inline SVGs for canvas labels
  makeCanvasNodesClickable();
  
  // Process any existing markdown internal links
  makeMarkdownLinksClickable();
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', processExistingSVGs);
} else {
  processExistingSVGs();
}

// Set up mutation observer for dynamically added content
const observer = new MutationObserver((mutations) => {
  let shouldProcess = false;
  
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const svgImg = node.querySelector ? node.querySelector('img[src$=".svg"]') : null;
          const hasSvg = node.querySelector && (
            node.querySelector('svg .canvas-node-label') ||
            node.querySelector('svg div[class*="canvas-node"]') ||
            node.tagName === 'SVG'
          );
          const hasMarkdownLinks = node.querySelector && node.querySelector('.markdown-embed-content a.internal-link[data-href]');
          
          if (svgImg || hasSvg || hasMarkdownLinks) {
            shouldProcess = true;
          }
        }
      });
    }
  });
  
  if (shouldProcess) {
    console.log('New content detected (SVG or markdown links), processing...');
    setTimeout(() => {
      document.querySelectorAll('img[src$=".svg"]:not([data-processed])').forEach(makeInlineSVG);
      makeCanvasNodesClickable();
      makeMarkdownLinksClickable();
    }, 100);
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Handle SPA navigation events
document.addEventListener('nav', () => {
  console.log('SPA navigation detected, reprocessing...');
  setTimeout(processExistingSVGs, 200);
});

console.log('Canvas navigation script ready');