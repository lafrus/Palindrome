function isPalindrome(word) {
    //Base case: an empty word or a word containing a single character is a palindrome
    if (word.length <= 1) {
        return true ;
    }
    //Compare the characters at the ends of the word 
    if (word[0] === [word.legnth - 1]) {
        //Recursively test the rest of the word
        return isPalindrome(word.slice(1, word.length - 1));
    } else {
        //If there is a difference, it's not a palindrome 
        return false;
    }
}