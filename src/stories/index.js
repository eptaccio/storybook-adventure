import React from 'react'

import {storiesOf} from '@storybook/react'
import {Menu, MenuLink} from '../components'

import 'bootstrap/dist/css/bootstrap.css'

storiesOf('Menu', module)
  .add('bootstrap bg', () => (
    <Menu name='AppName' bg='bg-primary' whiteFont>
      <MenuLink name='Albuns' />
      <MenuLink name='Shows' />
    </Menu>
  ))

  .add('with custom bg', () => (
    <Menu name='AppName' customBg='#446CB3' whiteFont>
      <MenuLink name='Albuns' />
      <MenuLink name='Shows' />
    </Menu>
  ))

  .add('without bg', () => (
    <Menu name='AppName'>
      <MenuLink name='Albuns' />
      <MenuLink name='Shows' />
    </Menu>
  ))

  .add('justifyContentEnd', () => (
    <Menu name='AppName' justifyContentEnd>
      <MenuLink name='Albuns' />
      <MenuLink name='Shows' />
    </Menu>
  ))

  .add('justifyContentCenter', () => (
    <Menu justifyContentCenter>
      <MenuLink name='Albuns' />
      <MenuLink name='Shows' />
      <MenuLink name='Logout' />
    </Menu>
  ))

  .add('whith extra', () => {
    const extra = <a class='btn d-lg-inline-block' href='#'>Logout</a>

    return (
      <Menu name='AppName' extra={extra}>
        <MenuLink name='Albuns' />
        <MenuLink name='Shows' />
      </Menu>
    )
  })
