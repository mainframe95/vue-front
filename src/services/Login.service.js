import axios from "axios";
import authHeader from "./auth-header";

const baseUrl = "http://127.0.0.1:3000";

function postlogin(user) {
  console.log(`${baseUrl}/auth/login`);
  console.log("user", user, `${baseUrl}/auth/login`);
  return axios
    .post(`${baseUrl}/auth/login`, user)
}

function postRegister(user) {
  console.log(`${baseUrl}/users`);
  console.log("user", user, `${baseUrl}/users`);
  return axios.post(`${baseUrl}/users`, user)
}

function createPays(label) {
  console.log("create pays", label);
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  axios
    .post(
      `${baseUrl}/pays`,
      { label },
      { headers: { Authorization: "Bearer " + user.access_token } }
    )
    .then((res) => {
      console.log("res", res.data);
    })
    .catch((err) => {
      console.log("error", err);
    });
}
function createOperator(data) {
  axios
    .post(`${baseUrl}/operateurs`, data, { headers: authHeader() })
    .then((res) => {
      console.log("res", res.data);
      this.$router.push("/list-operator");
      return true;
    })
    .catch((err) => {
      console.log("error", err);
      return err;
    });
}

function editOperator(data) {
  console.log("data", data);
  axios
    .patch(`${baseUrl}/operateurs`, data, { headers: authHeader() })
    .then((res) => {
      console.log("updated operator", res.data);
      return true;
    })
    .catch((err) => {
      console.log("error", err);
      return err;
    });
}
function deleteOperator(id) {
  console.log("id", id);
  return axios
    .delete(`${baseUrl}/operateurs/${id}`, { headers: authHeader() })
    .then((res) => {
      console.log("delete operator", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log("error", err);
      return err;
    });
}
function getOperator() {
  return axios
    .get(`${baseUrl}/operateurs`, { headers: authHeader() })
    .then((res) => {
      console.log("res", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log("error", err);
      return [];
    });
}

function getOneOperator(id) {
  return axios
    .get(`${baseUrl}/operateurs/${id}`, { headers: authHeader() })
    .then((res) => {
      console.log("res", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log("error", err);
      return [];
    });
}
function getPays() {
  return axios
    .get(`${baseUrl}/pays`, { headers: authHeader() })
    .then((res) => {
      console.log("pays", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log("error", err);
      return [];
    });
}

export {
  postlogin,
  postRegister,
  createPays,
  createOperator,
  getOperator,
  getPays,
  getOneOperator,
  editOperator,
  deleteOperator,
};
