const MostVotedAnecdote = ({ anecdote, votes }) => {
    if(votes > 0){
        return(
            <>
                <h2>Anecdote with most votes</h2>
                <p>{anecdote}</p>
                <p>has {votes} votes</p>
            </>
        );
    }
}

export default MostVotedAnecdote;