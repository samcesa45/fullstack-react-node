import { useState } from "react";
import MaxAnecdote from "./components/MaxAnecdote";


const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
]
function App() {
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState<number[]>(new Array(5).fill(0))
 
  const handleClick=()=>{
    setSelected(Math.floor(Math.random() * 5))
  }

  const increaseVoteCount=(selected:number)=>{
    const copy = [...votes]
    copy[selected] +=1 
    setVotes(copy)
  }
  return (
    <div className="App">
     <div className="pt-8">
      <h1 className="font-bold text-2xl">Anecdote of the day</h1>
      {anecdotes[selected]} has {votes[selected]} votes
     </div>
     <button  className="px-2 py-1 mt-2 ml-2 border rounded" onClick={()=>increaseVoteCount(selected)}>vote</button>
     <button  className="px-2 py-1 mt-2 ml-2 border rounded" onClick={handleClick}>next anecdote</button>

     <MaxAnecdote votes={votes} anecdotes={anecdotes}/>
    </div>
  );
}

export default App;
