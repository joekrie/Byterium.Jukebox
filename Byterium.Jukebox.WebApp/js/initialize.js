import React from 'react'
import ReactDOM from 'react-dom'

import { AlbumView } from './AlbumView'

function initialize() {
    const containerElement = document.getElementById('musicPlayer')

    ReactDOM.render(
        <AlbumView />,
        containerElement
    )
}

document.addEventListener('DOMContentLoaded', initialize)