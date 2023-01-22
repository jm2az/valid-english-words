export function stringToArrayOfCharacters(s: string): string[] {
    return s.split("");
}

export function arrayOfCharactersToString(arr: string[]): string {
    return arr.join("")
}

export function getUniqueStrings(arr: string[]): string[] {
    var seen = {};
    return arr.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}