import '../Assets/Styles/admin-card.css'

const StatCard = ()=>{
    return (
        <div className="row card admin_card gap-1">
            <div className="col">
                <article>
                    <h3>Cataory</h3>
                    <p>Total</p>
                    <h3>59</h3>
                </article>
            </div>
            <div className="col">
                graph
            </div>
        </div>
    )
}

export default StatCard;