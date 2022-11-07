import * as React from "react";
import { Text, View, Image, Alert } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import VoiceButton from "../components/VoiceButton";
import StopVoiceButton from "../components/StopVoiceButton";
import * as Speech from "expo-speech";
import Voice from "@react-native-voice/voice";

export default function HomeScreen(props) {
	const [isPressed, setIsPressed] = React.useState(false);
	const [text, setText] = React.useState("");
	const [thereData, setThereData] = React.useState(false);
	let [results, setResults] = useState([]);
	let [started, setStarted] = useState(false);

	React.useEffect(() => {
		Voice.onSpeechError = onSpeechError;
		Voice.onSpeechResults = onSpeechResults;

		return () => {
			Voice.destroy().then(Voice.removeAllListeners);
		};
	}, []);

	const startSpeechToText = async () => {
		await Voice.start("en-US");
		setStarted(true);
	};

	const stopSpeechToText = async () => {
		await Voice.stop();
		setStarted(false);
		setThereData(true);
		if (results[0].includes("hello") || results[0].includes("Hello")) {
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
	};

	const onSpeechResults = (result) => {
		setResults(result.value);
	};

	const onSpeechError = (error) => {
		console.log(error);
	};

	const getData = async () => {
		try {
			const data = await fetch(
				`https://api.newscatcherapi.com/v2/search?q=${results[0]}`,
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
					{!started ? (
						<VoiceButton onPress={startSpeechToText} icon={!isPressed} />
					) : undefined}
					{started ? <StopVoiceButton onPress={stopSpeechToText} /> : undefined}
				</View>
			</View>
		</TailwindProvider>
	);
}
