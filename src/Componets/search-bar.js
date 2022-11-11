import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import '../Assets/Styles/search-bar.css'
import '../Assets/Styles/icons.css'
import '../Assets/Styles/input.css'
import { useDispatch } from 'react-redux';
import { searchCategory } from '../Redux/reducers/categoryReducer';


const SearchBar = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const handleKeyPress = (e) => {
            if (search.trim()) {
                console.log(search)
                dispatch(searchCategory(search))
            }
    }
    return (
        <>
            <div className="search_bar_container">
                <span className='icon'><BsSearch /></span>
                <input className='input' type="text"
                    placeholder='enter search value'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={ ()=>{setTimeout(handleKeyPress, 750)}}
                />
                <span className='shortcut'>Ctlr + K</span>
            </div>
           
        </>

    )
}

export default SearchBar