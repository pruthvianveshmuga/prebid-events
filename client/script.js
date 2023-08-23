var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

const API_ENDPOINT = "http://localhost:3000/api/";

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const postEvent =
  (event) =>
  (data = {}) =>
    postData(API_ENDPOINT, { event, data }).then(console.log);

pbjs.que.push(function () {
  pbjs.onEvent("bidResponse", postEvent("bidResponse"));
  pbjs.onEvent("bidRequested", postEvent("bidRequested"));
  pbjs.onEvent("bidWon", postEvent("bidWon"));
});
