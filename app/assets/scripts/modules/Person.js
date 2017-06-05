class Person {
    constructor(fullName, favColor) {
        this.name = fullName;
        this.favoriteColor = favColor;
    }

    greet() {
        console.log("Hi there again, my name is " + this.name + " and my favorite colo is " + this.favoriteColor + ".");
    }
}

export default Person;