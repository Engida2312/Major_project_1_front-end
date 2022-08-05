
import {BsSearch} from 'react-icons/bs'
import Input from './input'
import '../Assets/Styles/search-bar.css'
import '../Assets/Styles/icons.css'


const SearchBar = ()=>{
    return (
        <div className="search_bar_container">
            <span className='icon'><BsSearch/></span>
            <Input></Input>
            <span className='shortcut'>Ctlr + K</span>
        </div>
    )
}

export default SearchBar