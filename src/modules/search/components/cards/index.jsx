import {Card} from "../../../../Components/card";
import './cards.css'


export const Cards = ({data})=>{
 return(
  <div className={"cards"}>
   <div className="container-xl">
    <div className="cards-title">
     <h2>Result of searched keyword</h2>
    </div>
    <div className="cards-box">
     {data.length>0? data.map((card)=>(
      <Card key={card.id} card={card}/>
     )):<h2>Not Found</h2>}
    </div>
   </div>
  </div>
 )
}