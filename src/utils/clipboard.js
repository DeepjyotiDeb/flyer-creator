/**
 * Copies text to the clipboard and reports success via a callback.
 */
export async function copyToClipboard(text, onSuccess) {
  try {
    await navigator.clipboard.writeText(text);
    onSuccess?.();
  } catch (err) {
    console.error("Failed to copy to clipboard:", err);
  }
}
