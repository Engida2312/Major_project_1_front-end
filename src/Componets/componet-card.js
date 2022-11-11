
import Button from '../Componets/button'
import {AiFillEye}from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import defaultAvatar from '../Assets/Images/avatar.png'
import '../Assets/Styles/profile_card.css'
import { useSelector } from 'react-redux'

const ComponentCard = ({id, name, category_id, viewes, likes, created_at})=>{
    const {user, isLoading} = useSelector((state)=> state.auth)

    return<>
        <div className="card wrapper align_items_c">
           <div className="card_top center_center gap-1">
                <Button/>
                <Button/>
                <Button/>
           </div>
           <div className="card_bottom center_center gap-1">
                <div className='card_detail_left center_center gap-0_5'>
                    <a href=""><img src={defaultAvatar} className='profile_img' alt="profile" /></a>
                    <p>Engida</p>
                    <p>{name}</p>
                </div>

                <div className='card_detail_right center_center gap-0_5'>
                    <AiFillHeart/><span>{likes}</span>
                    <AiFillEye/><span>{viewes}</span>
                </div>
           </div>
           {
                user ? (<>
                     <div className="content ">
                        <br />
                        <hr />
                        <h4>More content</h4>
                        <br/>
                        <div className="center_center justify_content_sb ">
                            <div className='flex justify_content_sb w-100'>
                                <button style={{backgroundColor: '#e6cd42'}} className='btn deactivate-btn' 
                                    onClick={()=> console.log('edit')}>Edit
                                </button>
                                <button className='btn deactivate-btn' 
                                    onClick={()=> console.log('delete')}>Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </>) : (<>
                    
                </>)
            }
          
        </div>
    </>
}

export default ComponentCard;