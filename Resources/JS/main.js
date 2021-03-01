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
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);
  HospitalEmployee.generatePassword()

  
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
  
  console.log(warAndPeace.title);
  
  console.log(warAndPeace.ratings);
  console.log(warAndPeace.getAverageRating());
  warAndPeace.addRating(5);
  warAndPeace.addRating(2);
  warAndPeace.addRating(3);
  console.log(warAndPeace.getAverageRating());
  
  console.log(warAndPeace.isCheckedOut);
  warAndPeace.toggleCheckOutStatus();
  console.log(warAndPeace.isCheckedOut);
  
  console.log(warAndPeace.author);
  console.log(warAndPeace.pages);
  
  
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
  
  console.log(incredibles.title);
  
  console.log(incredibles.ratings);
  console.log(incredibles.getAverageRating());
  incredibles.addRating(5);
  incredibles.addRating(2);
  incredibles.addRating(3);
  console.log(incredibles.getAverageRating());
  
  console.log(incredibles.isCheckedOut);
  incredibles.toggleCheckOutStatus();
  console.log(incredibles.isCheckedOut);
  
  console.log(incredibles.director);
  console.log(incredibles.runTime);
  
  
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
  
  console.log(porterRobinson.title);
  
  console.log(porterRobinson.ratings);
  console.log(porterRobinson.getAverageRating());
  porterRobinson.addRating(5);
  porterRobinson.addRating(2);
  porterRobinson.addRating(3);
  console.log(porterRobinson.getAverageRating());
  
  console.log(porterRobinson.isCheckedOut);
  porterRobinson.toggleCheckOutStatus();
  console.log(porterRobinson.isCheckedOut);
  
  console.log(porterRobinson.artist);
  console.log(porterRobinson.songs);
  