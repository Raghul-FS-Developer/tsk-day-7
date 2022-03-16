class Person {
    #name;
    #age;
    #profession;
    #hobbies;
    #address;
    #canVote;

    constructor(name, age, profession, hobbies, address){
        this.#name = name;
        this.#age = age;
        this.#profession = profession;
        this.#hobbies = hobbies;
        this.#address = address;
        this.#canVote = this.isEligibleToVote();
    }
    isEligibleToVote(){
        return this.#age >= 18 ? true : false;
    }

    getName() {
        return this.#name;
    }
    getAge(){
        return this.#age;
    } 
    getProfession(){
        return this.#profession;
    }
    getHobbies() {
        return this.#hobbies;
    }
    getAddress() {
        return this.#address;  
    } 
    getVotingEligibility() {
        return this.#canVote ? `${this.getName()} is eligible to vote` : `${this.getName()} is not eligible to vote`;
    }
}

const [ person1, person2 ] = [
    new Person('Person1', 25, 'Software Engineer', ['Singing', 'Drawing'], 'Seatle'),
    new Person('Person2', 28, 'Doctor', ['Reading', 'Cooking'], 'Palo Alto'),
]

//Printing the name
console.log('Name of person1: ', person1.getName());
console.log('Name of person2: ', person2.getName());

//Printing the hobbies
console.log('Hobbies of person1: ', person1.getHobbies());
console.log('Hobbies of person2: ', person2.getHobbies());

//Is eligible to vote
console.log(person1.getVotingEligibility());
console.log(person2.getVotingEligibility());

//Printing the objects itself
console.log('Person1 object: ', person1);
console.log('Person2 object: ', person2);
