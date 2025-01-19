# make-iterator

`make-iterator` is a lightweight npm package that enables JavaScript objects to become iterable. This functionality allows you to iterate through an object's values using standard iteration constructs like `for...of` loops. The package includes two methods: `makeIterator` and `makeGenerator`.

## Motivation

JavaScript objects are not inherently iterable, which can limit their utility when working with modern iteration patterns. `make-iterator` solves this problem by providing two simple functions that add iterable behavior to a given object.

## Installation

To install the package, use npm or yarn:

```bash
npm install object-iterator-js
```

or

```bash
yarn add object-iterator-js
```

## Usage

Here is how you can use `make-iterator`:

### Example

```javascript
const { makeIterator, makeGenerator } = require('object-iterator-js');

const myObject = {
   name: 'John',
   age: 30,
   city: 'New York',
};

// Example 1: Using makeIterator
makeIterator(myObject);

for (const value of myObject) {
   console.log(value);
}

// Output:
// John
// 30
// New York

// Example 2: Using makeGenerator
const anotherObject = {
   a: 1,
   b: 2,
   c: 3,
};

makeGenerator(anotherObject);

for (const value of anotherObject) {
   console.log(value);
}

// Output:
// 1
// 2
// 3

// Example with spread operator
makeGenerator(anotherObject);
const valuesArray = [...anotherObject];
console.log(valuesArray);

// Output:
// [1, 2, 3]
```

## API

### `makeIterator(value)`

#### Parameters

-  `value` (Object): The object to make iterable.

#### Returns

-  None. The function modifies the input object by adding an `@@iterator` method (defined as `Symbol.iterator`).

#### Behavior

Once `makeIterator` is applied to an object, you can use iteration constructs like `for...of` to loop through the values of the object.

### `makeGenerator(expValue)`

#### Parameters

-  `expValue` (Object): The object to make iterable.

#### Returns

-  None. The function modifies the input object by adding a generator-based `@@iterator` method (defined as `Symbol.iterator`).

#### Behavior

Once `makeGenerator` is applied to an object, you can use iteration constructs like `for...of` to loop through the values of the object. This method uses a generator to yield each value.

## Notes

-  The functions modify the input object directly by defining a `Symbol.iterator` property.
-  The iteration order corresponds to the object's keys as returned by `Object.keys()`.
-  Properties added to the object after calling `makeIterator` or `makeGenerator` will not be included in the iteration unless the functions are called again.

## Links

-  **Repository**: [GitHub](https://github.com/Sourav0010/Object-Iterator)
-  **Issues**: [Report Bugs](https://github.com/Sourav0010/Object-Iterator/issues)
-  **Homepage**: [Documentation](https://github.com/Sourav0010/Object-Iterator#readme)

## License

This package is open-source and available under the ISC License.

## Author

Created by [Sourav Mohanty](https://github.com/Sourav0010).
