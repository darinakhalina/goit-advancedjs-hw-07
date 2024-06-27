class Key {
  private signature: number = Math.random();

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {}

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("You have permission to enter the house.");
    } else {
      console.log("You do not have permission to enter the house.");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is open.");
    } else {
      console.log("The door is closed.");
    }
  }
}

const key = new Key();
// const key2 = new Key();

const house = new MyHouse(key);
const person = new Person(key);
// const person = new Person(key2);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
