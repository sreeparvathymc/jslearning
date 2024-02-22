// var arr1 = ["onion", "Cabbage", "Tomato", "Garlic"]
// var num = [10, 20, 30, 40]
// var str = "Hello"

// for(let x of str){
//      console.log(x + " ing")
// }
// function sum(num1, num2, ...nums){
//      let sum = 0
//      for(let x of nums){
//           sum += x
//      }
//      console.log(num1+num2+sum);
// }
// sum(10, 20, 30, 40, 50)

// let ar1 = [10, 20, 30]

// let ar2 = [40, 50, 60]

// let ar3 = [100, ...ar1, ...ar2, 70]

// let ar3 = ar1.concat(ar2)

// ar3.push(70)



let obj1 = {
    country: "india",
    capital: "New Delhi"
}
let obj2 = {
   language: "Hindi"
}
let obj3 = {
    pops: 2000
}
let obj4 = {...obj1, ...obj2, ...obj3
}
console.log(obj4)




