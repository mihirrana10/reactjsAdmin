import axios from "axios";
import { getApi } from "./commonService";

export function checkAuth() {
  //console.log(sessionStorage.getItem("token"));
  if (
    sessionStorage.getItem("token") != null &&
    sessionStorage.getItem("token") !== ""
  ) {
    //console.log("session");
    return true;
  }
  return false;
}
export async function verifyEmail(token) {
  var result = "";
  var data = JSON.stringify({
    token: token,
  });
  var config = {
    method: "post",
    url: getApi() + "Accounts/verify-email",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response, props) {
      var res = response.data;
      console.log(res);
      result = res;
    })
    .catch(function (error) {
      console.log(error);
      result = error;
    });
  return result;
}
export async function checkLogin(loginData) {
  var result = false;
  console.log(JSON.stringify(loginData));
  var config = {
    method: "post",
    url: getApi() + "Accounts/authenticate",
    headers: {
      "Content-Type": "application/json",
    },
    data: loginData,
  };

  await axios(config)
    .then(function (response, props) {
      console.log(response);
      result = response.data.success;
      if (result) {
        sessionStorage.setItem("token", response.data.jwtToken);
        localStorage.setItem("reftoken", response.data.refreshToken);
        sessionStorage.setItem("user", JSON.stringify(response.data.model));
      } else {
        sessionStorage.setItem("token", "");
        localStorage.setItem("reftoken", "");
        sessionStorage.setItem("user", "");
      }
    })
    .catch(function (error) {
      console.log(error);
      result = false;
      sessionStorage.setItem("token", "");
      localStorage.setItem("reftoken", "");
      sessionStorage.setItem("user", "");
    });
  return result;
}

export async function checkEmail(email) {
  var result = false;
  console.log(email);
  var data = JSON.stringify({
    email: email,
  });
  var config = {
    method: "post",
    url: getApi() + "Accounts/check-email",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response, props) {
      console.log(response.data.errorCode);
      if (response.data.errorCode == 1) result = true;
      else result = false;
    })
    .catch(function (error) {
      console.log(error);
      result = false;
    });
  console.log(result);
  return result;
}

export async function register(userData) {
  var result = "";
  console.log(getApi() + "Accounts/register");
  console.log(JSON.stringify(userData));
  var config = {
    method: "post",
    url: getApi() + "Accounts/register",
    headers: {
      "Content-Type": "application/json",
    },
    data: userData,
  };

  await axios(config)
    .then(function (response, props) {
      var res = response.data;
      result = res;
      //var token = res.token;
      //sessionStorage.setItem("token", token);
      //sessionStorage.setItem("user", username);
      //result = true;
      console.log(response);
      console.log("Register Success");
    })
    .catch(function (error) {
      console.log(error);
    });
  return result;
}

export async function forgotPassword(loginData) {
  var result = false;
  console.log(JSON.stringify(loginData));
  var config = {
    method: "post",
    url: getApi() + "Accounts/forgotpassword",
    headers: {
      "Content-Type": "application/json",
    },
    data: loginData,
  };

  await axios(config)
    .then(function (response, props) {
      console.log(response);
      result = response.data.success;
    })
    .catch(function (error) {
      console.log(error);
      result = false;
    });
  return result;
}
