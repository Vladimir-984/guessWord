import { SET_FETCHED_USER, SET_SCHEME, SET_USER_DATA } from "./actionTypes"

const initialState = {
  user: {
    id: 0,
    first_name: 1,
    last_name: 2,
    photo_200: 0,
  },
  statistics: {},
  scheme: "space_gray",
}

export const vkReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCHEME:
      return { ...state, scheme: action.payload }
    case SET_FETCHED_USER:
      return { ...state, user: action.payload }
    case SET_USER_DATA:
      return { ...state, statistics: action.payload }
    default:
      return state
  }
}
