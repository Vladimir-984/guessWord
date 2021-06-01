import React from "react"
import PropTypes from "prop-types"

import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Cell,
  Div,
  Avatar,
  IconButton,
  Counter,
  Spacing,
  Tappable,
  PanelHeaderBack,
  FixedLayout,
  PromoBanner,
} from "@vkontakte/vkui"

import {
  Icon24Like,
  Icon24LikeOutline,
  Icon24Flash,
  Icon24Error,
  Icon24Done,
  Icon24Cancel,
} from "@vkontakte/icons/"

import { Icon28InfoOutline } from "@vkontakte/icons"
import { Icon28InfoCircleOutline } from "@vkontakte/icons"

import { Icon28LikeOutline } from "@vkontakte/icons"
import { Icon28Like } from "@vkontakte/icons"

import { Icon28LightbulbStarOutline } from "@vkontakte/icons"
import { Icon28LightbulbOutline } from "@vkontakte/icons"
import { useDispatch, useSelector } from "react-redux"
import { goBack } from "../store/router/actions"
import { answer, useHint } from "../store/game/actions"

const Game = (props) => {
  const dispatch = useDispatch()
  const {
    theme,
    disabledButtons,
    answerArr,
    helth,
    hint,
    correctLetters,
    wrongLetters,
    RULetters,
  } = useSelector((state) => state.game)

  const { snackbar } = useSelector((state) => state.router)

  return (
    <Panel id={props.id} className='Panel--game'>
      <PanelHeader
        left={<PanelHeaderBack onClick={() => dispatch(goBack())} />}
      >
        {theme.title}
      </PanelHeader>

      <Div>
        <div className='icons'>
          <IconButton disabled>
            {helth > 3 ? (
              <Icon28Like fill='#ff0000' />
            ) : (
              <Icon28LikeOutline fill='#ff0000' />
            )}
            <Counter size='m' mode='secondary' className='Counter--icons'>
              {helth}
            </Counter>
          </IconButton>

          <IconButton disabled style={{ marginLeft: 8 }}>
            <Icon28LightbulbStarOutline fill='#ffc105' />
            <Counter size='m' mode='secondary' className='Counter--icons'>
              {hint}
            </Counter>
          </IconButton>
        </div>

        <section className='container__word'>
          {answerArr.map((letter, i) => (
            <Tappable
              activeEffectDelay={200}
              key={i}
              className='letter__word'
              onClick={() => dispatch(useHint(i))}
            >
              {letter}
            </Tappable>
          ))}
        </section>
      </Div>
      <div className='vkuiSpacing sepa'>{/* <Spacing separator /> */}</div>
      <Div>
        <div className='letters'>
          {RULetters.map((a, i) => (
            <Tappable
              disabled={disabledButtons}
              onClick={() => dispatch(answer(a))}
              activeEffectDelay={200}
              style={{ width: 48 }}
              className='letter'
              key={i}
            >
              {a}
              {correctLetters.includes(a) && (
                <Icon24Done
                  className='iconLetter'
                  fill='var(--field_valid_border)'
                  width={20}
                  height={20}
                />
              )}
              {wrongLetters.includes(a) && (
                <Icon24Cancel
                  className='iconLetter'
                  fill='var(--field_error_border)'
                  width={20}
                  height={20}
                />
              )}
            </Tappable>
          ))}
        </div>
      </Div>
      {/* <FixedLayout className='fixed--promo' vertical='bottom' filled>
        <PromoBanner
          bannerData={{
            title: "Заголовок",
            domain: "vk.com",
            trackingLink: "https://vk.com",
            ctaText: "Перейти",
            advertisingLabel: "Реклама",
            iconLink:
              "https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg",
            description: "Описание рекламы",
            ageRestrictions: "14+",
            statistics: [
              { url: "", type: "playbackStarted" },
              { url: "", type: "click" },
            ],
          }}
        ></PromoBanner>
      </FixedLayout> */}
      {snackbar}
    </Panel>
  )
}

// Home.propTypes = {
//   id: PropTypes.string.isRequired,
//   go: PropTypes.func.isRequired,
//   fetchedUser: PropTypes.shape({
//     photo_200: PropTypes.string,
//     first_name: PropTypes.string,
//     last_name: PropTypes.string,
//     city: PropTypes.shape({
//       title: PropTypes.string,
//     }),
//   }),
// }

export default Game
