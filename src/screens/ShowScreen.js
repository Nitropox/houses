import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import SingleHouse from "../components/SingleHouse";
import api from "../api/api";

const ShowScreen = ({ navigation }) => {
  const houseId = navigation.getParam("id");
  const [houseDetails, setHouseDetails] = useState(null);

  const getHouse = async id => {
    try {
      const response = await api.get(`/houses/${id}`);
      setHouseDetails(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getHouse(houseId);
  }, []);

  return (
    <View>
      {houseDetails ? (
        <SingleHouse
          id={houseDetails._id}
          address={houseDetails.address}
          owner={houseDetails.owner}
          price={houseDetails.price}
          area={houseDetails.area}
        />
      ) : (
        <Text>Loading ...</Text>
      )}
    </View>
  );
};

export default ShowScreen;
