import s from './Sec.module.css';
import { logistic2 } from '../../utils/secText';

export default function Sec2() {
  return (
    <div className={s.ctn}>
      <div className={s.wrapper}>
        <div className={s.right}>
          <img src={logistic2.image} alt="logistic"/>
        </div>
        <div className={s.left}>
          <h1 className={s.title}>{logistic2.title1} <span> {logistic2.title2}</span> {logistic2.title3}</h1>
          <p className={s.subtitle}>{logistic2.desc}</p>
        </div>
      </div>
    </div>
  )
}
