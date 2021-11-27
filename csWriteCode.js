// 1) Sum Zero
const addToZero = (array) => {
let value = "False"
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = "True"
      }}}}
console.log(value)
}
// addToZero([0, 1, 2, 3, 4, 5])



// 2) Unique Characters
function allUnique(str) {
    uniqueTest = new Set(str).size == str.length;
    console.log(uniqueTest)
  }
// allUnique("Moonday")



// 3) Pangram Sentence
function isPangram(string){
    const letters = string.toLowerCase().match(/[a-z]/g);
    const alphabet = [...new Set(letters)]
    console.log(alphabet.length === 26);
}
//  isPangram("The quick brown fox jumps over the lazy dog!")



// 4) Longest Word
function findLongestWord(arr) {
    let len = 0
    for (let i = 0; i < arr.length; i++) {
      if( arr[i].length > len) {
        len = arr[i].length
      }
    }
    console.log(len)
  }
//   findLongestWord(["hi", "hello"])