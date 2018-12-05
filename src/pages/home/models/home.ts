
import {get} from '@/utils/request';
import {title} from '@/constants/api';


export default {
  state: {
    title: []
  },
  reducers: {
    setTitle(state, action) {
      return {
        ...state,
        title: action.payload
      };
    }
  },
  effects: {
    * getTitle(action, {call, put}) {
      const res = yield call(get, title);
      if (!res.err || res.code === 200) {
        yield put({type: 'setTitle', payload: res.data});
      }
    }
  }
};