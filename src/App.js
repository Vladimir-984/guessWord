import React, { useEffect } from "react"
import bridge from "@vkontakte/vk-bridge"

import {
  ConfigProvider,
  AdaptivityProvider,
  AppRoot,
  Epic,
  View,
} from "@vkontakte/vkui"

import "@vkontakte/vkui/dist/vkui.css"

import "./styles/style.css"

import AppTabbar from "./components/AppTabbar"

import { useDispatch, useSelector } from "react-redux"
import { setFetchedUser, setScheme } from "./store/vk/actions"
import Profile from "./panels/Profile"
import Game from "./panels/Game"
import StartGame from "./panels/StartGame"
import { goBack } from "./store/router/actions"

const App = () => {
  const dispatch = useDispatch()

  const { scheme } = useSelector((state) => state.vk)
  const { activeStory, activePanel } = useSelector((state) => state.router)

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        dispatch(setScheme(data.scheme))
      }
      if (type === "VKWebAppGetUserInfoResult") {
        dispatch(setFetchedUser(data))
      }
    })
    bridge.send("VKWebAppGetUserInfo")
    window.onpopstate = () => {
      dispatch(goBack())
    }
  }, [])

  return (
    <ConfigProvider scheme={scheme}>
      <AdaptivityProvider>
        <AppRoot>
          <Epic
            activeStory={activeStory}
            tabbar={activePanel === "game" ? null : <AppTabbar />}
          >
            <View id='game' activePanel={activePanel}>
              <StartGame id='start' />
              <Game id='game' />
            </View>
            <View id='profile' activePanel={activePanel}>
              <Profile id='profile' />
            </View>
          </Epic>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}

export default App
