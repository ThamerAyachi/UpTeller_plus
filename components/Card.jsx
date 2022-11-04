import * as React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { Text, View, Image } from "react-native";

export default function Card(props) {
	return (
		<TailwindProvider>
			<View className="bg-white my-3 rounded-md overflow-hidden">
				<Image
					source={{
						uri: props.img,
					}}
					style={{ width: "auto", height: 200 }}
				/>
				<View className="p-2">
					<Text className="text-gray-800 font-bold my-2">{props.author}</Text>
					<Text className="text-gray-800 text-2xl mb-2">{props.title}</Text>
					<Text className="text-gray-500 mb-2">2021-10-10</Text>
				</View>
			</View>
		</TailwindProvider>
	);
}
