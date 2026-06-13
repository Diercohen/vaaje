import { ICalligraphyFactory, IGlyphMetrics } from "./state.types.js";

// Base class for each character's status
export abstract class GlyphState {
  protected char: string;

  constructor(char: string) {
    this.char = char;
  }

  // Abstract method to calculate geometric shape based on injected factory
  abstract resolveMetrics(
    factory: ICalligraphyFactory,
    context: { previousChar?: string; nextChar?: string },
  ): IGlyphMetrics;
}

export class InitialState extends GlyphState {
  resolveMetrics(factory: ICalligraphyFactory, context: { nextChar?: string }) {
    return factory.getGlyphMetrics(this.char, "initial", context);
  }
}

export class MedialState extends GlyphState {
  resolveMetrics(
    factory: ICalligraphyFactory,
    context: { previousChar?: string; nextChar?: string },
  ) {
    return factory.getGlyphMetrics(this.char, "medial", context);
  }
}

export class FinalState extends GlyphState {
  resolveMetrics(
    factory: ICalligraphyFactory,
    context: { previousChar?: string },
  ) {
    return factory.getGlyphMetrics(this.char, "final", context);
  }
}

export class IsolatedState extends GlyphState {
  resolveMetrics(factory: ICalligraphyFactory) {
    return factory.getGlyphMetrics(this.char, "isolated", {});
  }
}
