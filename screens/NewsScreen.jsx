import * as React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { View, Text, ScrollView } from "react-native";
import Card from "../components/Card";
import * as Speech from "expo-speech";

export default function NewsScreen(props) {
	const { articles } = props.route.params;
	const textResult = ["Here's some information", "Here's what I found"];
	const text = textResult[Math.floor(Math.random() * 1) + 1];
	let newArticles = [];
	if (articles[0]) {
		setTimeout(() => {
			Speech.speak(text, {
				language: "en-US",
			});
		}, 500);

		articles.map((a, i) => {
			if (i < 20 && articles.length >= i) {
				newArticles.push(a);
			}
		});
	}

	return (
		<TailwindProvider>
			<ScrollView className="p-3 bg-dr">
				{newArticles.length < 1 ? (
					<View className="my-10">
						<Text className="text-gray-400 text-center text-lg">
							There is no Articles.
						</Text>
					</View>
				) : (
					<View className="mb-14">
						<View className="">
							<Text className="text-2xl py-5 text-gray-400">{text}</Text>
						</View>
						<View>
							{newArticles.map((i, index) => {
								return (
									<Card
										key={index}
										img={i.media}
										title={i.title}
										author={i.author}
										date={i.published_date}
										onPress={() =>
											props.navigation.navigate("Article", { article: i })
										}
									/>
								);
							})}
						</View>
					</View>
				)}
			</ScrollView>
		</TailwindProvider>
	);
}
