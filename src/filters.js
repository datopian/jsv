const parse = (obj) => {
  try {
    return JSON.parse(obj);
  } catch (err) {
    throw new Error(`Invalid JSON example.\n${err}`);
  }
};

// get the value of an JSON Schema example
const cleanExample = (obj) => {
  const parsed = parse(obj);
  for (let key in parsed) {
    return parsed[key];
  }
};

// gets default value of a JSON Schema instance, falls back to the 1st example
const getDefault = (obj) => {
  if (obj.default !== undefined) {
    return obj.default;
  }

  if (obj.examples === undefined || obj.examples.length < 1) {
    return null;
  }
  return cleanExample(obj.examples[0]);
};

const getDescription = (obj) => obj.description || obj.name || null;

export { cleanExample, getDefault, getDescription };
