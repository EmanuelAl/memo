import { MemoBlock } from '../memoBlock/MemoBlock';
import './Board.css'

const Board = ({ memoBlocks, animating, handleMemoClick }) => {
  const allFlipped = []
  memoBlocks.map((memoBlock, i ) => memoBlock.flipped ? allFlipped.push(memoBlock) : "") 
  let winner = null;
  const reiniciarJuego = () => {

  }
  if (memoBlocks.length === allFlipped.length) {winner = true}
  return (
    <main className='board'>
   
      {memoBlocks != null && memoBlocks.map((memoblock, i) => (
  
        <MemoBlock key={`${i}_${memoblock.emoji}`} memoBlock={memoblock} animating={animating} handleMemoClick={handleMemoClick} />
      ))}
      <div className={winner && "winnerBanner"}>{winner === true ? "¡¡¡Has ganado!!! :D 🌮"  : ""}
      
      </div>
 
    </main>
  );
};

export default Board;