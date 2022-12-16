import axios from "axios";

export function getApi() {
  return "http://loancentral-api.xcesslogic.com/";
  //return "http://localhost:4000/";
}

export async function fetchData(url, method, id = "") {
  var token = sessionStorage.getItem("token");
  var data = [];
  console.log(token);
  console.log(getApi() + url + id);
  var config = {
    method: method,
    url: getApi() + url + id,
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  try {
    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        data = response.data.model;
        console.log(data);
      })
      .catch(function (error) {
        // sessionStorage.setItem("token", "");
        //  console.log(error);
        return [];
      });
  } catch (ex) {
    console.log(ex);
  }
  return data;
}

export async function updateData(url, frmmethod, frmdata, id = "") {
  var token = sessionStorage.getItem("token");
  //  console.log(frmdata);
  var res;
  var config = {
    method: frmmethod,
    url: getApi() + url + id,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    data: frmdata,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response;
    })
    .catch(function (error) {
      res = error;
    });
  return res;
}
