import { FC } from "react"
import IIsland from "../interfaces/IIslands"
import Island from "./Island"

interface IProps{
    Islands: IIsland[]
}

const Islands:FC<IProps> = ({Islands}) => {
    const elems = Islands.map((it,i)=>
    <Island 
    key={i}
    name={it.name}
    population={it.population}
    imgUrl={it.imgUrl}
    description={it.description}/>)    
  return (
    <div>
        {elems}
    </div>
  )
}

export default Islands