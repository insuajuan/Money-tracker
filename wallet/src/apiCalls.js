import axios from "axios";

axios.defaults.headers.common['Authorization'] = localStorage.getItem('my_token');

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    window.localStorage.setItem('my_token', res.data.my_token);
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const OperationsCall = async () => {
  try{
    const config = { headers: { Authorization: "Bearer " + localStorage.getItem('my_token') } }
    const res = await axios.get("/operation", config);
    return res.data;
  } catch (err) {
    console.log(err)
  }
}

export const OperationCall = async (id) => {
  try{
    const config = { headers: { Authorization: "Bearer " + localStorage.getItem('my_token') } }
    const res = await axios.get(`/operation/${id}"`, config);
    return res.data;
  } catch (err) {
    console.log(err)
  } 
}