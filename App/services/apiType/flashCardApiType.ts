import {IApiResponse} from './apiTypeBase';
export type TWordFoundResponse = {
  word: string;
  phonetic: string;
  phonetics?: [];
  origin?: string;
  meanings: [];
  license?: {};
  sourceUrl?: {};
};
export type TWordNotFoundResponse = {
  title: string;
  message: string;
  resolution: string;
};
export type TWordResponse = TWordFoundResponse[] | TWordNotFoundResponse;

export interface IResponseCheckWordApi extends IApiResponse<TWordResponse> {}
