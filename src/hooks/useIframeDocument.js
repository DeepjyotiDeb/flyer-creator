import { useEffect, useRef } from "react";

/**
 * Renders an HTML string into an iframe via document.write.
 * Re-renders whenever the html string changes.
 */

export function useIframeDocument(html) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();
  }, [html]);

  return iframeRef;
}
