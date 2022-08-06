
import InfoCard from '../../Componets/Info-card'
import '../../Assets/Styles/main-home.css'
import { infoCards } from '../../Assets/Data/data'

const MainHome = ()=>{
    console.log(infoCards)
    return(
        <main>
            <section>
                <div className="info_card_container">
                    {
                        <InfoCard info = {infoCards} ></InfoCard>
                    }
                </div>
            </section>
        </main>
    )
}

export default MainHome
