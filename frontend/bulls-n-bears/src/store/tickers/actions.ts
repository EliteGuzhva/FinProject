import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  AppendTickerData,
  SetTickerData,
  TickersActionType,
} from './action-types';
import { GetTickerResponse, TickerData } from './types';
import { mapGetTickerResponseToTickerDataArray } from './utils/map-rest-to-model';

const API_URL = process.env.REACT_APP_SERVER_URL;

export const setTickerData = (
  tickerName: string,
  tickersData: TickerData[]
): SetTickerData => ({
  type: TickersActionType.SetTickerData,
  tickersData: tickersData,
  tickerName,
});

export const appendTickerData = (
  tickerName: string,
  tickerData: TickerData
): AppendTickerData => ({
  type: TickersActionType.AppendTickerData,
  tickerData,
  tickerName,
});

export const getAllTickerHistory = (
  tickerName: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  const response = await fetch(
    `${API_URL}/fin/get_all_ticker_history?ticker=${tickerName}`
  );

  const responseJson: GetTickerResponse = await response.json();
  dispatch(
    setTickerData(
      tickerName,
      mapGetTickerResponseToTickerDataArray(responseJson)
    )
  );
};

export const getTickerHistory = (
  tickerName: string,
  begin: Date,
  end: Date
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  const beginTimestamp = begin.getTime() / 1000;
  const endTimestamp = end.getTime() / 1000;
  const response = await fetch(
    `${API_URL}/fin/get_ticker_history?ticker=${tickerName}&begin=${beginTimestamp}&end=${endTimestamp}`
  );

  const responseJson: GetTickerResponse = await response.json();
  dispatch(
    setTickerData(
      tickerName,
      mapGetTickerResponseToTickerDataArray(responseJson)
    )
  );
};

export const addTickerHistory = (
  tickerName: string,
  begin: Date,
  end: Date
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  console.log(`Add ticker from ${begin} to ${end}`);
  const beginTimestamp = begin.getTime() / 1000;
  const endTimestamp = end.getTime() / 1000;
  const response = await fetch(
    `${API_URL}/fin/get_ticker_history?ticker=${tickerName}&begin=${beginTimestamp}&end=${endTimestamp}`
  );

  const responseJson: GetTickerResponse = await response.json();
  const tickersData = mapGetTickerResponseToTickerDataArray(
    responseJson
  ).filter(({ date }) => date > begin);
  tickersData.forEach((d) => console.log(d.date));
  const addValue = tickersData[0];
  if (tickersData.length !== 0) {
    dispatch(appendTickerData(tickerName, addValue));
  }
};