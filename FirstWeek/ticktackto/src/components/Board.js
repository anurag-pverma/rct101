import React,{useState} from 'react'
import Styles from "./btn.module.css";
import Square from './Square';
const Board = () => {

  const [square,setSquare]=useState(Array(9).fill(null));
  const [x,setX]=useState(true);

  const winner=calculateWinner(square);
  let status;
  if(winner){
    status='winner:'+winner;
  }
  else{
    status='Player turn:'+(x? 'x':'o');
  }
  const renderSquare=(i)=>{
    return(
      <Square value={square[i]} onClick={()=> handleClick(i)} />
    )
  }
  const handleClick=(i)=>{
    console.log(i);
    const squares=square.slice();

    if(square[i]===null){
      square[i]=x?'x':'o';
      setSquare(square);
      setX(!x);
    }
    else{
      alert("can not do that")
    }
  }
  function calculateWinner(squares){
    const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0.3,8],
      [1,4,7],
      [2,5,8],
      [0.4,8],
      [2,4,6],

    ];
    for(let i=0;i<lines.length;i++){
      const [a,b,c]=lines[i];

      if(squares[a]&& squares[a]===squares[b]&&squares[a]===squares[c]){
        return squares[a];
      }
    }
    return null;
  }
  return (
    <div className={Styles.board}>
      <div className={Styles.boards}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className={Styles.boards}>
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      </div>
      <div className={Styles.boards}>
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
      </div>
      {<h2 style={{color:'orange'}}>{status}</h2>}
    </div>
  )
}

export default Board