# valid-english-words
Minor script that enables a client to generate valid English words, given a initial list of letters.

# Usage
```
enumerateValidWords("oogd");
```
Output (order is not guaranteed)
```
["good", "god", "dog", "goo", "do", "go"]
```

# Configuration
The list of valid English words is provided in `data/validEnglishWords.json`. You can add or remove words from this list to include when generating valid words.

# Setup
This is a simple node app meant to highlight logic and be used for a basis for further discussion.

As such, setup will be high level.

1. Install node and yarn
2. Install node packages
3. You can import the function `enumerateValidWords` for usage.
