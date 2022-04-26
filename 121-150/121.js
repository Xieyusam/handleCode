/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    const MORSE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    const sameSet = new Set()
    for( const word of words ){
        let code = ''
        for( const ch of word ){
            code += (MORSE[ch.charCodeAt() - 'a'.charCodeAt()]);
        }
        sameSet.add(code)
    } 
    return sameSet.size;
};