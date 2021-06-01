import React from "react"
import { Avatar, Snackbar } from "@vkontakte/vkui"

import { useDispatch } from "react-redux"

import {
  Icon16CheckCircleOutline,
  Icon24Cancel,
  Icon24Done,
  Icon24Error,
} from "@vkontakte/icons"
import { Icon16CancelCircleOutline } from "@vkontakte/icons"
import { Icon16ErrorCircleOutline } from "@vkontakte/icons"
import { closeSnackbar } from "../store/router/actions"

const AppSnackbar = ({ text, mode }) => {
  const dispatch = useDispatch()
  const MAP_SNACKBAR = {
    winning: <Icon24Done fill='var(--field_valid_border)' />,
    losing: (
      <Icon24Cancel
        //width={30} height={30}
        fill='var(--field_error_border)'
      />
    ),

    repeat: (
      <Icon24Error
        //width={30} height={30}
        fill='var(--dynamic_orange)'
      />
    ),
  }
  //   const MAP_SNACKBAR = {
  //     winning: {
  //       icon: <Icon16CheckCircleOutline />,
  //       fill: "var(--field_valid_border)",
  //     },
  //     losing: {
  //       icon: <Icon16CancelCircleOutline />,
  //       fill: "var(--field_error_border)",
  //     },
  //     repeat: {
  //       icon: <Icon16ErrorCircleOutline fill='#fff' />,
  //       fill: "var(--dynamic_orange)",
  //     },
  //   }
  return (
    <Snackbar
      className='game'
      onClose={() => dispatch(closeSnackbar())}
      before={
        MAP_SNACKBAR[mode]
        // <Avatar style={{ background: MAP_SNACKBAR[mode].fill }} size={24}>
        //   {MAP_SNACKBAR[mode].icon}
        // </Avatar>
      }
      duration={2000}
    >
      {text}
    </Snackbar>
  )
}
export default AppSnackbar
