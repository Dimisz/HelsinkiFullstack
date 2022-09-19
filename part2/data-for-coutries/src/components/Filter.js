const Filter = ({ filterFunction, searchVal }) => {
    return (
        
        <label>
            search countries 
            <input onChange={filterFunction}></input>
        </label>
       
    )
}

export default Filter;