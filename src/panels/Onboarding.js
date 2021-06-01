import { Gallery, Panel, View } from "@vkontakte/vkui"
import React from "react"

const Onboarding = () => {
  return (
    <View activePanel='board'>
      <Panel id='board'>
        <Gallery> </Gallery>
      </Panel>
    </View>
  )
}
export default Onboarding
