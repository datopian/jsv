const datasetMetadata = {
{% for key, property in properties  %}
{% if property|getDescription %}// {{ property|getDescription }}{% endif %}
    {{ key }}: {{ property|getDefault|stringify|safe }},
{% for example in property.examples %}
{% if not loop.first or property.default %}
// [example] {{ key }}: {{ example|cleanExample|stringify|safe }}
{% endif %}
{% endfor %}
{% endfor %}
}
