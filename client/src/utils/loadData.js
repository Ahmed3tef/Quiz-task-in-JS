import axios from 'axios';
import { APIBase } from './api';

export async function loadData(thunkAPI, path) {
  return axios
    .get(`${APIBase}${path}`, thunkAPI)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err.response.data;
    });
}

export async function loadDataWithBody(thunkAPI, path, data) {
  return axios
    .post(`${APIBase}${path}`, data, thunkAPI)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err.response.data;
    });
}
