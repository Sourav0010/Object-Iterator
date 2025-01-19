# make-iterator

`make-iterator` is a lightweight npm package that enables JavaScript objects to become iterable. This functionality allows you to iterate through an object's values using standard iteration constructs like `for...of` loops.

## Motivation

JavaScript objects are not inherently iterable, which can limit their utility when working with modern iteration patterns. `make-iterator` solves this problem by providing a simple function that adds an iterable behavior to a given object.

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
const makeIterator = require('object-iterator-js');

const myObject = {
   name: 'John',
   age: 30,
   city: 'New York',
};

// Make the object iterable
makeIterator(myObject);

// Use a for...of loop to iterate over the object's values
for (const value of myObject) {
   console.log(value);
}

// Output:
// John
// 30
// New York

// Example with spread operator
const iterableObject = {
   a: 1,
   b: 2,
   c: 3,
};

makeIterator(iterableObject);

// Spread the object's values into an array
const valuesArray = [...iterableObject];
console.log(valuesArray);

// Output:
// [1, 2, 3]

// Combine with other iterables
const otherArray = [4, 5, 6];
const combined = [...iterableObject, ...otherArray];
console.log(combined);

// Output:
// [1, 2, 3, 4, 5, 6]
```

## API

### `makeIterator(value)`

#### Parameters

-  `value` (Object): The object to make iterable.

#### Returns

-  None. The function modifies the input object by adding an `@@iterator` method (defined as `Symbol.iterator`).

#### Behavior

Once `makeIterator` is applied to an object, you can use iteration constructs like `for...of` to loop through the values of the object.

## Notes

-  The function modifies the input object directly by defining a `Symbol.iterator` property.
-  The iteration order corresponds to the object's keys as returned by `Object.keys()`.
-  Properties added to the object after calling `makeIterator` will not be included in the iteration unless `makeIterator` is called again.

## Links

-  **Repository**: [GitHub](https://github.com/Sourav0010/Object-Iterator)
-  **Issues**: [Report Bugs](https://github.com/Sourav0010/Object-Iterator/issues)
-  **Homepage**: [Documentation](https://github.com/Sourav0010/Object-Iterator#readme)

## License

This package is open-source and available under the ISC License.

## Author

Created by [Sourav Mohanty](https://github.com/Sourav0010).
