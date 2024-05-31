//Task1
const col1 = [1, 2, 3];
const col2 = [4, 5, 6];
const col3 = [7, 8, 9];  //3 arrayin sütun üzrə hasilini tapib,toplamaq 
//  Output  1*4*7 + 2*5*8 + 3*6*9 = 28 + 80 + 162 = 270

let result = 0;
for(let i= 0; i < col1.length; i++) {
    result += col1[i] * col2[i] * col3[i];
}
console.log(result)

// Task 3
//"hello world" sözündəki "l"-ları "o" ilə əvəz edin  //Output: "heooo worod"

const text = "Hello World";
const string = word(text);
console.log(string);

function word(str) {
   let result = '';

   for (let i =0; i < str.length; i++) {
    if (str[i] === 'l') {
        result += 'o';
    } else {
        result += str[i]
    }
   }
   return result;
}

// Task 4

//Massivdəki hər bir elementin rəqəmlərini artan sıraya görə sıralayan funksiya yazın.

const numbers = [515, 341, 98, 44, 211];
const sorted = sort(numbers);
console.log(sorted)

function sort(arr) {
    return arr.map(num => parseInt(num.toString().split('').sort().join(''),10));
}

// Task 2
//"This is an example sentence with some odd and even words"  --> Bu cümlədə tək uzunluqda olan bütün sözləri tərsinə çevirin. Cüt uzunluqlu sözlər dəyişdirilmir. // Output: "sihT is an elpmaxe ecnetnes with emos ddo and neve sdrow"

 function reversewords(sentence) {
    const words = sentence.split("");

    for ( let i = 0; i < sentence.length; i++) {
        if(words[i].length % 2 === 0) {
            words[i] = words[i].split("").reverse().join("");
        }
    }
 }

 const sentence = "This is an example sentence with some odd and even words";
 const sentences = reversewords(sentence);
 console.log(sentences)