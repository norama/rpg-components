/* @refresh reload */
import { render } from 'solid-js/web'

import NameInput from 'components/rpg-name/NameInput'

const root = document.getElementById('root')

render(() => <NameInput />, root!)
