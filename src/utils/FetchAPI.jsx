const { default: axios } = require("axios");

async function postJSON(data) {
  try {
    const responce = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await responce.json();
    console.log("success:", result);
  } catch (error) {
    console.log("error:", error);
  }
}
const data = { userName: "Meet" };
postJSON(data);

async function axiosApi() {
  try {
    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = responce.data();
    console.log(data);
  } catch (error) {
    console.log("there has been something wrong:", error);
  }
}
