import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from './store';
import { getOperatorsStart } from './store/slices/operator';
import { getOperatorsAddonStart } from './store/slices/operatorAddon';
import { GridColDef } from '@mui/x-data-grid';
import moment from 'moment'
import { ColumnsType } from './types/types';
import Table from './components/Table/Table';
import styled from 'styled-components';
import { STATIC_COLUMNS } from './constants';

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
    const operatorsAddon = useAppSelector(state => state.operatorsAddonReducer.operatorsAddon).filter((item, index, self) =>
      index === self.findIndex((t) => t.fieldName === item.fieldName)
    );

    useEffect(() => {
        dispatch(getOperatorsStart());
        dispatch(getOperatorsAddonStart());
    }, [dispatch]);

    const dynamicColumns = useMemo(() => operatorsAddon.map(item => ({field: item.fieldName, headerName: item.fieldName, width: 260})), [operatorsAddon]);
    const dynamicRows: ColumnsType = useMemo(() => operatorsAddon.reduce((acc, item) => ({...acc, [item.fieldName]: item.text}), {}), [operatorsAddon]);

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
