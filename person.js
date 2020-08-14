// there is a wrappper around it which has __dirname, __filename, exports require, module


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
};

module.exports = Person;