class Age {


    yearPasses() {
        this.age++
    }

    amIOld() {
        if (this.age < 13) {
            console.log("You are young.");
        }
        else if (this.age >= 13 && this.age < 18) {
            console.log("You are a teenager.");
        } else {
            console.log("You are old.");
        }

    }
}

const person = new Age(4);

console.log(person.amIOld())