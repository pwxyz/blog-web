
import fetch from 'superagent';
import { message } from 'antd';


export const get = (url: string, option?: object, headers?: object) => {
  return fetch.get(url).query(option || {}).set(headers || {}).then(res => res.body).catch(err => { console.error(err); message.error(err.message || JSON.stringify(err)); return { err: err.message || err } });
};

export const post = (url: string, option?: object, headers?: object) => {
  return fetch.post(url).send(option || {}).set(headers || {}).then(res => res.body).catch(err => { console.error(err); return { err: err.message || err } });
};