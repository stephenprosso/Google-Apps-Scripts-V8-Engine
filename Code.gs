function test(){
  let arr = ["A","B","C","D","E"]
  let [x,y, ...z] = arr
  
  console.log(z)
  
  let n = generate()
  let a1 = n.next()
  console.log(a1)
  let a2 = n.next()
  console.log(a2)
  let a3 = n.next()
  console.log(a3)
  let a4 = n.next()
  console.log(a4)
  
  
  // old way to write this function
  ////let dt = dataPull().then(function (d) {return console.log(d)});
  //new way to write the fucntion on one line using ES6 typescript singe line function
  ////let dt = dataPull().then(d=> console.log(d))
  //function refactored down further
  let dt = dataPull().then(console.log)
  
  let total = multiply(3,4)
  let text = `your total is ${total}`
  console.log(total)
  console.log(text)
  

}
//here the function uses the default values for x and y, These are thre default values. If you call this function and pass
//different values for the arguments it will NOT use the default
function multiply(x=1,y=2){
  return x*y
}


function myFunction() {
  
  const x = 1
  let y = 2
  var z = x + y
  
  console.log(z);
  
  
  let arr = ["A","B","C"];
  //old way
  //let newArr = arr.map(function(r){return r + "-0"})
  //new way with arrow function
  //let newArr = arr.map((r) => {return r + "-0"})
  //new arrow function refactored
   let newArr = arr.map(r => r + "-0" )
  
  console.log(newArr)
  
  //let p1 = new Person("Hottie",21)
  //class idiot is extended from the person class
   let p1 = new Idiot("Hottie",21)
  console.log(p1.hello())
  console.log(p1.getAge)
 
  console.log(Person.numFour())
 
  
}

