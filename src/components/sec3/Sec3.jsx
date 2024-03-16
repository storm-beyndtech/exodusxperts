import s from './Sec.module.css';
import { logistic3 } from '../../utils/secText';

export default function Sec3() {
  return (
    <div className={s.ctn}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <h1 className={s.title}>{logistic3.title1} <span> {logistic3.title2}</span> {logistic3.title3}</h1>
          <p className={s.subtitle}>{logistic3.desc}</p>
        </div>
        <div className={s.right}>
          <img src={logistic3.image} alt="logistic"/>
        </div>
      </div>
    </div>
  )
}
