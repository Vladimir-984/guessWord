import React from "react"

import { Tabbar, TabbarItem } from "@vkontakte/vkui"
import { Icon28GameOutline, Icon28Profile } from "@vkontakte/icons"
import { useDispatch, useSelector } from "react-redux"
import { setStory } from "../store/router/actions"

const AppTabbar = () => {
  const dispatch = useDispatch()
  const { activeStory } = useSelector((state) => state.router)

  return (
    <Tabbar itemsLayout='auto'>
      <TabbarItem
        onClick={(e) => dispatch(setStory(e, "start"))}
        selected={activeStory === "game"}
        data-story='game'
        text='Игра'
      >
        <Icon28GameOutline />
      </TabbarItem>
      <TabbarItem
        onClick={(e) => dispatch(setStory(e, "profile"))}
        selected={activeStory === "profile"}
        data-story='profile'
        text='Профиль'
      >
        <Icon28Profile />
      </TabbarItem>
    </Tabbar>
  )
}
export default AppTabbar
