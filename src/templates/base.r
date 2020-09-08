{% for key, property in properties  %}
{% if property|getDescription %}# {{ property|getDescription }}{% endif %}
{{ key }} <- {{ property|getDefault|stringifyToR|safe }}
{% for example in property.examples %}
{% if not loop.first or property.default %}
# [example] {{ key }} <- {{ example|cleanExample|stringifyToR|safe }}
{% endif %}
{% endfor %}
{% endfor %}
