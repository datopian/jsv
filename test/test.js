const test = require('ava')
const renderer = require('renderer')

test('Can render a JSON schema to markdown (default)', (t) => {
  const instring = file.readSync('fixtures/data-resource.json')
  const exp = file.readSync('...')
  const out = renderer(instring, {// options
  })
  t.is(out, exp)
})
