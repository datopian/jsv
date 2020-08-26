// given a CKAN Schema field, returns its label as string (choosing the first
// of them if labels in more than one language are present)
const getCkanFieldLabel = (field) => {
  if (typeof field.label === "string") {
    return field.label;
  }

  for (let key in field.label) {
    return field.label[key];
  }
};

const ckanFieldParser = (field, order = null) => {
  let instance = {
    title: getCkanFieldLabel(field),
    type: "string", // TODO is there type annotations in CKAN?
  };

  if (order !== null) {
    instance.propertyOrder = order;
  }

  if (field.help_text !== undefined) {
    instance.description = field.help_text;
  }

  if (field.choices !== undefined) {
    instance.examples = field.choices.map((choice) => {
      let obj = {};
      obj[field.field_name] = choice.value;
      return JSON.stringify(obj);
    });
  }

  if (field.preset === "date" || field.preset == "datetime") {
    instance.format = field.preset.replace("time", "-time");
  }

  return instance;
};

const ckanToJsonSchema = (ckan) => {
  const fields = ["dataset_fields", "resource_fields"];
  let required = [];
  let properties = [];
  let count = 0;

  for (let idx = 0; idx < fields.length; idx++) {
    let fieldsList = ckan[fields[idx]];
    for (let i = 0; i < fieldsList.length; i++) {
      let field = fieldsList[i];
      properties[field.field_name] = ckanFieldParser(field, count + 1);
      if (field.required) {
        required.push(field.field_name);
      }
      count++;
    }
  }

  let json = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: ckan.about,
    type: "object",
  };

  if (Object.keys(properties).length > 0) {
    json.properties = {};
    for (let key in properties) {
      json.properties[key] = properties[key];
    }
  }

  if (required.length > 0) {
    json.required = required;
  }

  return json; // TODO implement parser for CKAN's choices_helper
};

export { ckanToJsonSchema };
