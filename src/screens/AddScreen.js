import React, { useState, useContext } from "react";
import { Text, Button } from "react-native";
import styled from "styled-components";
import { Context as HousesContext } from "../context/HousesContext";

const AddScreen = ({ navigation }) => {
  const { addHouse } = useContext(HousesContext);
  const [address, setAddress] = useState("");
  const [owner, setOwner] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (
      address.length > 0 &&
      owner.length > 0 &&
      price.length > 0 &&
      area.length > 0
    ) {
      addHouse(address, owner, price, area, () => {
        navigation.navigate("Index");
      });
    } else {
      setError("Please fill all the inputs!");
    }
  };

  return (
    <SafeArea>
      <StyledKeyboardAvoidingView>
        <Text style={{ marginVertical: 10 }}>Address {address}</Text>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          value={address}
          onChangeText={setAddress}
        />
        <Text style={{ marginVertical: 10 }}>Owner{owner}</Text>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          value={owner}
          onChangeText={setOwner}
        />
        <Text style={{ marginVertical: 10 }}>Price{price}</Text>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          value={price}
          onChangeText={setPrice}
        />
        <Text style={{ marginVertical: 10 }}>Area{area}</Text>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          value={area}
          onChangeText={setArea}
          keyboardType="numeric"
        />
        {error ? <Text>{error}</Text> : null}
        <Button title="Add the house" onPress={submit} />
      </StyledKeyboardAvoidingView>
    </SafeArea>
  );
};

const SafeArea = styled.SafeAreaView`
  flex-grow: 1;
  align-items: center;
  width: 100%;
`;

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex-grow: 1;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`;
const Input = styled.TextInput`
  height: 50px;
  width: 80%;
  border: 2px solid green;
  border-radius: 5px;
  padding: 0 10px;
`;

export default AddScreen;
