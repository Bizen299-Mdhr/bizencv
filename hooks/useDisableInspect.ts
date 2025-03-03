import { useEffect } from 'react'

export const useDisableInspect = () => {
  useEffect(() => {
    const disableInspect = (e: MouseEvent | KeyboardEvent) => {
      if (e.type === 'contextmenu' || 
          (e instanceof KeyboardEvent && (e.ctrlKey || e.metaKey) && e.key === 'u')) {
        e.preventDefault()
      }
    }

    //Improved devtools check
    // const detectDevTools = () => {
    //   const devtools = {
    //     isOpen: false,
    //     orientation: undefined
    //   };
      
    //   const threshold = 160;
    //   const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    //   const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    //   const orientation = widthThreshold ? 'vertical' : 'horizontal';
      
    //   if (!(heightThreshold && widthThreshold) && 
    //       ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || 
    //        widthThreshold || 
    //        heightThreshold)) {
    //     devtools.isOpen = true;
    //     devtools.orientation = orientation;
    //   }
      
    //   if (devtools.isOpen) {
    //     document.body.innerHTML = '<h1>Developer Tools Detected</h1><p>Please close developer tools to view this site.</p>';
    //   }
    // }

    const detectDevTools = () => {
      const start = performance.now();
      debugger;
      const end = performance.now();
      
      if (end - start > 100) {
        document.body.innerHTML = '<h1>Developer Tools Detected</h1><p>Please close developer tools to view this site.</p>';
      }
    };

    // Run devtools check with a delay to avoid false positives
    const checkInterval = setInterval(detectDevTools, 1);

    // Disable right click
    document.addEventListener('contextmenu', disableInspect)
    
    // Disable Ctrl+U / Cmd+U
    document.addEventListener('keydown', disableInspect)

    // Disable F12 and Ctrl+Shift+I
    document.addEventListener('keydown', (e) => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault()
      }
    })
    

    return () => {
      clearInterval(checkInterval);
      document.removeEventListener('contextmenu', disableInspect)
      document.removeEventListener('keydown', disableInspect)
    }
  }, [])
} 