/**
 * Uses DOM APIs (DOMParser + appendChild) instead of the deprecated
 * document.write() to build the print document.
 */
export function printHtmlDocument(html, { delayMs = 500 } = {}) {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    console.error("Popup blocked — unable to open print window.");
    return;
  }

  const doc = printWindow.document;

  // Zero page margins so Chrome drops its default header/footer
  // (date, title, URL) from the printed output.
  const style = doc.createElement("style");
  style.textContent = `
    @page { margin: 0; }
    html, body { margin: 0; padding: 0; }
  `;
  doc.head.appendChild(style);

  // Parse the flyer HTML and append its content via DOM APIs
  // (document.write() is deprecated and has idiosyncratic behavior).
  const parsed = new DOMParser().parseFromString(html, "text/html");

  // Snapshot the node lists first: adoptNode() removes each node from the
  // parsed document, which would otherwise mutate the live childNodes list
  // mid-iteration and skip every other node (causing a blank page).
  for (const node of [...parsed.head.childNodes]) {
    doc.head.appendChild(doc.adoptNode(node));
  }
  for (const node of [...parsed.body.childNodes]) {
    doc.body.appendChild(doc.adoptNode(node));
  }

  // Carry over the document title (used by the browser tab / PDF metadata).
  if (parsed.title) {
    doc.title = parsed.title;
  }

  printWindow.focus();
  setTimeout(() => printWindow.print(), delayMs);
}
