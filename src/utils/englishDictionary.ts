import { words } from '../../data/validEnglishWords.json'

export function isValidEnglishWord(s: string): boolean {
    // This function could be optimized to load the data one time, and convert it to a hash table for O(1) lookup
    return words.includes(s);
}