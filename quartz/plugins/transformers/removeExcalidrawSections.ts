import { QuartzTransformerPlugin } from "../types"

export const RemoveExcalidrawSections: QuartzTransformerPlugin = () => {
  return {
    name: "RemoveExcalidrawSections",
    textTransform(_ctx, src) {
      // Remove Excalidraw sections by looking for the specific headings
      // and removing everything from those headings to the end of the file
      // or until another heading of the same or higher level
      
      const lines = src.split('\n')
      const filteredLines: string[] = []
      let skipMode = false
      let skipLevel = 0
      
      for (const line of lines) {
        // Check if this line is a heading
        const headingMatch = line.match(/^(#{1,6})\s+(.+)$/)
        
        if (headingMatch) {
          const currentLevel = headingMatch[1].length
          const headingText = headingMatch[2].trim()
          
          // Check if this is one of the Excalidraw sections we want to remove
          if (headingText === 'Excalidraw Data' || 
              headingText === 'Text Elements' || 
              headingText === 'Drawing' ||
              headingText === 'Element Links' ||
              headingText === 'Embedded Files') {
            skipMode = true
            skipLevel = currentLevel
            continue // Skip this heading line
          }
          
          // If we're in skip mode and encounter a heading of equal or higher level
          // (smaller number), we can stop skipping
          if (skipMode && currentLevel <= skipLevel) {
            skipMode = false
            skipLevel = 0
            // Include this heading since it's not an Excalidraw section
            filteredLines.push(line)
            continue
          }
        }
        
        // If we're not in skip mode, include the line
        if (!skipMode) {
          filteredLines.push(line)
        }
      }
      
      return filteredLines.join('\n')
    }
  }
}