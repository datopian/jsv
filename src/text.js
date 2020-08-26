const rtrim = (text) => text.replace(/\s+$/, "");

const removeEmptyLines = (text) => {
  const lines = text.split("\n");
  const cleaned = [];

  for (let idx = 0; idx < lines.length; idx++) {
    let line = rtrim(lines[idx]);
    if (line == "") {
      continue; // skip empty lines
    }
    cleaned.push(line);
  }

  return cleaned.join("\n").trim() + "\n";
};

const removeExtraEmptyLines = (text) => {
  const lines = text.split("\n");
  const cleaned = [];

  for (let idx = 0; idx < lines.length; idx++) {
    let line = rtrim(lines[idx]);
    let previous = cleaned[cleaned.length - 1] || "";

    if (line == "" && previous == "") {
      continue; // skip duplicate empty lines
    }
    cleaned.push(line);
  }

  return cleaned.join("\n").trim() + "\n";
};

export { removeEmptyLines, removeExtraEmptyLines };
