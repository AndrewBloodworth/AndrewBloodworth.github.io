//Classes and Inheritance
class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    get name() {
      return this._name;
    }
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    //Methods that are accessible to all instances of this class.
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
    //Static methods are only available to this class. No inherited classes. HospitalEmployee.generatePassword()
    static generatePassword() {
      return Math.floor(Math.random()*10000)
    }
  }
  //This is a subclass or extention of the other class.
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 
    get certifications() {
      return this._certifications;
    }
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }



  class libraryItem {
    constructor(title) {
      this._title = title;
      this._ratings = [];
      this._isCheckedOut = false;
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    getAverageRating() {
      let r = this._ratings
      if (r.length != 0) {
        let sum = 0;
        for (let rating in r) {
          sum += r[rating]
        }
        return Math.round((sum / r.length) * 100) / 100;
      } else {
        return `There are no ratings for ${this._title}.`
      }
    }
    toggleCheckOutStatus() {
      this._isCheckedOut = this._isCheckedOut ? false : true;
    }
    addRating(rating) {
      this._ratings.push(rating);
    }
  }
  
  class book extends libraryItem {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  const warAndPeace = new book('Leo Tolstoy','War and Peace', 1225)

  class movie extends libraryItem {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  const incredibles = new movie('Brad Bird','The Incredibles', 116)
  
  class cd extends libraryItem {
    constructor(artist, title, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    get artist() {
      return this._artist;
    }
    get songs() {
      return this._songs;
    }
  }
  const porterRobinson = new cd('Porter Robinson','Worlds', ['song1','song2','song3']);
  
  class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents= numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(num) {
      if (typeof num === 'number') {
        this._numberOfStudents = num;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
      
    }
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers) {
      let rNum = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[rNum];
    }
  }
  const mySchool = new School('Dakota Ridge', 'high', 500);
  
  class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy
    }
  }
  const pSchool = new Primary('Dakota Ridge', 500, "Pick yo kids up");
  
  class Middle extends School {
    constructor(name, numberOfStudents) {
      super(name, 'middle', numberOfStudents);
    }
  }
  const mSchool = new Middle('Dakota Ridge', 500);
  mSchool.quickFacts();
  
  class High extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      return this._sportsTeams
    }
  }
  const hSchool = new High('Dakota Ridge', 500, ['football','basketball','baseball']);


  //Error Handling

  //Does not stop the program.
  Error('Error text.')
  
  //Stops the program.
  throw Error('Error text.')

  //Try catch
  try {
    throw Error('My error');
  } catch(e) {
    console.log(e);
  }





  //Tests with Mocha

  /*
  EXAMPLE Package.json
  {
  "name": "learn-mocha-intro-start",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",

  "scripts": {
    "test": "mocha"
  },

  "author": "",
  "license": "ISC",
  "devDependencies": {
    "mocha": "^3.5.3"
  }
}
*/

  describe('Math', () => {
    describe('.min', () => {
      it('returns the argument with the lowest value', () => {
  
      })
    })
  })

  // import assert here
const assert = require('assert');

describe('+', () => {
  it('returns the sum of its arguments', () => {
    // Write assertion here
    assert.ok(3 + 4 === 8);
  });
});

// Naive approach
describe('.pop', () => {
  it('returns the last element in the array [naive]', () => {
    assert.ok(['padawan', 'knight'].pop() === 'knight'); 
  });
});

// 3 phase approach
describe('.pop', () => {
  it('returns the last element in the array [3phase]', () => {
    // Setup
    const knightString = 'knight';
    const jediPath = ['padawan', knightString];

    // Exercise
    const popped = jediPath.pop();

    // Verify
    assert.ok(popped === knightString);
  });
});

const fs = require('fs');

describe('appendFileSync', () => {
  it('writes a string to text file at given path name', () => {

    // Setup
    const path = './message.txt';
    const str = 'Hello Node.js';
    
    // Exercise: write to file
    fs.appendFileSync(path, str);

    // Verify: compare file contents to string
    const contents = fs.readFileSync(path);
    assert.ok(contents.toString() === str);

    // Teardown: delete path
    fs.unlinkSync(path);
  });
});


describe('appendFileSync', () => {
  const path = './message.txt';
  //The other hooks in the Mocha library 
  //are before(), beforeEach(), and after()
  afterEach( () => {
    // Teardown: delete path
    fs.unlinkSync(path);
  })

  it('writes a string to text file at given path name', () => {

    // Setup
    const str = 'Hello Node.js';
    
    // Exercise: write to file
    fs.appendFileSync(path, str);

    // Verify: compare file contents to string
    const contents = fs.readFileSync(path);
    assert.ok(contents.toString() === str);


  });
});

//assert strictEqual
describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
		const smallNum = 4;
		const expected = 96;
    
    const result =  bigNum - smallNum;

    // Write assertion here
    assert.strictEqual(result, expected);
  });
});

//assert deepEqual - This is will check into the object 
//and evaluate if the inside is the same b/c
//objects are not considered the same.

describe('+', () => {
  it('returns the sum of two values', () => {
    // Setup
		let expected = {a: 3, b: 4, result: 7};
		let sum = {a: 3, b: 4};

    // Exercise
		sum.result = sum.a + sum.b;

    // Verify
    assert.deepEqual(sum, expected);
  });
});


//https://nodejs.org/api/assert.html