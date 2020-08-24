function removeExtraEmptyLines(text) {
  const lines = text.split("\n");
  const cleaned = [];

  for (let idx = 0; idx < lines.length; idx++) {
    let line = lines[idx].trim();
    let previous = cleaned[cleaned.length - 1] || "";

    if (line == "" && previous == "") {
      continue; // skip duplicate empty lines
    }
    cleaned.push(line);
  }

  return cleaned.join("\n").trim() + "\n";
}

export { removeExtraEmptyLines };
