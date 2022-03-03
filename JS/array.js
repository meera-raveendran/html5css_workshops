// let arr=[1,2,3,4,5,6];
// console.log(arr[0],arr[2],arr[10]);
// console.log(arr.length);
// arr.length=3;
// console.log(arr[0],arr[4]);
// let arr=[10,20,30,40,50];
// console.log(arr.length);
// delete arr[0];
// console.log(arr);
// arr.push(60);
// console.log(arr);
// arr.unshift(10);
// console.log(arr);

// arr.pop(60);
// console.log(arr);
// arr.shift();
// console.log(arr);




// let arr=[10,20,30,40,50,60,70,80,90,100];
// arr.splice(3,2);
// console.log(arr);
// arr.splice(7,1);
// console.log(arr);
// arr.splice(0,1);
// console.log(arr);
// arr.splice(2,0,40,50);
// console.log(arr);
// arr.splice(8,0,100);
// console.log(arr);
// arr.splice(0,0,10);
// console.log(arr);
// let arr=[1,[2,3],[1,2,3]];

// console.log(arr.flat(1));


// let arr1=[1,2,3,4];
// console.log(arr1);
// let part1=arr1.slice(0,2);
// console.log(part1);
// let part2=arr1.slice(2);
// console.log(part2);
// let total=[...part2,...part1];
// console.log(total);
// let arr1=[1,2,3,4];
// let arr2=["one","two","three","four"];
// // console.log(arr1.map((element,index)=>{
// //     return [element,arr2[index]];
// // }).flat(1)
// // );
// console.log(arr1.flatMap((element,index)=>{
//     return [element,arr2[index]];
// })
// );
console.log(Array.from("ayaan").reverse().toString().replaceAll(",",""));