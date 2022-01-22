
// this is a function that takes 2 inputs
// first input(plaintext) is a string which is needed to be encrypted
// second input (shift) is a number; how many letters is the message/string being shifted
function enc_caesar(plaintext, shift) {
    // An array that contains all the letters in alphabet
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    // this is an empty strig, this will contain the Encrypted message after encryption is done
    var enc_string = ""
    //this is a loop, it will go over each letter of plaintext (input string)
    for (let i = 0; i < plaintext.length; i++) {
        //this is another loop which is inside the first loop
        //it will go over each letter in alphabet array
        for (let j = 0; j < alphabet.length; j++) {
            //this checkes letter from plaintext matches with which letter in alphabet
            if (plaintext[i] == alphabet[j]) {
                //shifts the letter
                //if (j + shift) is greater than 26 we find the mod 26 of that number
                //this way we get an index lower than 26, so we circle around all the letters in alphabet array
                //we keep adding that encrypted letter at the end of enc_string
                enc_string += alphabet[(j + shift) % 26];
            }
        }
    }
    print("Original String: " + plaintext) // Print original string
    print("Encrypted String: " + enc_string) // Print encrypted stirng
}
enc_caesar("wxyz", 4);
//Worked as a group