
const InfoCard = ({infoCards})=>{
    return<>
        <div id={infoCards.id} className="info_card">
            <h3>{infoCards.title}</h3>
            <p>{infoCards.descrioption}</p>
        </div>
    </>
}

export default InfoCard;