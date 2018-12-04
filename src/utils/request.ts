
import fetch from 'superagent';



export const get = (url: string, option?: object, headers?: object) => {
  return fetch.get(url).query(option || {}).set(headers || {}).then(res => res);
};

export const post = (url: string, option?: object, headers?: object) => {
  return fetch.post(url).send(option || {}).set(headers || {}).then(res => res);
};