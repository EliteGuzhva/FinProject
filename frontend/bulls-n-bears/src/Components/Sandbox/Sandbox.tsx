import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTickerHistory, getTickerHistory } from '../../store/tickers';
import { RootState } from '../../store/types';
import { getTickerData } from '../../selectors/tickers/tickers';
import { TickerChart } from './TickerChart';
import { ChartRouter } from './ChartRouter';
import { Transactions } from './Transactions';
import { AvailableTickers } from './RightsideBar/AvailableTickers';
import { TransactionsHistory } from './RightsideBar/TransactionsHistory';
import { Assets } from './RightsideBar/Assets';
import useAuth from '../../context/useAuth';
import { SandboxInit } from './SandboxInit';

export interface SandboxProps {}
const tickerName = 'AAPL';
export const Sandbox: React.FunctionComponent<SandboxProps> = (props) => {
  const { user } = useAuth();
  const start = user?.sandboxData?.startTime;
  return (
    <div>
      {start !== undefined && start.getTime() !== 0 ? (
        <>
          <ChartRouter />
          <Transactions />
          <AvailableTickers />
          <TransactionsHistory />
          <Assets />
        </>
      ) : (
        <SandboxInit />
      )}
    </div>
  );
};

const useStyles = makeStyles({});
