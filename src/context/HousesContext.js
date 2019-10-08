import createDataContext from "./createDataContext";
import api from "../api/api";

const housesReducer = (state, action) => {
  switch (action.type) {
    case "GET_HOUSES":
      return action.payload;
    case "DELETE_HOUSE": {
      return state.filter(house => house._id !== action.payload);
    }
    default:
      return state;
  }
};
const getHouses = dispatch => async () => {
  try {
    const response = await api.get("/houses");
    dispatch({ type: "GET_HOUSES", payload: response.data.houses });
  } catch (err) {
    console.log(err);
  }
};

const addHouse = () => async (address, owner, price, area, callback) => {
  try {
    await api.post("/houses", { address, owner, price, area });
    console.log("post succesful");
    if (callback) {
      callback();
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteHouse = dispatch => async (id, callback) => {
  try {
    await api.delete(`/houses/${id}`);
    dispatch({ type: "DELETE_HOUSE", payload: id });
    if (callback) {
      callback();
    }
  } catch (err) {
    console.log(err);
  }
};

export const { Context, Provider } = createDataContext(
  housesReducer,
  { getHouses, addHouse, deleteHouse },
  []
);
