// map
// const array = ["parvathy","gayathri","jagan","alinta"]
// array.map((element,index)=>{
//     console.log(element)
// })
// *******************************************************************
// Prefer this method:-
// const array = ["parvathy","gayathri","jagan","alinta"]
// let names = array.map((element,index)=>{
//     return element;
// })
// console.log(names)
// *********************************************************************
// forEach
// let arr =["fruit","veg"]
// let item = arr.forEach((elem)=> return elem)
// console.log(item)

// Cannot return like map

// *********************************************************
// let arr = [];
// arr.push("Parvathy");
// console.log(arr)

// let arr =["a","b","c","d"]
// let filteredVal = arr.filter((ele) => {
//     return ele == "a"
// })
// console.log(filteredVal)
// ******************************************************************
// let arr = [15,16,17,18,19];
// let sum = 0;
// for(let i = 0; i<arr.length; i++ ){
//     sum = sum + arr[i];
// }
// console.log(sum)
// ******************************************************************
// const arr = [1,2,3,4,5]
// let sum = 0;
// for(i = 0; i < arr.length; i++){
//     if(i % 2 != 0 ){
//         sum = sum + arr[i]
//     }  
// }
// console.log(sum)
// ******************************************************************
// const arr = [1,2,3,4,]
// sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum = sum + arr[i]
// }
// console.log(sum)
// ******************************reduce************************************
// reduce
// const arr = [1,2,3,4,]
// let ans = arr.reduce((acc,elem,i) => {
//     return acc+elem
// },0)
// console.log(ans)
// *******************************************reduce********************
// const arr = [1,2,3,4,5,88,43,98];
// let ans = arr.reduce((acc,elem,i) => {
//     if (i % 2 != 0){
//         acc = acc+elem
//     }
//     return acc
// },0)
// console.log(ans)
// **********************************************************************
// e sum of elements of odd index
// const arr = [1,2,3,4,5]
// let sum = 0;
// for(i = 0; i < arr.length; i++){
//     if(i % 2 != 0 ){
//         sum = sum + arr[i]
//     }  
// }
// console.log(sum)
// **************************************reduce********************************
// In reduce sum of elements of even index
// const arr = [1,2,3,4,5];
// let ans = arr.reduce((acc,elem,i) => {
//     if(i % 2 == 0){
//         acc = acc + elem
//     }
//     return acc
// },0)
// console.log(ans)
// **********************************map********************************
// const arr = [1,2,3,4,5,6,7,8,9,10,11,12]
// let even = 0;
// let count = arr.map((element,index) => {
//     if(element % 2 == 0){
//     even= even+1
//     }
// })
// console.log(even)
// *******************************map*******************************
// const arr = [
//     {Name:"John", Age:"50"},
//     {Name:"Doe", Age:"25"},
//     { Name:"celin", Age:"15"}
//     ]
// arr.map((element,index) =>{
// console.log("Hello " + element.Name)
// })
// *************************sum using map****************************
// const arr = [
//     {name:"Tomato", price:50},
//     {name:"Orange", price:25},
//     { name:"Potato", price:15}
//     ]
// sum = 0;
// const result = arr.map((element,index) => {
//     sum = sum + element.price
// }) 
// console.log(sum)
// **************************************************************



// **************************************************************




// ************************reduce**************************************
// const arr = [
//     {name:"Tomato", price:50},
//     {name:"Orange", price:25},
//     { name:"Potato", price:15}
//     ]
// let result = arr.reduce((acc,elem,i) => {
//   acc = acc + elem.price 
//   return acc
// },0)
// console.log(result);
// ***************************************************
// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// let filtervoters = voters.filter((e)=>{
//     if(e.age <= 25){
//         console.log(e.name)
//     }
// })
// ********************************************************************************
// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// let filtervoters = voters.filter((elem)=>{
//     return elem.age <=25
// }).map((ele) =>{
//     return ele.name
// })
// console.log(filtervoters)
// ***********************************************************************************

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: true},
//     {name:'Sam' , age: 20, voted: true},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: true},
//     {name: 'Becky', age: 43, voted: true},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: true}
// ];
// let result = voters.map((ele) => {
//     if(ele.age <= 20){
//            ele.voted = false
//            return ele
//     }
//     else{
//         ele.voted = true
//            return ele
//     }
// })
// console.log(result)
//************************************************************************************ */
// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: true},
//     {name:'Sam' , age: 20, voted: true},
//     {name:'Phil' , age: 21, voted: false},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: true},
//     {name: 'Becky', age: 43, voted: true},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// const data = prompt("Enter a name:")
// const details = voters.find((ele)=>{
//     // console.log(ele)
//     if(data.toLowerCase() == ele.name.toLowerCase()){
//         return ele
//     }
// })
// if(details){
//     console.log(details)
// }else{
//     console.log("No data found")
// }
// ************************************************************************************************
// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: true},
//     {name:'Sam' , age: 20, voted: true},
//     {name:'Phil' , age: 21, voted: false},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: true},
//     {name: 'Becky', age: 43, voted: true},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// const data = prompt("Enter a name:")
// const details = voters.find((ele)=>{
//     // console.log(ele)
//     if(data.toLowerCase() == ele.name.toLowerCase()){
//         return ele
//     }
// })
// if(details){
//     console.log(details)
// }else{
//     console.log("No data found")
// }


// let newArr =[]
// for(let i = 0; i < 5; i++){
//     const name = prompt("Enter a name:")
//     newArr.push(name)
// }
// console.log(newArr)

 
