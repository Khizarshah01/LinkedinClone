import { auth, provider } from "../firebase";
import { SET_USER } from "./actionType";

export const setUser =(payload) =>({
    type: SET_USER,
    user: payload,
})
export function signInApi() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        console.log(payload);
      })
      .catch((error) => alert(error.message));
  };
}
