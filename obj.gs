class Person{
  
  constructor(name,age){
    this.name = name
    this.age = age
  
  }  
  
  hello(){
    return "Hello!"
  }
  get getAge(){
    return this.age
  }
  static numFour(){
    return 4
  }
}

class Idiot extends Person {


}

function* generate(){
  yield 1;
  yield 4;
  yield 55;


}
async function dataPull(){

  return 333;

}
