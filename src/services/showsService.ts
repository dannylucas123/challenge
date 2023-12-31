import {AxiosResponse} from 'axios';
import api from '../api/axios';
import {Show} from '../models/show';
import {ShowDetails} from '../models/show-details';

interface ShowResponse {
  Search: Show[];
  totalResults: string;
  Response?: string;
}

// This could also be done in an interceptor, but the API seems to return different formats depending on the parameters and since there is a
// time limit I do not want to go through every possible option and cover those.
const handleResponse = (result: AxiosResponse<any, any>) => {
  const {data} = result;
  // This would need better typing overall.
  if (data.Error) {
    throw new Error('API returned an error within the body');
  }
  return data;
};

export const fetchShows = (s: string): Promise<ShowResponse> => api.get('', {params: {s}})
  // Typing is handled by the return type of the function
  .then(handleResponse)
  .catch(() => ({Search: [], totalResults: '0'} as ShowResponse));

export const getShow = (i: string): Promise<ShowDetails> => api.get('', {params: {i}})
  .then(handleResponse)
  .catch(() => ({} as ShowDetails));
