import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";
import { Context as HousesContext } from "../context/HousesContext";

const SingleHouse = ({ id, address, owner, price, area, navigation }) => {
  const { deleteHouse } = useContext(HousesContext);
  return (
    <Container>
      <StyledText>Adress: {address}</StyledText>
      <StyledText>Owner: {owner}</StyledText>
      <StyledText>Price: {price}</StyledText>
      <StyledText>Area: {area}</StyledText>
      <ButtonsContainer>
        {navigation.state.routeName !== "Show" ? (
          <IconContainer onPress={() => navigation.navigate("Show", { id })}>
            <MaterialIcons name="search" style={styles.icon} />
          </IconContainer>
        ) : null}
        <IconContainer
          onPress={() => deleteHouse(id, () => navigation.navigate("Index"))}
        >
          <MaterialIcons name="delete" style={styles.icon} />
        </IconContainer>
      </ButtonsContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 30
  }
});

const Container = styled.View`
  width: 100%;
  height: 150px;
  border: 1px solid lightgray;
  background-color: #f4f4f4;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 15px;
  padding: 5px;
`;

const ButtonsContainer = styled.View`
  position: absolute;
  right: 10px;
  flex-direction: row;
`;

const IconContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border: 1px solid grey;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin: 0 4px;
`;
export default withNavigation(SingleHouse);
