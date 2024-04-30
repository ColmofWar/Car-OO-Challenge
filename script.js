/** Type of vehicle */

class Vehicle {
    // Class for Vehicle that has it's make, model, and year constructed on creation
    // function honk returns a string "Beep."
    // function toString returns a string with the vehicle's make, model, and year
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    honk() {
      return "Beep.";
    }
  
    toString() {
      return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
  }
  
  /** Cars are a type of vehicle with 4 wheels. */
  
  class Car extends Vehicle {
    // subclass of Vehicle that constructs the Vehicle make, model, and year + adds number of wheels as 4 on creation
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 4;
    }
  }
  
  /** Cars are a type of vehicle with 2 wheels. */
  
  class Motorcycle extends Vehicle {
    // subclass of Vehicle that constructs the Vehicle make, model, and year + adds number of wheels as 2 on creation
    // The Motorcycle subclass also has an additional function revEngine to return a string "VROOM!!"
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 2;
    }
  
    revEngine() {
      return "VROOM!!!";
    }
  }
  
  class Garage {
    // Garage class is used to "store" Vehicle classes in it
    // constructs a max capacity based on input, and an object for vehicles stored
    // function add takes input of a Vehicle class and rejects other inputs
    // rejects further inputs if array vehicles.length > =capacity
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }