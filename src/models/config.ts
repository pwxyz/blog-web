
import { get } from '@/utils/request';

export default {
  state: {
    title: '标题',
    titleArr: []
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
      console.log(res);
      yield put({
        type: 'setList',
        payload: res
      });
    }
  }
};