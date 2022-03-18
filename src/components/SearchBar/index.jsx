import React, { useState } from 'react';
import {Input} from './styles';
import './style.css';

function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        })
        if(searchWord == "") {
            setFilteredData([])
        }
        else {
            setFilteredData(newFilter);
        }
    }
    return (
        <div>
            <div className="search">
                <div className="searchInputs">
                    <Input className="text-light" maxLength="50" onChange={handleFilter} type="text" placeholder={placeholder}/>
                </div>
            </div>
            { filteredData.length != 0
            ? <div className="dataResult bg-dark">
                {filteredData.slice(0, 15).map((value, key) => {
                    return <a className="dataItem text-light"><p>{value.id} # {value.name}</p></a>
                })}
            </div>
            : <div></div>
            }
        </div>
    )
}

export default SearchBar;