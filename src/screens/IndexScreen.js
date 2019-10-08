import React, { useContext, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { Context as HousesContext } from "../context/HousesContext";
import SingleHouse from "../components/SingleHouse";
import styled from "styled-components";

const IndexScreen = ({ navigation }) => {
  const { state, getHouses, deleteHouse } = useContext(HousesContext);

  useEffect(() => {
    getHouses();

    const listener = navigation.addListener("didFocus", () => {
      getHouses();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <SafeArea>
      <Button title="Add house" onPress={() => navigation.navigate("Add")} />
      <HousesList
        data={state}
        keyExtractor={item => item._id.toString()}
        renderItem={({ item }) => {
          return (
            <SingleHouse
              id={item._id}
              address={item.address}
              owner={item.owner}
              price={item.price}
              area={item.area}
              deleteHouse={deleteHouse}
            />
          );
        }}
      />
    </SafeArea>
  );
};

const SafeArea = styled.SafeAreaView`
  flex-grow: 1;
`;

const HousesList = styled.FlatList``;
export default IndexScreen;
