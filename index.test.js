const parser = require('./index')

test('simple array', () => {
  const parsed = parser.parse(`
    array(
      "foo" => "bar",
      "bar" => "foo",
    );
  `)
  expect(parsed).toEqual({
    foo: 'bar',
    bar: 'foo'
  })
})

test('simple array (as of PHP 5.4)', () => {
  const parsed = parser.parse(`
    [
      "foo" => "bar",
      "bar" => "foo",
    ];
  `)
  expect(parsed).toEqual({
    foo: 'bar',
    bar: 'foo'
  })
})

test('type casting', () => {
  const parsed = parser.parse(`
    [
      true => "a",
      2    => "b",
      "3"  => "c",
      4.5  => "d",
    ];
  `)
  expect(parsed).toEqual({
    '1': 'a',
    '2': 'b',
    '3': 'c',
    '4': 'd',
  })
})

test('overwriting', () => {
  const parsed = parser.parse(`
    [
      1 => "a",
      true => "b",
    ];
  `)
  expect(parsed).toEqual({
    '1': 'b',
  })
})

test('mixed integer and string keys', () => {
  const parsed = parser.parse(`
    [
      "foo" => "bar",
      "bar" => "foo",
      100   => -100,
      -100  => 100,
    ];
  `)
  expect(parsed).toEqual({
    'foo': 'bar',
    'bar': 'foo',
    [100]: -100,
    [-100]: 100,
  })
})

test('indexed array without key', () => {
  const parsed = parser.parse(`
    array(
      "foo",
      "bar",
      "hello",
      "world",
      100,
      -100,
      true,
      false,
      array(),
      array(1),
      array(
        "foo" => "bar"
      )
    );
  `)
  expect(parsed).toEqual([
    'foo',
    'bar',
    'hello',
    'world',
    100,
    -100,
    true,
    false,
    [],
    [1],
    { foo: 'bar' },
  ])
})

test('empty array', () => {
  const parsed = parser.parse('array()')
  expect(parsed).toEqual([])
})
