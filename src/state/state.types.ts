// Position of a character in a word
export type GlyphPosition = "isolated" | "initial" | "medial" | "final";

// Data structure of a glyph (geometric graphic output)
export interface IGlyphMetrics {
  path: string; // پث SVG یا اطلاعات رسم Canvas
  width: number; // Glyph width (Dang/Dang geometric)
  height: number; // Glyph height
  xOffset: number; // Horizontal displacement for precise connection
  yOffset: number; // Vertical displacement relative to the seat line
}

// Contract for each font/line (Abstract Factory)
export interface ICalligraphyFactory {
  lineType: string; //  'nastaliq' or 'naskh'

  // Get the geometric matrix of a letter based on its position and neighboring characters
  getGlyphMetrics(
    char: string,
    position: GlyphPosition,
    context: { previousChar?: string; nextChar?: string },
  ): IGlyphMetrics;

  // Get specific rules for that line's layout (such as the Nastaliq slope angle)
  getLayoutRules(): { slopeAngle: number; defaultSpacing: number };
}
