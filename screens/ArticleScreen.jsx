import * as React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import OpenURLButton from "../components/OpenURLButton";

const ArticleScreen = (props) => {
	const { article } = props.route.params;

	return (
		<TailwindProvider>
			<ScrollView className="p-2 pb-5 bg-dr">
				<View>
					<Text className="text-2xl my-3 text-gray-400 font-bold">
						{article.title}
					</Text>
				</View>
				<View className="rounded overflow-hidden mb-2">
					<Image
						source={{ uri: article.media }}
						style={{ width: "auto", height: 200 }}
					/>
				</View>
				<View>
					<Text className="font-bold text-gray-700 mb-3">{article.author}</Text>
				</View>
				<View>
					<Text className="text-lg font-bold text-gray-500 mb-2">
						Summary :
					</Text>
					<Text className="text-gray-400">{article.summary}</Text>
					<OpenURLButton url={article.link}>Full Article...</OpenURLButton>
				</View>
			</ScrollView>
		</TailwindProvider>
	);
};

export default ArticleScreen;
