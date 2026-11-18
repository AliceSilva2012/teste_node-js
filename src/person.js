class Person {
    constructor(name) {
        this.name = name
    }
    sayName() {
        return `Olá, ${this.name}!`;
    }
}

module.exports = { 
    Person, 
};