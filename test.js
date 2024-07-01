// 1-Write a function to generate the first n numbers in the Fibonacci sequence.
// function feb(n){
//     let x=0;
//     let y=1;
//     for(let i=0; i<n; i++){
//         console.log(x);
//         let temp=y;
//         y=x+y;
//         x=temp;
//     }
// }
// let n=5;
// feb(n)

// 10 -Write a function to check if a given string is a palindrome.
// let Str="dom";
// let a=Str;
// let ans=Str.split('').reverse().join('');
// if(ans===a){
//     console.log("YES")
// }else{
//     console.log("NO")
// }

// 9 Given an integer array, return all possible subsets (the power set).
// function sub(num){
//     let r=[];
//     function big(b,c){
//         r.push([...c]);
//         for(let i=b; i<num.length; i++){
//             c.push(num[i]);
//             big(i+1,c)
//             c.pop();
//         }
//     }
//     big(0,[])
//     return r;
// }
// let num=[1,2,3]
// console.log(sub(num))

//  7 Find the kth largest element in an unsorted array.

// function keNumber(num,k){
//     num.sort((a,b)=>b-a);
//         return num[k-1]
// }
// let num=[3,2,15,6,4]
// let k=1;
// console.log(keNumber(num,k))


// 6 Given an array of strings, group anagrams together.
// function printAnagram(strs) {
//     let group = {};
//     for (let str of strs) {
//         let sortedStr = str.split("").sort().join("");
//         if (!group[sortedStr]) {
//             group[sortedStr] = [];
//         }
//         group[sortedStr].push(str);
//     }
//     return Object.values(group);
// }
// let strs = ['bat', 'cat', 'mat', 'hat', 'eat'];
// console.log(printAnagram(strs));

// 3 Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the 
// input string is valid.

// function brakets(str){
//     let s=[];
//     let match={
//         ")":"(",
//         "}":"{",
//         "[":"]",
//     };
//     for(let char of str){
//         if(char==='(' || char==='{' || char==='['){
//             s.push(char);
//         }else if(char===')'||  char==']'){
//             if(s.length==0 || s.pop()!=match[char]){
//                 return false;
//             }
//         }
//         return s.length==0;
//     }
// }
// console.log(brakets("("))









