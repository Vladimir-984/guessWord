import React from "react"
import ReactDOM from "react-dom"
import bridge from "@vkontakte/vk-bridge"
import App from "./App"
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { rootReducer } from "./store/rootReducer"

// Init VK  Mini App
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
bridge.send("VKWebAppInit")

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}) //runtime download
}
