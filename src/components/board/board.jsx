import style from './board.module.css';

const Board = (props) => {
    const text = props.text;
    const currentSymbol = props.currentSymbol[0];
    const size = 33;
    return (
        <div className={style.board}>
            <pre>
             <strong>
                {text
                    .substring(currentSymbol - size > 0 ? currentSymbol - size : 0,
                        currentSymbol > text.length ? text.length : currentSymbol)}
            </strong>

                {text.substring(currentSymbol, currentSymbol > text.length ? text.length : currentSymbol + size)}
            </pre>

        </div>
    )
}

export default Board;