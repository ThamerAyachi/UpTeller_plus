import * as React from "react";
import { TouchableOpacity, Text } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { Ionicons } from "@expo/vector-icons";

export default class StopVoiceButton extends React.Component {
	render() {
		return (
			<TailwindProvider>
				<TouchableOpacity
					onPress={this.props.onPress}
					className="shadow rounded-full bg-ldr p-3 m-10"
				>
					<Text className="text-center text-blue-500">
						<Ionicons name="mic-off-outline" size={35} />
					</Text>
				</TouchableOpacity>
			</TailwindProvider>
		);
	}
}
