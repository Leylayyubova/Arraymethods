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