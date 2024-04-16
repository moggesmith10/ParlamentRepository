import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BrowserPage } from "./pages/BrowserPage";
import { WelcomePage } from "./pages/WelcomePage";
import { StateProvider } from "./components/StateContext";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <StateProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomePage} />
          <Stack.Screen name="Browser" component={BrowserPage} />
          <Stack.Screen name="Browser Offline" component={BrowserPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
}
