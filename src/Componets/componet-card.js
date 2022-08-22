
import Button from '../Componets/button'
import {AiFillEye}from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import defaultAvatar from '../Assets/Images/avatar.png'
const ComponentCard = ({data})=>{
    // const {id, title, description, icon} = data;
    return<>
        <div className="card">
           <div className="card_top center_center gap-1">
                <Button/>
                <Button/>
                <Button/>
           </div>
           <div className="card_bottom center_center gap-1">
                <div className='card_detail_left center_center gap-0_5'>
                    <a href=""><img src={defaultAvatar} className='profile_img' alt="profile" /></a>
                    <p>Engida</p>
                </div>

                <div className='card_detail_right center_center gap-0_5'>
                    <AiFillHeart/><span>903</span>
                    <AiFillEye/><span>293</span>
                </div>
           </div>
        </div>
    </>
}

export default ComponentCard;