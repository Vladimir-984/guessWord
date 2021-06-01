import { categories } from "../../components/categories"
import { words } from "../../words/words"
import { openSnackbar, setPage } from "../router/actions"
import {
  WRONG_ANSWER,
  SET_THEME,
  SET_WORD,
  USE_HINT,
  CORRECT_ANSWER,
  LOSING,
  WINNING,
} from "./actionsType"

export const setTheme = (theme, i) => {
  return (dispatch) => {
    if (!i) {
      let i = Math.round(1 - 0.5 + Math.random() * (1 - 1 + 8))
      let theme = categories[i].title
      i -= 1
      dispatch({ type: SET_THEME, payload: { theme, i } })
      dispatch(setWord())
      return dispatch(setPage("game"))
    }
    i -= 1
    dispatch({ type: SET_THEME, payload: { theme, i } })
    dispatch(setWord())
    return dispatch(setPage("game"))
  }
}
export const setWord = () => {
  return (dispatch, getState) => {
    let i = getState().game.theme.i
    let word = words[i][Math.floor(Math.random() * words[i].length)]
    word = word.split("")

    let answerArr = Array(word.length).fill("")

    //let lettersHint = word

    let helth

    if (word.length <= 4) {
      helth = 5
    } else if (word.length <= 7) {
      helth = 6
    } else if (word.length <= 9) {
      helth = 8
    } else if (word.length <= 11) {
      helth = 10
    } else helth = 12

    dispatch({
      type: SET_WORD,
      payload: {
        word,
        answerArr, //lettersHint,
        helth,
      },
    })
  }
}
export const answer = (answer) => {
  return (dispatch, getState) => {
    let {
      helth,
      word,
      answerArr,
      correctLetters,
      wrongLetters,
      disabledButtons,
    } = getState().game

    if (disabledButtons) return

    if (correctLetters.includes(answer) || wrongLetters.includes(answer))
      return dispatch(openSnackbar(`Буква ${answer} уже была`, "repeat"))

    let i = word.indexOf(answer)

    if (i === -1) {
      helth -= 1
      let wrongLet = wrongLetters.concat(answer)
      dispatch({ type: WRONG_ANSWER, payload: { helth, wrongLet } })

      return dispatch(checkGame())
    }
    let newAnswerArr = answerArr.map((a, index) => {
      if (word[index] === answer) return word[index]
      return a
    })

    let correctLet = correctLetters.concat(answer)

    dispatch({
      type: CORRECT_ANSWER,
      payload: { newAnswerArr, correctLet },
    })
    return dispatch(checkGame())
  }
}
export const useHint = (i) => {
  return (dispatch, getState) => {
    let { answerArr, word, hint, correctLetters } = getState().game

    let letter = word[i]
    let newAnswerArr = answerArr.map((a, index) => {
      if (word[index] === letter) return word[index]
      return a
    })

    let correctLet = correctLetters.concat(letter)

    hint -= 1

    dispatch({
      type: USE_HINT,
      payload: { newAnswerArr, hint, correctLet },
    })
    dispatch(checkGame())
  }
}

const checkGame = () => {
  return (dispatch, getState) => {
    let { answerArr, word, helth } = getState().game

    if (!helth) {
      dispatch(openSnackbar("Вы проиграли", "losing"))
      answerArr = word
      dispatch({ type: LOSING, payload: answerArr })
      setTimeout(() => dispatch(setWord()), 2000)
    }

    if (answerArr.every((a) => a !== "")) {
      dispatch(openSnackbar("Вы победили", "winning"))
      dispatch({ type: WINNING })
      setTimeout(() => dispatch(setWord()), 2000)
    }
  }
}
