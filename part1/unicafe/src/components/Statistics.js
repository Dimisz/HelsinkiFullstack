import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    
    const average = (good - bad) / total;
    const positive = ((good / total) * 100) + " %";
   
    if(total > 0){
        return (
            <section>
                <h1>statistics</h1>
                <table>
                    <tbody>
                        <StatisticLine text="good" value={good} />
                        <StatisticLine text="neutral" value={neutral} />
                        <StatisticLine text="bad" value={bad} />
                        <StatisticLine text="total" value={total} />
                        <StatisticLine text="average" value={average} />
                        <StatisticLine text="positive" value={positive} />
                    </tbody>
                </table>
            </section>
        )
    }
    else {
        return (
            <section>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </section>
        )
    }
}

export default Statistics;