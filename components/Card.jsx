import * as React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { Text, View, Image, TouchableOpacity } from "react-native";

export default function Card(props) {
	return (
		<TailwindProvider>
			<TouchableOpacity
				onPress={props.onPress}
				className="bg-ldr my-3 rounded-md overflow-hidden shadow"
			>
				<Image
					source={{
						uri: props.img,
					}}
					style={{ width: "auto", height: 200 }}
				/>
				<View className="p-2">
					<Text className="text-gray-400 font-bold my-2">{props.author}</Text>
					<Text className="text-gray-400 text-2xl mb-2">{props.title}</Text>
					<Text className="text-gray-600 mb-2">{props.date}</Text>
				</View>
			</TouchableOpacity>
		</TailwindProvider>
	);
}
