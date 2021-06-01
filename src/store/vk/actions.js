import bridge from "@vkontakte/vk-bridge"

import { SET_FETCHED_USER, SET_SCHEME } from "./actionTypes"

export const setScheme = (scheme) => {
  if (scheme == "bright_light") {
    bridge.send("VKWebAppSetViewSettings", {
      status_bar_style: "dark",
      action_bar_color: "#fff",
    })
  } else {
    bridge.send("VKWebAppSetViewSettings", {
      status_bar_style: "light",
      action_bar_color: "#191919",
    })
  }
  return { type: SET_SCHEME, payload: scheme }
}

export const setFetchedUser = (user) => ({
  type: SET_FETCHED_USER,
  payload: user,
})

export const getUserData = () => {
  return (dispatch) => {
    bridge
      .send("VKWebAppStorageGet", { keys: ["statistics"] })
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }
}
