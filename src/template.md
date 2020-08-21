# {{ title }} (`{{ type }}`)

{{ description|safe }}

{% for _, property in properties %}

## {{ property.title }}{% if property.type %} (`{{ property.type }}`){% endif %}

{% if property.default %}
Defaults to _{{ property.default }}_.
{% endif %}

{% if property.description %}
{{ property.description }}
{% endif %}

{% if property.context %}
{{ property.context|safe }}
{% endif %}

{% if property.examples %}

### Example{% if property.examples.length > 1 %}s{% endif %}

{% for example in property.examples %}

- `{{ example|parseJson|dump|safe }}`
  {% endfor %}
  {% endif %}

{% endfor %}
