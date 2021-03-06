import axios from "axios"

import { USER_SIGN_IN,USER_SIGN_UP,USER_SIGN_OUT } from "../constants/userauthconstants";
import { getMyself } from "./userActions";
import { clearUser } from "./userActions";

export const UsersignIn = (userData) => async (dispatch) => {
    try {
      const User = await axios({
        method: "POST",
        url: `http://localhost:2000/userAuth/signin`,
        data: { credentials: userData },
      });
  
      getMyself();
  
      localStorage.setItem(
        "LocateItLocallyUser",
        JSON.stringify({ token: User.data.token })
      );
  
      return dispatch({ type: USER_SIGN_IN, payload: User.data });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };

  export const UsersignUp = (userData) => async (dispatch) => {
    try {
      const User = await axios({
        method: "POST",
        url: `http://localhost:2000/userAuth/signup`,
        data: { credentials: userData },
      });
  
      getMyself();
  
      localStorage.setItem(
        "LocateItLocallyUser",
        JSON.stringify({ token: User.data.token })
      );
  
      return dispatch({ type: USER_SIGN_UP, payload: User.data });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };

  export const UsersignOut = () => async (dispatch) => {
    try {
      localStorage.removeItem("LocateItLocallyUser");
      clearUser();
      window.location.href = "http://localhost:3000";
      
      return dispatch({ type: USER_SIGN_OUT, payload: {} });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };
  