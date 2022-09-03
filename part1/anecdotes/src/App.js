import Button from './components/Button';
import MostVotedAnecdote from './components/MostVotedAnecdote';

import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  // managing states
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [maxVotes, setMaxVotes] = useState(0);
  const [mostVotedIndex, setMostVotedIndex] = useState(0);

  // click handlers
  const updateVotesStats = () => {
    const largest = Math.max.apply(0, votes);
    const index = votes.indexOf(largest);
    setMaxVotes(largest);
    setMostVotedIndex(index);
    //console.log('votes updated', maxVotes, mostVotedIndex);
  }

  const getRandomAnecdote = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomAnecdote);
  }

  const votesHandler = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    updateVotesStats();
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button clickHandler={votesHandler} text="vote" />
      <Button clickHandler={getRandomAnecdote} text="next anecdote" />
      <MostVotedAnecdote anecdote={anecdotes[mostVotedIndex]} votes={maxVotes} />
    </div>
  )
}


export default App;
