import {
  CLOSE_SNACKBAR,
  GO_BACK,
  OPEN_SNACKBAR,
  SET_PAGE,
  SET_STORY,
} from "./actionTypes"

const initialState = {
  activeStory: "game",
  activePanel: "start",
  popout: null,
  snackbar: null,

  storiesHistory: ["game"],
  panelsHistory: ["start"],
}

export const routerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORY:
      return {
        ...state,
        activeStory: action.payload.story,
        activePanel: action.payload.panel,
      }
    case SET_PAGE:
      return {
        ...state,
        activePanel: action.payload.activePanel,
        panelsHistory: action.payload.panelsHistory,
      }
    case GO_BACK:
      return {
        ...state,
        activeStory: action.payload.story,
        activePanel: action.payload.panel,
      }
    case OPEN_SNACKBAR:
      return { ...state, snackbar: action.payload }

    case CLOSE_SNACKBAR:
      return { ...state, snackbar: null }
    default:
      return state
  }
}
