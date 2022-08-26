
import { React, useState } from 'react'
import InfoCard from '../../Componets/Info-card'
import ComponentCard from '../../Componets/componet-card'

import { infoCards } from '../../Assets/Data/data'

const MainHome = ()=>{
    const [cardData, setCardData] = useState(infoCards)
    return(
        
        <main>
            <section>
                <div className="row">
                    <div className="col">
                        <div className="output_container">
                        </div>
                    </div>
                    <div className="col">
                        <div className="code_container">
                            
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="info_card_container margin_section">
                    {
                        cardData.map((data)=>{
                            return(
                                <InfoCard key={data.id} data = {data} />
                            )
                        })
                    }
                </div>
            </section>

            <section>
                <div className="cards_container margin_top_4 margin_section">
                    <ComponentCard/>
                    <ComponentCard/>
                    <ComponentCard/>
                    <ComponentCard/>
                </div>
            </section>
        </main>
    )
}

export default MainHome
