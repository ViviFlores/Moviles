import React from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/themed";
import { screen } from "../../utils/screenName";

const RestaurantsScreen = (props) => {
  //console.log(props);
  const { navigation } = props;

  const goToAddRestaurant = () => {
    //agregamos la navegaci´n
    navigation.navigate(screen.restaurants.addRestaurant);
  };

  return (
    <View>
      <Text>Estamos en la screen de Resaurante</Text>
      <Button title="Crear Restaurante" onPress={goToAddRestaurant} />
    </View>
  );
};

export default RestaurantsScreen;
