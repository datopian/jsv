# JSON Schema Viewer

JSON Schema viewer is a lightweight library and tool in javascript to turn a JSON schema into a nice human readable document that you publish or embed in html or markdown.

It is designed for use in rendering docs for metadata and data schemas for data management systems like CKAN -- though it can be used for any JSON Schema.

```bash
# json schema viewer
jsv {url to json schema} > my-markdown.md

# this includes the css by default
jsv {url...} --output=html --css=<URL to CSS> my.markdown.html # --embbed-css [true|false]

# get the default CSS
curl github.com/datopian/jsv/raw/.../jsv.css
```

Future ... (maybe not part of JSV)

```bash
jsv {schema} --output=python > my-dataset-creation.py
```

## Install

...

## Getting started

...

## Developers

### Tests

...
