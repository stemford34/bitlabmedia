export default {
  postData: async (url = "", data = {}) => {
    console.log("fasdfasd");
    const response = await fetch("http://localhost:3001/" + url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await response.json();
  },
  getData: async (url = "") => {
    console.log("fasdfafasdfdassd");
    const response = await fetch("http://localhost:3001/" + url, {
      method: "GET",
    });
    return await response.json();
  },
};
