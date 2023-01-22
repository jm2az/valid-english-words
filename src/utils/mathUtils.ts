export function getAllPermutations<T>(elements: T[]): T[][] {
    // Shamelessly copied from here: https://stackoverflow.com/questions/37579994/generate-permutations-of-javascript-array
  let ret = [];

  for (let i = 0; i < elements.length; i = i + 1) {
    let rest = getAllPermutations(elements.slice(0, i).concat(elements.slice(i + 1)));

    if(!rest.length) {
      ret.push([elements[i]])
    } else {
      for(let j = 0; j < rest.length; j = j + 1) {
        ret.push([elements[i]].concat(rest[j]))
      }
    }
  }
  return ret;

}

function getAllCombinationsMinusEmpty(elements) {
    if (elements.length === 0) {
        return [];
    }

    const combinations = [];

    for (let i=0; i<elements.length; i++) {
        const nestedCombinations = getAllCombinationsMinusEmpty(elements.splice(i+1));
        const currentLetter = elements[i];
        combinations.push([currentLetter]);
        nestedCombinations.forEach((nestedCombination) => {
            combinations.push([currentLetter].concat(nestedCombination));
            combinations.push(nestedCombination);
        })
    }

    return combinations;
}

export function getAllCombinations(elements) {
    return [[]].concat(getAllCombinationsMinusEmpty(elements))
}
