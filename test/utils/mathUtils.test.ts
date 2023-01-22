import {getAllCombinations, getAllPermutations} from "../../src/utils/mathUtils";

describe("getAllPermutations", () => {
  [
      {testName: "empty string returns empty list", input: [], expected: []},
      {testName: "single element returns self", input: ["a"], expected: [["a"]]},
      {
          testName: "small sample",
          input: ["a", "b", "c"],
          expected: [["a", "b", "c"], ["a", "c", "b"], ["b", "a", "c"], ["b", "c", "a"], ["c", "a", "b"], ["c", "b", "a"]]},
  ].forEach(
      ({testName, input, expected}) => {
        it(testName, () => {
          expect(
              getAllPermutations(input)
          ).toStrictEqual(expected);
        });
      }
  )
});

describe("getAllCombinations", () => {
  [
      {testName: "empty string returns empty list", input: [], expected: [[]]},
      {testName: "single element returns self and empty list", input: ["a"], expected: [[], ["a"]]},
      {
          testName: "small sample",
          input: ["a", "b", "c"],
          expected: [[], ["a"], ["a", "b"], ["b"], ["a", "b", "c"], ["b", "c"], ["a", "c"], ["c"]]},
  ].forEach(
      ({testName, input, expected}) => {
        it(testName, () => {
          expect(
              getAllCombinations(input)
          ).toStrictEqual(expected);
        });
      }
  )
});