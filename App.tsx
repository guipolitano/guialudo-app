import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Discover from "./src/screens/Discover";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-native-url-polyfill/auto";
import ApiProvider from "./src/providers/ApiProvider";
const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <ApiProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Discover" component={Discover} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </ApiProvider>
  );
}
