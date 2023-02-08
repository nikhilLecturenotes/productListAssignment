import { NavigationContainer } from "@react-navigation/native";
import ProductList from "../screen/ProductList";
import UserPanel from "../screen/UserPanel";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Stack = createMaterialBottomTabNavigator();

export function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
        activeColor="#3e2465"
        style={{
          backgroundColor: "red",
        }}
        barStyle={{
          backgroundColor: "#007FFF",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          overflow: "hidden",
          position: "absolute",
          shadowOffset: 1,
          shadowColor: "black",
          shadowRadius: 6,
          shadowOffset: {
            height: 5,
            width: 4,
          },
          elevation: 10,
        }}
      >
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, focused }) => <Feather name="shopping-cart" size={focused ? 24 : 20} color="black" />,
          }}
        />
        <Stack.Screen
          name="UserPanel"
          component={UserPanel}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, focused }) => <Feather name="user" size={focused ? 24 : 16} color="black" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
