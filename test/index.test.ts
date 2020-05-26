import {
  generateDivisors,
  generateDivisorsAscending,
  generateDivisorsDescending,
  generateAllDivisors,
  generateAllDivisorsAscending,
  generateAllDivisorsDescending,
  countDivisors,
  multiplyDivisors,
  sumDivisors,
} from '../src';

describe('generateDivisors', () => {
  test('zero', () => {
    let divisors = [...generateDivisors(0)];
    expect(divisors.length).toEqual(0);
  });
  test('one', () => {
    let divisors = [...generateDivisors(1)];
    expect(divisors.length).toEqual(1);
    expect(divisors).toContainEqual(1);
  });
  test('prime', () => {
    let divisors = [...generateDivisors(7)];
    expect(divisors.length).toEqual(2);
    expect(divisors).toContainEqual(1);
    expect(divisors).toContainEqual(7);
  });
  test('max bound', () => {
    let divisors = [...generateDivisors(490214112)];
    expect(divisors.length).toEqual(24);
    expect(divisors).toContainEqual(2);
    expect(divisors).toContainEqual(3);
    expect(divisors).toContainEqual(4);
    expect(divisors).toContainEqual(6);
    expect(divisors).toContainEqual(8);
    expect(divisors).toContainEqual(12);
    expect(divisors).toContainEqual(16);
    expect(divisors).toContainEqual(24);
    expect(divisors).toContainEqual(32);
    expect(divisors).toContainEqual(48);
    expect(divisors).toContainEqual(96);
    expect(divisors).toContainEqual(5106397);
    expect(divisors).toContainEqual(10212794);
    expect(divisors).toContainEqual(15319191);
    expect(divisors).toContainEqual(20425588);
    expect(divisors).toContainEqual(30638382);
    expect(divisors).toContainEqual(40851176);
    expect(divisors).toContainEqual(61276764);
    expect(divisors).toContainEqual(81702352);
    expect(divisors).toContainEqual(122553528);
    expect(divisors).toContainEqual(163404704);
    expect(divisors).toContainEqual(245107056);
    expect(divisors).toContainEqual(490214112);
  });
});

describe('generateDivisorsAscending', () => {
  test('zero', () => {
    let divisors = [...generateDivisorsAscending(0)];
    expect(divisors).toEqual([]);
  });
  test('one', () => {
    let divisors = [...generateDivisorsAscending(1)];
    expect(divisors).toEqual([1]);
  });
  test('prime', () => {
    let divisors = [...generateDivisorsAscending(19)];
    expect(divisors).toEqual([1, 19]);
  });
  test('42', () => {
    let divisors = [...generateDivisorsAscending(42)];
    expect(divisors).toEqual([1, 2, 3, 6, 7, 14, 21, 42]);
  });
});

describe('generateDivisorsDescending', () => {
  test('zero', () => {
    let divisors = [...generateDivisorsDescending(0)];
    expect(divisors).toEqual([]);
  });
  test('one', () => {
    let divisors = [...generateDivisorsDescending(1)];
    expect(divisors).toEqual([1]);
  });
  test('prime', () => {
    let divisors = [...generateDivisorsDescending(19)];
    expect(divisors).toEqual([19, 1]);
  });
  test('42', () => {
    let divisors = [...generateDivisorsDescending(42)];
    expect(divisors).toEqual([42, 21, 14, 7, 6, 3, 2, 1]);
  });
});

describe('generateAllDivisors', () => {
  test('zero', () => {
    let divisors = [...generateAllDivisors(0)];
    expect(divisors.length).toEqual(0);
  });
  test('one', () => {
    let divisors = [...generateAllDivisors(1)];
    expect(divisors.length).toEqual(2);
    expect(divisors).toContainEqual(-1);
    expect(divisors).toContainEqual(1);
  });
  test('prime', () => {
    let divisors = [...generateAllDivisors(19)];
    expect(divisors.length).toEqual(4);
    expect(divisors).toContainEqual(-1);
    expect(divisors).toContainEqual(1);
    expect(divisors).toContainEqual(-19);
    expect(divisors).toContainEqual(19);
  });
  test('42', () => {
    let divisors = [...generateAllDivisors(42)];
    expect(divisors.length).toEqual(16);
    expect(divisors).toContainEqual(-1);
    expect(divisors).toContainEqual(1);
    expect(divisors).toContainEqual(-2);
    expect(divisors).toContainEqual(2);
    expect(divisors).toContainEqual(-3);
    expect(divisors).toContainEqual(3);
    expect(divisors).toContainEqual(-6);
    expect(divisors).toContainEqual(6);
    expect(divisors).toContainEqual(-7);
    expect(divisors).toContainEqual(7);
    expect(divisors).toContainEqual(-14);
    expect(divisors).toContainEqual(14);
    expect(divisors).toContainEqual(-21);
    expect(divisors).toContainEqual(21);
    expect(divisors).toContainEqual(-42);
    expect(divisors).toContainEqual(42);
  });
});

describe('generateAllDivisorsAscending', () => {
  test('zero', () => {
    let divisors = [...generateAllDivisorsAscending(0)];
    expect(divisors).toEqual([]);
  });
  test('one', () => {
    let divisors = [...generateAllDivisorsAscending(1)];
    expect(divisors).toEqual([-1, 1]);
  });
  test('prime', () => {
    let divisors = [...generateAllDivisorsAscending(19)];
    expect(divisors).toEqual([-19, -1, 1, 19]);
  });
  test('42', () => {
    let divisors = [...generateAllDivisorsAscending(42)];
    expect(divisors).toEqual([
      -42,
      -21,
      -14,
      -7,
      -6,
      -3,
      -2,
      -1,
      1,
      2,
      3,
      6,
      7,
      14,
      21,
      42,
    ]);
  });
});

describe('generateAllDivisorsDescending', () => {
  test('zero', () => {
    let divisors = [...generateAllDivisorsDescending(0)];
    expect(divisors).toEqual([]);
  });
  test('one', () => {
    let divisors = [...generateAllDivisorsDescending(1)];
    expect(divisors).toEqual([1, -1]);
  });
  test('prime', () => {
    let divisors = [...generateAllDivisorsDescending(19)];
    expect(divisors).toEqual([19, 1, -1, -19]);
  });
  test('42', () => {
    let divisors = [...generateAllDivisorsDescending(42)];
    expect(divisors).toEqual([
      42,
      21,
      14,
      7,
      6,
      3,
      2,
      1,
      -1,
      -2,
      -3,
      -6,
      -7,
      -14,
      -21,
      -42,
    ]);
  });
});

describe('countDivisors', () => {
  test('zero', () => {
    expect(countDivisors(0)).toEqual(0);
  });
  test('one', () => {
    expect(countDivisors(1)).toEqual(1);
  });
  test('prime', () => {
    expect(countDivisors(19)).toEqual(2);
  });
  test('superior highly composite number', () => {
    expect(countDivisors(720720)).toEqual(240);
  });
});

describe('sumDivisors', () => {
  test('one', () => {
    expect(sumDivisors(1)).toEqual(1);
  });
  test('prime', () => {
    expect(sumDivisors(7)).toEqual(8);
  });
  test('superior highly composite number', () => {
    expect(sumDivisors(720720)).toEqual(3249792);
  });
});

describe('multiplyDivisors', () => {
  test('one', () => {
    expect(multiplyDivisors(1)).toEqual(1);
  });
  test('prime', () => {
    expect(multiplyDivisors(19)).toEqual(19);
  });
  test('superior highly composite number', () => {
    expect(multiplyDivisors(60)).toEqual(46656000000);
  });
});
