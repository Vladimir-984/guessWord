import { combineReducers } from "redux"
import { gameReducer } from "./game/gameReducer"
import { routerReducer } from "./router/routerReducer"
import { vkReducer } from "./vk/vkReducer"

export const rootReducer = combineReducers({
  vk: vkReducer,
  router: routerReducer,
  game: gameReducer,
})
