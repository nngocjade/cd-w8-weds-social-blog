import * as types from "../constants/auth.constants";
import { toast } from "react-toastify";
import api from "../../apiService";

const login = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_FAILURE });
  try {
    const response = await api.post("auth/login", {
      email,
      password,
    });
    if (response.success === true) {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: response.data.accessToken,
      });
    } else {
    }
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: toast.error.message });
  }
};

export default login;
