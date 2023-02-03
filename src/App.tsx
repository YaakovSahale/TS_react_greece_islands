
import './App.css'
import Islands from './components/Islands'
import IIsland from './interfaces/IIslands'

function App() {
const islands:IIsland[] = [{
name:'kos' ,
population:33387 ,
imgUrl:'https://cdn.pixabay.com/photo/2018/01/30/12/06/sea-3118630__340.jpg',
description:'kos is a nice island'
},
{
name:'kalimnos',
population:16179,
imgUrl:'https://cdn.pixabay.com/photo/2017/02/26/13/12/church-bell-2100191__340.jpg',
description:''
}

]
  return (
    <div className="App">
      <Islands Islands={islands}/>
    </div>
  )
}

export default App
