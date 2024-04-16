import { StyleSheet } from "react-native";
import { ListItem } from "@rneui/themed";
import { pure } from "react-recompose";
import { Person } from "../domain/model/person";

function personRow({ person }: { person: Person }) {
  return (
    <ListItem>
      <ListItem.Content>
        <ListItem.Title>{person.name}</ListItem.Title>
        <ListItem.Subtitle>
          {person.address}, {person.city}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

export const PersonRow = pure(personRow);
