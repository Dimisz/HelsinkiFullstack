const Stats = ({ good, neutral, bad }) => {
    return (
        <section>
            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
        </section>
    )
}

export default Stats;