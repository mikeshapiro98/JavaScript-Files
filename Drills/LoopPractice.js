'use strict';

//PROMPT:
// Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:
//  First, print each vowel in on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the       same order as it appeared in.

// Second, print each consonant (i.e., non-vowel) in on a new line in the same order as it appeared in.


/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    
    var letters = s.split('')
    var vowels = [];
    var con = [];
    for (var i = 0; i < letters.length; i++){
    //  if (letters[0] === ' ') {
    //         continue;
    //     }
        if (letters[i] === 'a' || letters[i] === 'e' || letters[i] === 'i' || letters[i] === 'o' || letters[i] === 'u') {
            vowels.push(letters[i]);
        }
        else {
            con.push(letters[i]);
        
        }
    }
    for (i = 0; i < vowels.length; i++){
        console.log(vowels[i]);
    }
    for (i = 0; i < con.length; i++) {
        console.log(con[i]);
    }
    


}