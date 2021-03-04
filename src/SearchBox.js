import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>
            <input type='search' className="seacrh" placeholder="Search for Jordan"
            onChange={searchChange} />
        </div>
        
    )
}

export default SearchBox;