import { FC } from 'react'
import IIsland from '../interfaces/IIslands'
import styles from './Island.module.css'


const Island:FC<IIsland> = ({imgUrl,name,population,description}) => {
  return (
    <div className={styles.Island}>
      <img src={imgUrl} alt="island" />
      <p>{name}</p>
      <p>{population}</p>
      <p>{description}</p>
    </div>
  )
}

export default Island