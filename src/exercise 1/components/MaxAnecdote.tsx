type IMaxAnecdote={
    votes:number[],
    anecdotes:string[]
}
const MaxAnecdote=({votes,anecdotes}:IMaxAnecdote)=>{
 const maxVote = Math.max(...votes)
 const maxVotesIndex = votes.indexOf(maxVote)
 

   if(maxVote === 0) {
      return <p>no votes</p>
   }
    return(
        <div className="mt-4">
            <h1 className="font-bold text-2xl">Anecdote with most votes</h1>
            <p>{anecdotes[maxVotesIndex]} has {maxVote} votes</p>
        </div>
    )
}


export default MaxAnecdote