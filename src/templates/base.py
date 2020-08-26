dataset_metadata = {
{% for key, property in properties  %}
    "{{ key }}": {{ property|getDefault|stringify|safe|replace("null", "None") }},{% if property|getDescription %}  # {{ property|getDescription }}{% endif %}
    {% for example in property.examples %}
    {% if not loop.first or property.default %}
    # [example] "{{ key }}": {{ example|cleanExample|stringify|safe }}
    {% endif %}
    {% endfor %}
{% endfor %}
}
