import { useState } from 'react'
import './App.css'
import quotes from './utilities/quotes.json'
import QuoteBox from './components/QuoteBox';
import colors from './utilities/colors'

function App() {

  //select a random index of an array
  const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

  //first selection of random
  const firstQuote = quotes[getRandomIndex(quotes)];
  const firstColor = colors[getRandomIndex(colors)];


  //useState
  const [randomQuote, setRandomQuote] = useState(firstQuote);
  const [randomColor, setRandomColor] = useState(firstColor);

  //refresh both the color and quote
  const getRandomAll = () => {
    setRandomQuote(quotes[getRandomIndex(quotes)]);
    setRandomColor(colors[getRandomIndex(colors)]);
  }
  
  //random color for the element
  const backgroundObject = {backgroundColor: randomColor}

  return (
    <div className="App" style={backgroundObject}>
        <QuoteBox
        randomQuote={randomQuote}
        randomColor={randomColor}
        getRandomAll={getRandomAll}
        />
    </div>
  )
}

export default App
