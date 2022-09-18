import React from 'react'
import ButtonBox from './ButtonBox'

const QuoteBox = ({randomQuote, randomColor, getRandomAll}) => {

    //Defines a random color when enter in the page
    const colorObject = {
        color:randomColor
    }
    const backgroundObject = {
        backgroundColor: randomColor
    }

    return (
        <article className='card' style={colorObject}>
            <p className='card__quote'>{randomQuote.quote}</p>
            <h1 className='card__author'><em>{randomQuote.author}</em></h1>
            <ButtonBox
                getRandomAll={getRandomAll}
                backgroundObject={backgroundObject}
            />
        </article>
    )
}

export default QuoteBox