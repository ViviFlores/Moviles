import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import RestaurantStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import RankingStack from "./RankingStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";
import { screen } from "../utils/screenName";

//Creamos el componente de navegacion
const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.restaurants.tab}
        component={RestaurantStack}
        options={{ title: "Restaurantes" }}
      />
      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoritesStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingStack}
        options={{ title: "Ranking" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
};

const screenOptions = (route, color, size) => {
  let iconName;

  if (route.name == screen.restaurants.tab) {
    iconName = "compass-outline";
  }
  if (route.name == screen.favorites.tab) {
    iconName = "heart-outline";
  }
  if (route.name == screen.ranking.tab) {
    iconName = "star-outline";
  }
  if (route.name == screen.search.tab) {
    iconName = "magnify";
  }
  if (route.name == screen.account.tab) {
    iconName = "home-outline";
  }
  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
};
