import { describe, expect, test } from "bun:test";
import { parse } from "./index";

const cases = [
  ["1abc2", 12],
  ["pqr3stu8vwx", 38],
  ["a1b2c3d4e5f", 15],
  ["treb7uchet", 77],
] as [string, number][];

describe("calibration document", () => {
  test("parse calibration value", () => {
    for (const testCase of cases) {
      expect(parse(testCase[0])).toBe(testCase[1]);
    }
  });

  test("sum", () => {
    const val = cases.map(([v]) => parse(v)).reduce((acc, cur) => acc + cur);

    expect(val).toEqual(142);
  });
});
