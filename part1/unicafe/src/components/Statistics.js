const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    let average = 0;
    let positive = 0;
    if(total > 0){
        average = (good - bad) / total;
        positive = (good / total) * 100;
    }

    return (
        <section>
            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {total}</p>
            <p>average {average}</p>
            <p>positive {positive} %</p>
        </section>
    )
}

export default Statistics;