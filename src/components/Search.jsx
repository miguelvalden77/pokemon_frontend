import {useState} from 'react'

function Search({filterArr}) {

    const [search, setSearch] = useState("")

    const handleChange = e =>{
        setSearch(e.target.value) 
        filterArr(search)
    }

  return (
    <form>
        <label htmlFor="search">Search</label>
        <input onChange={handleChange} type="text" name='search' value={search}/>
    </form>
  )
}

export default Search