import api from '../api/axios';
import {Show} from '../models/show';

export interface ShowResponse {
  Search: Show[];
  totalResults: string;
  Response?: string;
}

export const fetchShows = (s: string): Promise<ShowResponse> => api.get('', {params: {s}})
  .then((result) => {
    const {data} = result;
    // This would need better typing overall.
    if (data.Error) {
      throw new Error('API returned an error within the body');
    }
    return data as ShowResponse;
  })
  .catch((err) => {
    // If I had more time for the challenge I would obviously add better error handling here.
    if (s) {
      // eslint-disable-next-line no-alert
      window.alert(err);
    }
    return {Search: [], totalResults: '0'} as ShowResponse;
  });
