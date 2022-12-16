class Student {
    constructor(name) {
      this.name=name;
    }
    
    getName(){
      return this.name;
    }
    
    setName(name) {
       this.name=name;
    }
}
let Stu1=new Student("Arun Kumar");

module.exports={Stu1};