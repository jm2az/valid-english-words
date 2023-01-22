import {enumerateValidWords} from "../../src/scripts/enumerateValidWords";

describe("enumerateValidWords", () => {
  [
      {testName: "empty string returns empty list", input: "", expected: []},
      {testName: "'oogd' returns 6 words", input: "oogd", expected: ["good", "god", "dog", "goo", "do", "go"]},
      {testName: "removes duplicates", input: "aa", expected: ["a"]},
  ].forEach(
      ({testName, input, expected}) => {
        it(testName, () => {
          expect(
              enumerateValidWords(input).sort()
          ).toStrictEqual(expected.sort());
        });
      }
  )
});