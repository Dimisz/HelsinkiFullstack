const Filter = ({ filterFunction }) => {
    return (
        
        <label>
            search countries 
            <input onChange={filterFunction}></input>
        </label>
       
    )
}

export default Filter;