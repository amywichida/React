import React, {useState} from 'react'

const SearchForm = ({searchText}) => {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        searchText(text)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type= "text" 
                    placeholder="search for articles"
                    onChange={(e) => setText(e.target.value) }
                    />
                <button type = "submit"
                >
                Search</button>
            </form>

        </div>
    )
}

export default SearchForm