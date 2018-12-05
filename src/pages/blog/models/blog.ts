
import {get} from '@/utils/request';
import {blog} from '@/constants/api';

const replaceId = (str, id) => str.replace(/\/:id/, `/${id}`);


export default {
  state: {
    body: null,
    title: null,
    time: 0,
    comments: []
  },
  subscriptions: {
    history({dispatch, history}) {
      const id = history.location.pathname.split('/')[2];
      dispatch({type: 'getBlog', payload: id});
    }
  },
  reducers: {
    setBlog(state, action) {
      console.log(action.payload);
      const {body, title, created_at, comment} = action.payload;
      return {
        ...state,
        body,
        title,
        time: created_at,
        comments: comment
      };
    }
  },
  effects: {
    * getBlog(action, {call, put}) {
      const id = action.payload;
      const str = replaceId(blog, id);
      const res = yield call(get, str);
      if (!res.err || res.code === 200) {
        yield put({type: 'setBlog', payload: res.data});
      }
    }
  }
};