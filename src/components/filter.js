import React from 'react'

export const Filter = ({filter, setFilter}) => {
    return (
        <div className="search-bar">
        <span >           
            <input className="search-opt" placeholder="Search.." value={filter || ''} onChange={e => setFilter(e.target.value)}/>
        </span>
        </div>
    )
}
