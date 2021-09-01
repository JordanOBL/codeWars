/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate. */

// ...

//compare the letter to every other letter in the word
//if letter matches other letter

function duplicateEncode(word) {
	let lowerCaseWord = word.toLowerCase(); // change argument to lowercase
	const output = []; // output array
	//new letter to check
	for (let i = 0; i <= lowerCaseWord.length; i++) {
		//letters to check against
		for (let j = 0; j <= lowerCaseWord.length; j++) {
			//if checking against itself, continue
			if (i === j) {
				continue;
				//if they match, add ")" to output[], break
			} else if (lowerCaseWord[i] == lowerCaseWord[j]) {
				output.push(")");
				break;
				//if j reaches cycles w/out matching, add "(" to output[]
			} else if (j == lowerCaseWord.length) {
				output.push("("); //add (  character to new array
			}
		}
	}
	//join elements from output[] to a string, return string
	return output.join("");
}
