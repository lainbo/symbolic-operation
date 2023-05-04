/**
 * Convert a number to an integer by truncating decimals.将数字转换为整数，去除小数部分。
 * @param x Number to be converted to an integer.需要转换为整数的数字。
 * @returns Result after conversion.转换后的结果。
 */
export function toInteger(x: number): number {
  return Number.isFinite(x) ? ~~x : 0;
}

/**
 * Round a number to the nearest integer.将数字四舍五入到最接近的整数。
 * @param x Number to be rounded.需要四舍五入的数字。
 * @returns Result after rounding.四舍五入后的结果。
 */
export function round(x: number): number {
  return Number.isFinite(x) ? (x + 0.5) | 0 : 0;
}

/**
 * Round a number up to the nearest integer.将数字向上取整到最接近的整数。
 * @param x Number to be rounded up.需要向上取整的数字。
 * @returns Result after rounding up.向上取整后的结果。
 */
export function ceil(x: number): number {
  return Number.isFinite(x) ? -~x : 0;
}

/**
 * Round a number down to the nearest integer.将数字向下取整到最接近的整数。
 * @param x Number to be rounded down.需要向下取整的数字。
 * @returns Result after rounding down.向下取整后的结果。
 */
export function floor(x: number): number {
  return Number.isFinite(x) ? x | 0 : 0;
}

/**
 * Calculate the positive modulo of two numbers.计算两个数字的正模运算结果。
 * @param x Dividend.被除数。
 * @param y Divisor.除数。
 * @returns Result of the positive modulo operation.正模运算的结果。
 */
export function positiveModulo(x: number, y: number): number {
  if (!Number.isFinite(x) || !Number.isFinite(y) || y <= 0) {
    return 0;
  }

  if ((y & (y - 1)) === 0) {
    return x & (y - 1);
  } else {
    return x % y;
  }
}

/**
 * Negate a number.求一个数字的相反数。
 * @param x Number to be negated.需要求相反数的数字。
 * @returns Result after negation.相反数的结果。
 */
export function negate(x: number): number {
  return Number.isFinite(x) ? 0 - x : 0;
}

/**
 * Calculate the absolute value of a number.计算一个数字的绝对值。
 * @param x Number to calculate the absolute value of.需要计算绝对值的数字。
 * @returns Absolute value of the given number.给定数字的绝对值。
 */
export function abs(x: number): number {
  return Number.isFinite(x) ? (x ^ (x >> 31)) : 0;
}

/**
 * Get the minimum of two numbers.获取两个数字中的较小值。
 * @param x First number.第一个数字。
 * @param y Second number.第二个数字。
 * @returns Minimum of the two given numbers.两个给定数字中的较小值。
 */
export function min(x: number, y: number): number {
  if (!Number.isFinite(x) || !Number.isFinite(y)) {
    return NaN;
  }

  return x ^ ((x ^ y) & -(x < y));
}

/**
 * Get the maximum of two numbers.获取两个数字中的较大值。
 * @param x First number.第一个数字。
 * @param y Second number.第二个数字。
 * @returns Maximum of the two given numbers.两个给定数字中的较大值。
 */
export function max(x: number, y: number): number {
  if (!Number.isFinite(x) || !Number.isFinite(y)) {
    return NaN;
  }

  return y ^ ((x ^ y) & -(x < y));
}

/**
 * Swap the values of two numbers.交换两个数字的值。
 * @param x First number.第一个数字。
 * @param y Second number.第二个数字。
 * @returns Tuple with the swapped values of the input numbers.包含输入数字交换后的值的元组。
 */
export function swap(x: number, y: number): [number, number] {
  if (!Number.isFinite(x) || !Number.isFinite(y)) {
    return [NaN, NaN];
  }

  x ^= y;
  y ^= x;
  x ^= y;

  return [x, y];
}

/**
 * Check if a number is odd.检查一个数字是否为奇数。
 * @param x Number to check.需要检查的数字。
 * @returns True if the given number is odd, false otherwise.如果给定数字为奇数，则返回true，否则返回false。
 */
export function isOdd(x: number): boolean {
  return Number.isFinite(x) && (x & 1) === 1;
}

/**
 * Check if a number is even.检查一个数字是否为偶数。
 * @param x Number to check.需要检查的数字。
 * @returns True if the given number is even, false otherwise.如果给定数字为偶数，则返回true，否则返回false。
 */
export function isEven(x: number): boolean {
  return Number.isFinite(x) && (x & 1) === 0;
}

/**
 * Calculate the average of two numbers.
 * 计算两个数字的平均值。
 * @param x First number. 第一个数字。
 * @param y Second number. 第二个数字。
 * @returns Average of the two given numbers. 两个给定数字的平均值。
 */
export function average(x: number, y: number): number {
  return Number.isFinite(x) && Number.isFinite(y) ? (x + y) >> 1 : NaN;
}

/**
 * Check if a number is a power of 2.检查一个数字是否是2的幂。
 * @param x Number to check.需要检查的数字。
 * @returns True if the given number is a power of 2, false otherwise.如果给定数字是2的幂，则返回true，否则返回false。
 */
export function isPowerOfTwo(x: number): boolean {
  return Number.isFinite(x) && x !== 0 && (x & (x - 1)) === 0;
}

/**
 * Get the nearest power of 2 greater than or equal to a given number.获取大于或等于给定数字的最近的2的幂。
 * @param x Number to find the nearest power of 2 for. 需要查找最近2的幂的数字。
 * @returns Nearest power of 2 greater than or equal to the given number. 大于或等于给定数字的最近的2的幂。
 */
export function nextPowerOfTwo(x: number): number {
  if (!Number.isFinite(x) || x <= 0) {
    return NaN;
  }

  x -= 1;
  x |= x >> 1;
  x |= x >> 2;
  x |= x >> 4;
  x |= x >> 8;
  x |= x >> 16;

  return x + 1;
}
