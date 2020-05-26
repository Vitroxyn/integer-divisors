/**
 * Generate all positive divisors of a positive natural number.
 *
 * Divisors are not generated in order.
 *
 * Time complexity: O(sqrt(n))
 *
 * Auxiliary space: O(1)
 *
 * @param n - A positive number without a decimal part
 * @yields divisor - A positive integer
 * @requires n >= 0
 */
export function* generateDivisors(n: number): Generator<number> {
  const sqrt = Math.sqrt(n);
  for (let i = 1; i <= sqrt; ++i) {
    if (n % i === 0) {
      yield i;
      const secondDivisor = n / i;
      if (i !== secondDivisor) yield secondDivisor;
    }
  }
}

/**
 * Generate all positive divisors of a positive natural number.
 *
 * Divisors are generated in increasing order from 1 to n.
 *
 * Time complexity: O(sqrt(n))
 *
 * Auxiliary space: O(sqrt(n))
 *
 * @param n - A positive number without a decimal part
 * @yields divisor - A positive integer
 * @requires n >= 0
 */
export function* generateDivisorsAscending(n: number): Generator<number> {
  const sqrt = Math.sqrt(n);
  let secondDivisors: Array<number> = [];
  for (let i = 1; i <= sqrt; ++i) {
    if (n % i === 0) {
      yield i;
      const secondDivisor = n / i;
      if (i !== secondDivisor) secondDivisors.push(secondDivisor);
    }
  }
  for (let i = secondDivisors.length - 1; i >= 0; --i)
    yield secondDivisors.pop()!;
}

/**
 * Generate all positive divisors of a positive natural number.
 *
 * Divisors are generated in decreasing order from n to 1.
 *
 * Time complexity: O(sqrt(n))
 *
 * Auxiliary space: O(sqrt(n))
 *
 * @param n - A positive number without a decimal part
 * @yields divisor - A positive integer
 * @requires n >= 0
 */
export function* generateDivisorsDescending(n: number): Generator<number> {
  const sqrt = Math.sqrt(n);
  let firstDivisors: Array<number> = [];
  for (let i = 1; i <= sqrt; ++i) {
    if (n % i === 0) {
      const secondDivisor = n / i;
      if (i !== secondDivisor) yield secondDivisor;
      firstDivisors.push(i);
    }
  }
  for (let i = firstDivisors.length - 1; i >= 0; --i)
    yield firstDivisors.pop()!;
}

/**
 * Generate all positive and negative divisors of a positive natural number.
 *
 * Divisors are not generated in order except the negative divisor is yielded first.
 *
 * Time complexity: O(sqrt(n))
 *
 * Auxiliary space: O(1)
 *
 * @param n - A positive number without a decimal part
 * @yields divisor - A positive or negative integer
 * @requires n >= 0
 */
export function* generateAllDivisors(n: number): Generator<number> {
  for (let divisor of generateDivisors(n)) {
    yield -divisor;
    yield divisor;
  }
}

/**
 * Generate all positive and negative divisors of a positive natural number.
 *
 * Divisors are generated in increasing order from -n to n.
 *
 * Time complexity: O(sqrt(n))
 *
 * Auxiliary space: O(sqrt(n))
 *
 * @param n - A positive number without a decimal part
 * @yields divisor - A positive or negative integer
 * @requires n >= 0
 */
export function* generateAllDivisorsAscending(n: number): Generator<number> {
  for (let divisor of generateDivisorsDescending(n)) yield -divisor;
  for (let divisor of generateDivisorsAscending(n)) yield divisor;
}

/**
 * Generate all positive and negative divisors of a positive natural number.
 *
 * Divisors are generated in decreasing order from n to -n.
 *
 * Time complexity: O(sqrt(n))
 *
 * Auxiliary space: O(sqrt(n))
 *
 * @param n - A positive number without a decimal part
 * @yields divisor - A positive or negative integer
 * @requires n >= 0
 */
export function* generateAllDivisorsDescending(n: number): Generator<number> {
  for (let divisor of generateDivisorsDescending(n)) yield divisor;
  for (let divisor of generateDivisorsAscending(n)) yield -divisor;
}

/**
 * Count number of positive divisors of a positive natural number.
 *
 * Time complexity: O(sqrt(n))
 *
 * Auxiliary space: O(1)
 *
 * @param n - A positive number without a decimal part
 * @returns number of positive divisors
 * @requires n >= 0
 */
export function countDivisors(n: number): number {
  let count = 0;
  const sqrt = Math.sqrt(n);
  for (let i = 1; i <= sqrt; ++i)
    if (n % i === 0)
      if (i === n / i) ++count;
      else count += 2;
  return count;
}

/**
 * Total of positive divisors of a positive natural number.
 *
 * Time complexity: O(sqrt(n))
 *
 * Auxiliary space: O(1)
 *
 * @param n - A positive number without a decimal part
 * @returns sum of positive divisors
 * @requires n >= 1
 */
export function sumDivisors(n: number): number {
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(n); ++i) {
    let tmpSum = 1;
    let term = 1;
    while (n % i === 0) {
      n = n / i;
      term *= i;
      tmpSum += term;
    }
    sum *= tmpSum;
  }
  if (n > 2) sum *= 1 + n;
  return sum;
}

/**
 * Product of positive divisors of a positive natural number.
 *
 * Time complexity: O(sqrt(n))
 *
 * Auxiliary space: O(1)
 *
 * @param n - A positive number without a decimal part
 * @returns product of positive divisors
 * @requires n >= 1
 */
export function multiplyDivisors(n: number): number {
  let product = 1;
  for (let divisor of generateDivisors(n)) product *= divisor;
  return product;
}
