/**
 * Physical print format definitions.
 * Keys are used as identifiers throughout the app; values drive both
 * the preview canvas size and the AI prompt generation.
 */
export const FORMAT_DIMENSIONS = {
  a4: { name: "A4 (210 × 297 mm)", width: "210mm", height: "297mm" },
  letter: { name: "US Letter (8.5 × 11 in)", width: "215.9mm", height: "279.4mm" },
  square: { name: "Flyer Square (200 × 200 mm)", width: "200mm", height: "200mm" },
};

export const ZOOM_LIMITS = { min: 30, max: 150, step: 10, default: 85 };
