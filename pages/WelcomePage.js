import React, { useContext } from "react";
import {
  KeyboardAvoidingView,
  Button,
  StyleSheet,
  Platform,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StateContext } from "../components/StateContext";

export function WelcomePage({ navigation }) {
  const [online, setOnline] = useContext(StateContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Button
            title="Go to browser"
            onPress={() => {
              setOnline(true);
              navigation.navigate("Browser");
            }}
          />
          <Button
            title="Go to browser (Offline)"
            onPress={() => {
              setOnline(false);
              navigation.navigate("Browser");
            }}
          />
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
