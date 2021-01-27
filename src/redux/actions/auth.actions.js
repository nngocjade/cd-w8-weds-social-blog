import * as types from "../constants/auth.constants";
import api from "../../apiService";

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_FAILURE });
  const response = await api.post("/login", {
    email,
    password,
  });
  if (response.success === true) {
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: response.data.accessToken,
    });
  }
};
