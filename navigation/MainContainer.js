import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import HomeScreen from "../screens/HomeScreen";
import NewsScreen from "../screens/NewsScreen";

// Screens names
const homeName = "Home";
const newsName = "News";

const Stack = createStackNavigator();

const MainContainer = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={homeName}>
				<Stack.Screen name={homeName} component={HomeScreen} />
				<Stack.Screen name={newsName} component={NewsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainContainer;