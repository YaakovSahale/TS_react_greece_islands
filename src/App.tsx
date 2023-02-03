
import { useState } from 'react'
import AddIsland from './components/AddIsland'
import Islands from './components/Islands'
import './App.css'
import IIsland from './interfaces/IIslands'

function App() {
const [islands,setIslands] = useState<IIsland[]>([
  {
  name:'kos' ,
  population:33387 ,
  imgUrl:'https://cdn.pixabay.com/photo/2018/01/30/12/06/sea-3118630__340.jpg',
  description:'kos is a nice island'
  },
  {
    name:'kalimnos',
    population:16179,
    imgUrl:'https://cdn.pixabay.com/photo/2017/02/26/13/12/church-bell-2100191__340.jpg',
    description:'this is also fun'
  }])

  const addIsland = (island:IIsland):void=>{
    const newIslands = [...islands]
    newIslands.push(island)
    setIslands(newIslands)
  }

  return (
    <div className="App">
      <h2>Greek islands</h2>
      <AddIsland addIsland={addIsland}/>
      <Islands Islands={islands}/>
    </div>
  )
}

export default App
