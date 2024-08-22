import { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import moment from 'moment'
import { GridColDef } from '@mui/x-data-grid';
import { getOperatorsStart } from './store/slices/operator';
import { getOperatorsAddonStart } from './store/slices/operatorAddon';
import { ColumnsType, OperatorAddon } from './types/types';
import Table from './components/Table/Table';
import { STATIC_COLUMNS } from './constants';
import { useAppDispatch, useAppSelector } from './store';

type RowsType = {
  id: string;
  name: string;
  isWorking: boolean;
  createdAt: string;
  [key: string]: string | boolean;
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const App = () => {
    const dispatch = useAppDispatch();
    const operators = useAppSelector(state => state.operatorsReducer.operators);
    const operatorsAddon = useAppSelector(state => state.operatorsAddonReducer.operatorsAddon)
    const uniqOperatorsAddon: OperatorAddon[] = useMemo(() => Object.values(operatorsAddon.reduce((acc, item) => ({...acc, [item.fieldName]: item}), {})), [operatorsAddon]);

    useEffect(() => {
        dispatch(getOperatorsStart());
        dispatch(getOperatorsAddonStart());
    }, [dispatch]);

    const dynamicColumns = useMemo(() => uniqOperatorsAddon.map(item => ({field: item.fieldName, headerName: item.fieldName, width: 260})), [uniqOperatorsAddon]);
    const dynamicRows: ColumnsType = useMemo(() => uniqOperatorsAddon.reduce((acc, item) => ({...acc, [item.fieldName]: item.text}), {}), [uniqOperatorsAddon]);

    const columns: GridColDef[] = useMemo(() => [
      ...STATIC_COLUMNS,
      ...dynamicColumns,
    ], [dynamicColumns]);

    const rows: RowsType[] = useMemo(() => {
      return operators.map(item => ({
        id: item.id,
        name: item.name,
        isWorking: item.isWorking,
        createdAt: moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss'),
        ...dynamicRows
      }))
    }, [dynamicRows, operators]) 
      
    return (
        <Wrapper><Table rows={rows} columns={columns}/></Wrapper>
    );
}

export default App;
