import React from "react"

import {
  Avatar,
  Gradient,
  Group,
  Header,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Spacing,
  Text,
  Title,
} from "@vkontakte/vkui"
import { useDispatch, useSelector } from "react-redux"

const Profile = (props) => {
  const dispatch = useDispatch()
  const { first_name, last_name, photo_200 } = useSelector(
    (state) => state.vk.user
  )
  return (
    <Panel id={props.id}>
      {/* <PanelHeader left={<PanelHeaderBack />}>Профиль</PanelHeader> */}
      <Gradient className='profile--gradient'>
        <Avatar size={96} src={photo_200} />
        <Title
          className='profile--title_user_name'
          level='2'
          weight='medium'
        >{`${first_name} ${last_name}`}</Title>
        <Text className='profile--text_user_rank' weight='regular'>
          {123}
        </Text>
      </Gradient>
      <Spacing />
      <Group
        mode='card'
        header={<Header mode='secondary'>Профиль</Header>}
      ></Group>
    </Panel>
  )
}

export default Profile
