{% macro instance(property, level=2) %}

{{ "#".repeat(level) }} {{ property.title }}

{% if property.type %}**(`{{ property.type }}`)**{% endif %}{% if property.default %} Defaults to _{{ property.default }}_.{% endif %}

{% if property.description %}
{{ property.description }}
{% endif %}

{% if property.context %}
{{ property.context|safe }}
{% endif %}

{% if property.examples %}
{% if property.examples.length > 1 %}
    {% set example_section_title = "Examples" %}
{% else %}
    {% set example_section_title = "Example" %}
{% endif %}
{{ "#".repeat(level + 1) }} {{ example_section_title }}

{% for example in property.examples %}
- `{{ example|parseJson|dump|safe }}`
{% endfor %}

{% endif %}
{% endmacro %}
