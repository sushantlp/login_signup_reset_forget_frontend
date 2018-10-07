import getQueryString from "./paramParser";

// Base Url
const host = "http://localhost:8080/";

export default {
  postSignupApi: (name, email, password) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v1/signup?" +
          getQueryString({
            email: email,
            name: name,
            password: password
          }),
        {
          method: "POST"
        }
      ).then(response => {
        response.json().then(signup => resolve(signup));
      });
    });
  },

  postLoginApi: (email, password) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v1/login?" +
          getQueryString({
            email: email,
            password: password
          }),
        {
          method: "POST"
        }
      ).then(response => {
        response.json().then(login => resolve(login));
      });
    });
  },

  postForgetApi: email => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v1/forget?" +
          getQueryString({
            email: email
          }),
        {
          method: "POST"
        }
      ).then(response => {
        response.json().then(forget => resolve(forget));
      });
    });
  },

  postResetApi: (hash, password) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v1/reset?" +
          getQueryString({
            hash: hash,
            password: password
          }),
        {
          method: "POST"
        }
      ).then(response => {
        response.json().then(reset => resolve(reset));
      });
    });
  }
};
