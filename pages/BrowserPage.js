import React, { useContext, useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Platform,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { PersonRow } from "../visual/PersonRow";
import { ParlamentService } from "../services/parlamentService";
import { StateContext } from "../components/StateContext";

export function BrowserPage() {
  const [online, setOnline] = useContext(StateContext);

  const [people, setPeople] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  let parlamentService = new ParlamentService();

  function updateList(filter) {
    parlamentService.getPeople(filter, false, online).then((p) => {
      setPeople(p);
      setIsLoaded(true);
    });
  }
  useEffect(() => {
    parlamentService.getPeople("", true, online).then((p) => {
      setPeople(p);
      setIsLoaded(true);
    });
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <TextInput
            placeholder="Search"
            onChangeText={(text) => updateList(text)}
          />
          {!isLoaded ? (
            <Text>Loading</Text>
          ) : people && people.length > 0 ? (
            <FlatList
              data={people}
              renderItem={({ item }) => <PersonRow person={item} />}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <>
              <View style={{ flex: 1 }} />
              <Text>No content</Text>
            </>
          )}
        </SafeAreaView>
      </SafeAreaProvider>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});
