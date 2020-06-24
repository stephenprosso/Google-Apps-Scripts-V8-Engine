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
 
 
  
  console.log(newArr);
  
}
