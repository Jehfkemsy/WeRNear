const axios = require("axios");
const {
  API_URL,
  BEARER_TOKEN,
  NAMESPACE_ID,
  ACTION_PKG_NAME
} = require("../config");

const headers = {
  content: "application/json",
  accept: "application/json",
  Authorization: `Bearer ${BEARER_TOKEN}`
};

const cloudAPI = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    content: "application/json",
    accept: "application/json",
    Authorization: `Bearer ${BEARER_TOKEN}`
  }
});

// Get all the resources available
async function getResources() {
  try {
    const action_name = "get-feed";
    endpoint = `/${NAMESPACE_ID}/actions/${ACTION_PKG_NAME}/${action_name}?blocking=true`;

    // Make request
    const { data } = await cloudAPI.post(endpoint, { headers });
    const payload = data.response.result;

    return payload;

  } catch (err) {
    console.error(err);
    return err;
  }
}

// Crate resource
async function postResource() {
  try {
    const action_name = "post-feed";
    endpoint = `/${NAMESPACE_ID}/actions/${ACTION_PKG_NAME}/${action_name}?blocking=true`;

    const content = {
      provider_logo: "my logo",
      provider_name: "cvs",
      resource_message: "got water"
    };

    // Make request
    const { data } = await cloudAPI.post(endpoint, content, { headers });

    const payload = data.response.result;

    if (payload.success) {
      return payload.data;
    } else {
      return payload.message;
    }
  } catch (err) {
    error = err.response.data;
    console.error(error);
    return error;
  }
}

// Check in
async function checkIn(username, location) {
  try {
    const action_name = "check-in";
    endpoint = `/${NAMESPACE_ID}/actions/${ACTION_PKG_NAME}/${action_name}?blocking=true`;

    const content = { username, location };
    console.log(content);

    // Make request
    const { data } = await cloudAPI.post(endpoint, content, { headers });

    const payload = data.response.result;
    if (payload.success) {
      if (payload.data) {
        return payload.data;
      }
    } else {
      return payload.message;
    }
  } catch (err) {
    // error = err.response.data;
    console.error(err);
    return err;
  }
}

export { getResources, postResource, checkIn };
