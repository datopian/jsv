# {{title}} (`{{type}}`)

{{safe description}}

{{#each properties}}

## {{title}}{{#if type}} (`{{type}}`){{/if}}

{{#if default}}
Defaults to _{{default}}_.
{{/if}}

{{#if description}}
{{safe description}}
{{/if}}

{{#if context}}
{{safe context}}
{{/if}}

{{#each examples}}

### Example {{counter @index}}

```json
{{safe this}}
```

{{/each}}
{{/each}}
