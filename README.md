# Symbolic Operation
[![GitHub](https://img.shields.io/badge/github-repo-green?style=flat&logo=github)](https://github.com/lainbo/symbolic-operation)
English | [简体中文](./README.zh-CN.md)

A collection of utility functions implemented using bitwise operations for optimized performance.

## Functions

| Function Name  | Description                                                  | Parameter Types        |
| -------------- | ------------------------------------------------------------ | ---------------------- |
| toInteger      | Convert a number to an integer by truncating decimals        | (x: number)            |
| round          | Round a number to the nearest integer                        | (x: number)            |
| ceil           | Round a number up to the nearest integer                     | (x: number)            |
| floor          | Round a number down to the nearest integer                   | (x: number)            |
| positiveModulo | Calculate the positive modulo of two numbers                 | (x: number, y: number) |
| negate         | Negate a number                                              | (x: number)            |
| abs            | Calculate the absolute value of a number                     | (x: number)            |
| min            | Get the minimum of two numbers                               | (x: number, y: number) |
| max            | Get the maximum of two numbers                               | (x: number, y: number) |
| swap           | Swap the values of two numbers                               | (x: number, y: number) |
| isOdd          | Check if a number is odd                                     | (x: number)            |
| isEven         | Check if a number is even                                    | (x: number)            |
| average        | Calculate the average of two numbers                         | (x: number, y: number) |
| isPowerOfTwo   | Check if a number is a power of 2                            | (x: number)            |
| nextPowerOfTwo | Get the nearest power of 2 greater than or equal to a number | (x: number)            |

## Installation

To install this library, run:
```sh
npm install symbolic-operation
```

## Usage

To use the functions in this library, import them into your project:

```javascript
import { round, isOdd } from 'bitwise-utilities';

console.log(round(4.7)); // Output: 5
console.log(isOdd(3));   // Output: true
```
## License

This project is licensed under the MIT License.

