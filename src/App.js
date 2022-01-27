import './App.css';
import newText from "./text/text";
import Board from "./components/board/board";
import TextInput from "./components/textInput/textInput";
import {useState} from "react";

function App() {
    const text = newText;
    const [currentSymbol, setCurrentSymbol] = useState([0, text[0]])
    const [symbol, setSymbol] = useState(' ');
    const [timeCounter, setTimeCounter] = useState([])
    const [counter, setCounter] = useState(0)

    if (symbol === currentSymbol[1]) {
        const newStr = currentSymbol[0] + 1;
        setCurrentSymbol([newStr, text[newStr]]);
        const newTimeCounter = timeCounter.filter(time => {
            return (new Date() - time < 1000 * 60)
        })
        setTimeCounter([...newTimeCounter, new Date()])
    }

    return (
        <div className="App">
            <h1>
                Скорость набора текста: {timeCounter.length || 0} символов
            </h1>
            <h2>
                Точность набора текста: {Math.floor((currentSymbol[0] / counter) * 100) || 0}%
            </h2>
            <Board currentSymbol={currentSymbol} setCurrentSymbol={setCurrentSymbol} text={text}/>
            <TextInput symbol={symbol} setSymbol={setSymbol} counter={counter} setCounter={setCounter}/>
        </div>
    );
}

export default App;
