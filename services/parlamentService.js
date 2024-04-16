import { Person } from "../domain/model/person";
import data from "../api_mocks/persons.json";

export class ParlamentService {
  people = null;

  async getPeople(filter = "", refresh = false, online = true) {
    let filteredPeople = new Array(0);

    console.log(
      'Attempting fetch with filter "' + filter + '", online: ' + online
    );

    if (refresh || this.people == null) this.updatePeople(!online);

    this.people.forEach((element) => {
      if (filter == "" || element.name.includes(filter))
        filteredPeople.push(new Person(element));
    });
    return filteredPeople;
  }
  async updatePeople(offline = true) {
    response = null;
    if (offline) {
      response = data;
    } else {
      try {
        response = (
          await fetch("https://api.lagtinget.ax/api/persons.json")
        ).json();
      } catch (e) {
        console.log(e);
        response = [];
      }
    }
    this.people = response;
  }
}
