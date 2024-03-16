import s from './Region.module.css'
import region from '../../assets/map.png'

export default function Region() {
  return (
    <div className={s.ctn}>
      <div className={s.wrp}>
        <img src={region} alt='region'/>
      </div>
    </div>
  )
}
