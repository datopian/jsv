{% import "macros.md" as macros %}
# {{ title }}

**(`{{ type }}`)**

{{ description|safe }}

{% for _, property in properties %}

{{ macros.instance(property, title=2) }}

{% endfor %}
