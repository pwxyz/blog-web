
import React from 'react';
import MarkDown from '@/components/MarkdownRender';
import transformTime from '@/utils/transformTime';
import style from './index.less';

const Comment = ({user, time, body}) => {
  return (
    <div className={style.container} >
      <img src={user['avatar_url']} alt={user['login'] || '图像'} className={style.img} />
      <div className={style.right} >
        <div >
          <span className={style.username}>{user['login']}</span>
          <span>{transformTime(Number(time) || 0)}</span>
        </div>
        <MarkDown content={body} />
      </div>
    </div>
  );
};



export default Comment;