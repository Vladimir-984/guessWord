import {
  CORRECT_ANSWER,
  LOSING,
  SET_THEME,
  SET_WORD,
  USE_HINT,
  WINNING,
  WRONG_ANSWER,
} from "./actionsType"

const initialState = {
  RULetters: [
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ь",
    "Ы",
    "Ъ",
    "Э",
    "Ю",
    "Я",
  ],
  theme: {},
  disabledButtons: false,

  word: null,
  answerArr: null,

  helth: 0,
  hint: 10,
  correctLetters: [],
  wrongLetters: [],
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME: {
      return {
        ...state,
        theme: { title: action.payload.theme, i: action.payload.i },
      }
    }
    case SET_WORD:
      return {
        ...state,
        word: action.payload.word,
        answerArr: action.payload.answerArr,
        //lettersHint: action.payload.lettersHint,
        helth: action.payload.helth,
        correctLetters: [],
        wrongLetters: [],
        disabledButtons: false,
      }
    case WRONG_ANSWER:
      return {
        ...state,
        helth: action.payload.helth,
        wrongLetters: action.payload.wrongLet,
      }
    case CORRECT_ANSWER:
      return {
        ...state,
        correctLetters: action.payload.correctLet,
        answerArr: action.payload.newAnswerArr,
      }
    case USE_HINT:
      return {
        ...state,
        answerArr: action.payload.newAnswerArr,
        correctLetters: action.payload.correctLet,
        hint: action.payload.hint,
      }

    case WINNING:
      return { ...state, disabledButtons: true }

    case LOSING:
      return { ...state, answerArr: action.payload, disabledButtons: true }
    default:
      return state
  }
}
