import s from './Sec.module.css';
import { logistic } from '../../utils/secText';

export default function Sec() {
  return (
    <div className={s.ctn}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <h1 className={s.title}>{logistic.title1} <span> {logistic.title2}</span> {logistic.title3}</h1>
          <p className={s.subtitle}>{logistic.desc}</p>
        </div>
        <div className={s.right}>
          <img src={logistic.image} alt="logistic"/>
        </div>
      </div>
    </div>
  )
}
