{% macro instance(property, level=2) %}

{{ "#".repeat(level) }} {{ property.title }}

{% if property.type %}**(`{{ property.type }}`)**{% endif %}{% if property.default %} Defaults to _{{ property.default }}_.{% endif %}

{% if property.description %}
{{ property.description }}
{% endif %}

{% if property.context %}
{{ property.context|safe }}
{% endif %}

{% if property.oneOf or property.anyOf or property.allOf or property.not %}
{{ "#".repeat(level + 1) }} Validation

{% if property.oneOf %}
{{ "#".repeat(level + 2) }} It must satisfy one of these conditions

{% for item in property.oneOf %}
{{ instance(item, level + 3) }}
{% endfor %}
{% endif %}

{% if property.anyOf %}
{{ "#".repeat(level + 2) }} It must satisfy at least one of these conditions

{% for item in property.anyOf %}
{{ instance(item, level + 3) }}
{% endfor %}
{% endif %}

{% if property.allOf %}
{{ "#".repeat(level + 2) }} It must satisfy all one of these conditions

{% for item in property.allOf %}
{{ instance(item, level + 3) }}
{% endfor %}
{% endif %}

{% if property.not %}
{{ "#".repeat(level + 2) }} It cannot satisfy any of these conditions

{% for item in property.not %}
{{ instance(item, level + 3) }}
{% endfor %}
{% endif %}

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
