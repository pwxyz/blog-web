
// export default ({ title, time,  })

import Link from 'umi/link';
import style from './index.less';
import isDark from '@/utils/isDark';
import transformTime from '@/utils/transformTime';


const Time = ({num}) => <span>{transformTime(Number(num))}</span>;


const Label = ({name, color}) => <div className={style.label} style={{backgroundColor: `#${color}`, padding: '5px', whiteSpace: 'nowrap', color: `${isDark(color) ? 'white' : 'black'}`}}>{name}</div>;

export default ({obj}) => {
  const {_id, title, labels, created_at} = obj;
  return (
    <Link to={`/blog/${_id}`} className={style.container} >
      <div className={style.firstline} >
        <div className={style.title} >{title}</div>
        {
          labels && labels.length && labels.map((item, index) => <Label key={index} name={item.name} color={item.color} />)
        }
      </div>

      <div className={style.time} ><Time num={created_at} /></div>
    </Link>
  );
};