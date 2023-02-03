import React, { FC, SyntheticEvent } from 'react'
import IIsland from '../interfaces/IIslands'
import styles from './AddIsland.module.css'

interface IProps{
  addIsland:(island:IIsland)=>void
}

const AddIsland:FC<IProps> = ({addIsland}) => {
  return (
    <form className={styles.AddIsland} onSubmit={(e:SyntheticEvent)=>{
      e.preventDefault()
      const target = e.target as any
      const newIsland:IIsland={
        name: target.name.value,
        population: target.population.value,
        imgUrl: target.url.value,
        description: target.description.value
      }

      addIsland(newIsland);
      (target as HTMLFormElement).reset()
    }
    }>
      <input type="text" name='name' placeholder='Name' required />
      <input type="text" name='url' placeholder='Img url' required/>
      <input type="number" name='population' placeholder='Population' required/>
      <textarea name="description" placeholder='Description'></textarea>
      <input type="submit" value='Add Island'/>
    </form>
  )
}

export default AddIsland