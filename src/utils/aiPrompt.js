import { FORMAT_DIMENSIONS } from "../constants/formats";

/**
 * Builds the optimized AI prompt for generating flyer HTML.
 */
export function buildAiPrompt({ topic, category, format }) {
  const { name, width, height } = FORMAT_DIMENSIONS[format];

  return `
Act as an expert graphic designer and elite HTML/CSS developer. Create a stunning, high-converting flyer for a "${topic}" (${category} category).
Create a professional, single-page print flyer based on the following user request:
"[INSERT USER REQUEST HERE]"

### STRICT DESIGN & TECHNICAL CONSTRAINTS:
1. FORMAT: Output ONLY a single, self-contained HTML document enclosed within a (\`\`\`html ... \`\`\`) code block. Do NOT include any conversational preamble, explanations, or text outside the code block.
2. PAGE BUDGET: The entire design MUST fit strictly onto a single A4 pdf page without overflowing. Use tight, balanced padding, precise margins, and concise typography.
3. CSS STYLING: Embed all CSS inside a <style> block in the <head>. Use modern CSS (Flexbox, Grid, CSS variables). Use Google Fonts via standard <link> tags if typography needs elevation.
4. DIMENSIONS & PRINT: Design it explicitly for standard print ratios. Set the root container or body element to fixed dimensions matching the target size (e.g., width: 210mm; height: 297mm; for A4) with overflow: hidden; and box-sizing: border-box;.
5. COLOR & PALETTE: Use a cohesive, professional color palette (max 3 core colors: primary, secondary, accent) suited for the flyer's topic. Avoid plain black-and-white unless explicitly requested.
6. ASSETS: Do not rely on external image URLs unless standard placeholder services (like Unsplash source URLs) are appropriate; instead, use elegant CSS gradients, geometric SVG shapes, or solid color blocks for backgrounds and visual accents.
7. Structure the flyer with fixed dimensions matching ${name} (e.g. width: ${width}; height: ${height};).
`;
}
