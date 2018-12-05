
import { get } from '@/utils/request';

export default {
  state: {
    title: '标题',
    titleArr: []
  },
  subscriptions: {
    history({ dispatch, history }) {
      const path = history.location.pathname;
      //  根路径跳转到home下
      if (path === '/') {
        history.push('/home');
      }

    }
  },
  reducers: {
    setList(state, action) {
      return {
        ...state,
        titleArr: action.payload || []
      };
    }
  },
  effects: {
    * getArticleList(action, { call, put }) {
      const res = yield call(get, 'http://localhost:3400/blog', { name: 'xx' });
      if (!res.err) {
        yield put({
          type: 'setList',
          payload: res
        });
      }

    }
  }
};