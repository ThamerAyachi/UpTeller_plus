import * as React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { View, Text, ScrollView } from "react-native";
import Card from "../components/Card";
import * as Speech from "expo-speech";

export default function NewsScreen(props) {
	Speech.speak("That's what i can found", { language: "en-US" });
	const { articles } = props.route.params;
	let newArticles = [];

	articles.map((a, i) => {
		if (i < 5) {
			newArticles.push(a);
		}
	});
	const data = [1, 2, 3, 4, 5];
	return (
		<TailwindProvider>
			<View className="p-3 mb-10">
				{newArticles.length < 1 ? (
					<Text>osber</Text>
				) : (
					<View className="mb-14">
						<View className="">
							<Text className="text-2xl py-5 text-gray-800">
								That's what i can found
							</Text>
						</View>
						<ScrollView>
							{newArticles.map((i) => {
								return (
									<Card
										key={i.id}
										img={i.media}
										title={i.title}
										author={i.author}
									/>
								);
							})}
						</ScrollView>
					</View>
				)}
			</View>
		</TailwindProvider>
	);
}
