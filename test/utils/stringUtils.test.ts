import {getUniqueStrings} from "../../src/utils/stringUtils";

describe("getUniqueStrings", () => {
  [
      {testName: "single element returns self", input: ["a"], expected: ["a"]},
      {
          testName: "duplicate element is removed",
          input: ["a", "a"],
          expected: ["a"]
      },
      {
          testName: "multiple duplicate elements are removed",
          input: ["a", "a", "a"],
          expected: ["a"]
      },
      {
          testName: "duplicate elements don't affect other elements",
          input: ["a", "a", "b"],
          expected: ["a", "b"]
      },
  ].forEach(
      ({testName, input, expected}) => {
        it(testName, () => {
          expect(
              getUniqueStrings(input).sort()
          ).toStrictEqual(expected.sort());
        });
      }
  )
});
