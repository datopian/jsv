function removeExtraEmptyLines(text) {
  let cleaned = text.trim();
  cleaned = cleaned.replace(/\n{3,}/gm, "\n\n"); // remove extra empty lines
  cleaned += "\n"; // add new line at end of string
  return cleaned;
}

export { removeExtraEmptyLines };
