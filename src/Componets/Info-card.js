import '../Assets/Styles/card.css'

const InfoCard = ({infoCards})=>{
    return<>
        <div id={info.id} className="info_card">
            <h3>{info.title}</h3>
            <p>{info.descrioption}</p>
        </div>
    </>
}

export default InfoCard;