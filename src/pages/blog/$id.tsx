
import React from 'react';
import extraConnect from '@/utils/extraConnect';
import Markdown from '@/components/MarkdownRender';
import style from './index.less';
import transformTime from '@/utils/transformTime';
import Comment from '@/components/Comment';

interface Props{
  state: {
    blog: string;
    loading: object;
  };
}

interface State{

}

const Comments = ({arr}) => {
  return (
    <div>
      <div style={{marginTop: 20}} ></div>
      {
        arr.map((i, index) =>
          <Comment user={i['user']} key={index} time={i['created_at']} body={i['body']} />)
      }
    </div>
  );
};


@extraConnect()
class Blog extends React.Component<Props, State> {
  render() {
    const {blog, loading} = this.props.state;
    const isLoading = loading['effects']['blog/getBlog'];
    const haveComment = !!(blog['comments'] && blog['comments'].length);
    return (
      <div className={style.container} >
        {
          isLoading ? <div>loading...</div> :
            <div>
              <h1 className={style.title} >{blog['title']}</h1>
              <div className={style.time} >{transformTime(blog['time'])}</div>
              <Markdown content={blog['body'] || ''} />
              {
                haveComment && <Comments arr={blog['comments']} />
              }
            </div>
        }
      </div>
    );
  }
}


export default Blog;