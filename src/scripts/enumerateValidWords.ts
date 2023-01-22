import {arrayOfCharactersToString, getUniqueStrings, stringToArrayOfCharacters} from "../utils/stringUtils";
import {isValidEnglishWord} from "../utils/englishDictionary";
import {getAllCombinations, getAllPermutations} from "../utils/mathUtils";


export function enumerateValidWords(letters: string): string[] {
    const letterLowercase = letters.toLowerCase();
    const lettersAsArrayOfCharacters = stringToArrayOfCharacters(letterLowercase);

    // Generate each possible word
    const allCombinationsOfCharacters = getAllCombinations(lettersAsArrayOfCharacters);
    const allPermutationsOfCombinationsOfCharacters = [];
    allCombinationsOfCharacters.forEach((combination) => {
        getAllPermutations(combination).forEach((permutation) => {
            allPermutationsOfCombinationsOfCharacters.push(permutation)
        })
    });
    const wordPermutations = allPermutationsOfCombinationsOfCharacters.map(arrayOfCharactersToString);

    // If the list of possible words can get long (permutations and combinations grow exponentially),
    // this could be parallelized to improve speed
    const validEnglishWords = wordPermutations.filter(isValidEnglishWord);
    return getUniqueStrings(validEnglishWords);
}