// Do the below programs in anonymous function
// a) Print odd numbers in an array

var numbers = [1,2,3,4,5,6,7,8,9];

var oddNumbers = numbers.filter(function(item) {
    return (item % 2 === 1);
});

console.log(oddNumbers);


// b) Convert all the strings to title caps in a string array

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(titleCase("hello my name is tanishq"));


// c) Sum of all numbers in and array

const sum = [10,20,30,40,50,].reduce(add,0); 

function add(accumulator, a) {
    return accumulator + a;
}

console.log(sum);


// d) Return all the prime numbers in an array

var arr = [1,2,3,4,5,6,7,8,9,10]
function isPrime(num) {
    for (let start = 2; num > start; start++) {
        if (num % start === 0) {
        return false;
        }
    }
    return num > 1;
}

console.log(arr.filter(isPrime));

// e) Return all the palindromes in an array

var arr = ['2002', '4897', 'man', 'racecar'];

function palindromize(word) {
    var palindrome = word.split("").reverse().join("");
    return palindrome === word ? word : 0;
}

console.log(JSON.stringify(arr.map(palindromize), 0, 4));

// f) Return median of two sorted arrays of the same size 

function getMedian(arr1, arr2, n)
{
	var i = 0; 
	var j = 0; 
	var count;
	var m1 = -1, m2 = -1;

	for (count = 0; count <= n; count++)
	{
	
		if (i == n)
		{
			m1 = m2;
			m2 = arr2[0];
			break;
		}

		else if (j == n)
		{
			m1 = m2;
			m2 = arr1[0];
			break;
		}

		if (arr1[i] <= arr2[j])
		{
			m1 = m2; 
			m2 = arr1[i];
			i++;
		}
		else
		{
			m1 = m2;
			m2 = arr2[j];
			j++;
		}
	}

	return (m1 + m2)/2;
}


var arr1 = [5,10,12,6,4];
var arr2 = [8,4,6,7,10];
var n1 = arr1.length;
var n2 = arr2.length;
if (n1 == n2)
	console.log("Median of two arrays is "+ getMedian(arr1, arr2, n1));
else
	console.log("Doesn't work for arrays of unequal size");

// g) Remove duplicates from an array 

function getUnique(arr){
    
    let uniqueArr = [];
    
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const arr = [6,4,9,5,6,7,7,8,5];

getUnique(arr);


// h) Rotate an array by k times

function rotateArray(arr,val,pos){
    arr = arr.concat(arr.splice(0,arr.indexOf(val)+pos));
    return arr;
}
var adjustedArray = rotateArray(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],'may',10);
console.log(adjustedArray)

/////////////////////////////////////////////////////////////////////

// Do the below programs in arrow function

// a) Print odd numbers in an array

function getOddNumbers() {
    var arr = [1,2,3,4,5,6,7,8,9];
    
    var oddNumber = arr.filter(number => number % 2 === 1);
    console.log(oddNumber);
}

getOddNumbers();

// b) Convert all the strings to title caps in a string array

function titleCase(str) {
    return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
}

console.log(titleCase('hello my name is tanishq'));


// c) Sum of all numbers in and array

let arr = [1, 2, 3, 4];
let sumOfNum = arr.reduce((v, i) => (v + i));
console.log(sumOfNum);


// d) Return all the prime numbers in an array

const arr = [1,2,3,4,5,6,7,8,9,10];
const isPrimeNum = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
return num !== 1;
};


const myPrimeArray = arr.filter(element => isPrimeNum(element));
console.log(myPrimeArray);


// e) Return all the palindromes in an array

function isPalindrome(word) {
    palindromeWord = ''
    for(var i = word.length - 1; i >= 0; i--) {
        palindromeWord += word.charAt(i)
    }
    return palindromeWord === word
}
    let arr =  ['2002', '5696', 'racecar', 'man', '131']
    let palindromeArr = []

    arr.forEach(word => {
        if (isPalindrome(word)) {
        palindromeArr.push(word)
        }
})
console.log(palindromeArr)