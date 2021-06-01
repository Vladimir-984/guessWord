import React from "react"

import {
  Group,
  Header,
  List,
  Panel,
  PanelHeader,
  SimpleCell,
} from "@vkontakte/vkui"
import { useDispatch, useSelector } from "react-redux"
import { categories } from "../components/categories"
import { setTheme } from "../store/game/actions"

const StartGame = (props) => {
  const dispatch = useDispatch()
  return (
    <Panel id={props.id}>
      <PanelHeader>Угадай слово</PanelHeader>
      <Group header={<Header mode='secondary'>Выбери категорию</Header>}>
        <List>
          {categories.map((theme, i) => (
            <SimpleCell
              onClick={() => dispatch(setTheme(theme.title, i))}
              expandable
              before={theme.icon}
              key={i}
            >
              {theme.title}
            </SimpleCell>
          ))}
        </List>
      </Group>
    </Panel>
  )
}
export default StartGame
