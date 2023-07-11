import Square from './Square'
import "./Board.css"

const Board = ({squares, onClick}) => {
 // const [squares, setSquares] = useState(Array(9).fill(null));
  // 첫번째 인수 변수이름 , 두번째는 state를 정하는 함수 
  //const [xIsNext, setXIsNext] = useState(true)

  
  

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />
  }





    return (
      <div className='board-wrapper'>
        <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}

        </div>
        <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
      </div>
    )
}


export default Board
