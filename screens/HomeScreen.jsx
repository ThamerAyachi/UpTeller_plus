import * as React from "react";
import { Text, View, Image } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import VoiceButton from "../components/VoiceButton";
import * as Speech from "expo-speech";

export default function HomeScreen(props) {
	const [isPressed, setIsPressed] = React.useState(false);
	const [text, setText] = React.useState(
		"Hello there ! I will navigate you to the next screen."
	);
	const [thereData, setThereData] = React.useState(false);
	const vocal = "react native";

	const getData = async () => {
		try {
			const data = await fetch(
				`https://api.newscatcherapi.com/v2/search?q=${vocal}`,
				{
					headers: {
						"x-api-key": "i5rUvEN5-QmGcXesk4aUSl1AMwFHBcXrIL5dDYQJ9Yw",
					},
				}
			);
			const json = await data.json();
			const ars = await json.articles;
			return ars;
		} catch (er) {
			console.log(er);
		}
	};

	const clicked = async () => {
		setIsPressed(!isPressed);

		if (isPressed) {
			setThereData(true);
			if (vocal.includes("hello")) {
				Speech.speak("Hello there", { language: "en-US" });
				Speech.speak("What can i help you with", { language: "en-US" });
				setText("Hello there !\nWhat can I help you with ?");
			} else {
				Speech.speak("i try to search", { language: "en-US" });
				setText("Loading ...");
				const articles = await getData();
				setTimeout(async () => {
					setIsPressed(false);
					setThereData(false);
					props.navigation.navigate("News", { articles: await articles });
				}, 1000);
			}
		}
	};

	return (
		<TailwindProvider>
			<View className="bg-dmb flex-1 bg-dr">
				<View className="flex-1 py-5 px-5 ">
					{isPressed ? (
						<Image
							source={require("../assets/audiovis.gif")}
							style={{ width: 300, height: 300 }}
						/>
					) : (
						""
					)}
					{!isPressed && thereData ? (
						<Text className="px-3 text-3xl my-5 text-gray-400">{text}</Text>
					) : (
						""
					)}
					{!isPressed && !thereData ? (
						<Text className="px-3 text-3xl my-5 text-gray-400">
							Press the button to speak.
						</Text>
					) : (
						""
					)}
				</View>
				<View className="flex-1 justify-end items-center">
					<VoiceButton onPress={clicked} icon={!isPressed} />
				</View>
			</View>
		</TailwindProvider>
	);
}
