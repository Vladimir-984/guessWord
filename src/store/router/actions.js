import AppSnackbar from "../../components/AppSnackbar"
import {
  SET_STORY,
  SET_PAGE,
  GO_BACK,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
} from "./actionTypes"

export const setStory = (e, panel) => {
  return (dispatch, getState) => {
    const story = e.currentTarget.dataset.story
    window.history.pushState(null, null)

    let storiesHistory = getState().router.storiesHistory
    let panelsHistory = getState().router.panelsHistory
    storiesHistory.push(story)

    panelsHistory.push(panel)

    console.log(storiesHistory)

    return dispatch({
      type: SET_STORY,
      payload: { storiesHistory, panelsHistory, story: story, panel: panel },
    })
  }
}

export const setPage = (panel) => {
  return (dispatch, getState) => {
    let panelsHistory = getState().router.panelsHistory
    panelsHistory.push(panel)

    let activePanel = panel

    return dispatch({ type: SET_PAGE, payload: { activePanel, panelsHistory } })
  }
}

export const goBack = () => {
  return (dispatch, getState) => {
    window.history.pushState(null, null)

    let storiesHistory = getState().router.storiesHistory
    let panelsHistory = getState().router.panelsHistory

    if (panelsHistory[panelsHistory.length - 1] === "game") {
      console.log("game")
    }
    if (storiesHistory.length > 1) {
      storiesHistory.pop()
    }

    panelsHistory.pop()

    let story = storiesHistory[storiesHistory.length - 1]
    let panel = panelsHistory[panelsHistory.length - 1]

    return dispatch({
      type: GO_BACK,
      payload: { storiesHistory, panelsHistory, story: story, panel: panel },
    })
  }
}

export const openSnackbar = (text, mode) => ({
  type: OPEN_SNACKBAR,
  payload: <AppSnackbar text={text} mode={mode} />,
})

export const closeSnackbar = () => ({
  type: CLOSE_SNACKBAR,
})
