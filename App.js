import * as React from "react";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import VoiceButton from "./components/VoiceButton";

export default function App() {
	const [isPressed, setIsPressed] = React.useState(false);

	return (
		<TailwindProvider>
			<View className="bg-gray-100 flex-1">
				<View className="flex-1 py-10 px-5">
					{isPressed ? (
						""
					) : (
						<Text className="px-3 text-3xl my-10 text-gray-700">
							Press the button to speak.
						</Text>
					)}
				</View>
				<View className="flex-1 justify-end items-center">
					<VoiceButton
						onPress={() => setIsPressed(!isPressed)}
						icon={!isPressed}
					/>
				</View>
			</View>
		</TailwindProvider>
	);
}
