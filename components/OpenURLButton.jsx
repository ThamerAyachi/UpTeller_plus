import * as React from "react";
import { Text, TouchableOpacity, Alert, Linking } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

const OpenURLButton = ({ url, children }) => {
	const handlePress = React.useCallback(async () => {
		const supported = await Linking.canOpenURL(url);

		if (supported) {
			await Linking.openURL(url);
		} else {
			Alert.alert(`Don't know how to open this URL: ${url}`);
		}
	}, [url]);

	return (
		<TailwindProvider>
			<TouchableOpacity onPress={handlePress}>
				<Text className="text-blue-500 py-3 underline">{children}</Text>
			</TouchableOpacity>
		</TailwindProvider>
	);
};

export default OpenURLButton;
