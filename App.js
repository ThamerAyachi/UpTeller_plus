import * as React from "react";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export default class App extends React.Component {
  render() {
    return (
      <TailwindProvider>
        <View className="flex-1 justify-center items-center">
          <Text>Hello in my application</Text>
        </View>
      </TailwindProvider>
    );
  }
}
