# JSON Schema Viewer

JSON Schema viewer is a lightweight library and tool in JavaScript to turn a [JSON Schema](https://json-schema.org/) into a nice human readable document that you publish or embed in HTML or MarkDown.

It is designed for use in rendering documentation for metadata and data schemas for data management systems like [CKAN](https://github.com/ckan/ckan) — though it can be used for any JSON Schema.

## Install

Requires [NodeJS](https://nodejs.org/en/) 12+:

```console
$ npm install
$ npm link
```

## Getting started

```console
$ jsv --help
Usage: jsv [options] <URL> <OUTPUT>

jsv (JSON Scheme Viewer)

JSON Schema viewer is a lightweight javascript library and tool that turns JSON
schemas into a elegant human readable documents.

It expects URL to be a location of a JSON scheme file, and it decides the
format of the output based on the file extension of OUTPUT (which is created
as a result) or the format provided via the --output option.

Options:
  -V, --version      output the version number
  --output=<output>  Format of the output file.
  --css=<css>        URL of a CSS stylesheet (to be included in HTML outputs).
  --embed-css        Include the contents of the CSS in the HTML output.
  --stdout           No output file is created and the result goes to stdout.
  -h, --help         display help for command
```

### Tests

```console
$ npm test
```
