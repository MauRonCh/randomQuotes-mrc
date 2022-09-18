import React from 'react'

const ButtonBox = ({getRandomAll,backgroundObject}) => {
    return (
        <button
            className='card__button'
            style={backgroundObject}
            onClick={getRandomAll}>&#62;</button>
    )
}

export default ButtonBox