'use strict';

/*
 * Create the function factorial here
 */

function factorial(n) {
    var i = n
    for (i; i > 1; i--){
        n = n * (i - 1); 
    }
    return n;
}