export class Person {
  key: String;
  id: String;
  name: String;
  firstName: String;
  completeFirstName: String;
  lastName: String;
  address: String;
  city: String;

  constructor(entity: any) {
    this.key = entity.id;
    this.id = entity.id;
    this.name = entity.name;
    this.firstName = entity.firstName;
    this.completeFirstName = entity.completeFirstName;
    this.lastName = entity.lastName;
    this.address = entity.address;
    this.city = entity.city;
  }
}
