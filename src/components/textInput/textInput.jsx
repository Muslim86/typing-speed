import style from './textinput.jsx.css';

const TextInput = (props) => {
    const onChangeHandler = (e) => {
        props.setSymbol(e.target.value[e.target.value.length - 1] || ' ');
        props.setCounter(props.counter + 1);
    }
    return (
        <div>
            <input onChange={(e) => onChangeHandler(e)}
                   type="text" value={props.symbol}/>
        </div>
    )
}

export default TextInput;