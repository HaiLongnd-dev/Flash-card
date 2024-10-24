import {IResponseCheckWordApi} from '../apiType/flashCardApiType';
import http from '../http';

export const checkWordApi = (word: string): Promise<IResponseCheckWordApi> => {
  return http.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
};
