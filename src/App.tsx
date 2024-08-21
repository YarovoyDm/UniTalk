import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store';
import { getOperatorsStart } from './store/slices/operator';
import { getOperatorsAddonStart } from './store/slices/operatorAddon';
import { GridColDef } from '@mui/x-data-grid';
import moment from 'moment'
import CheckBoxCell from './ui/cells/Checkbox/Checkbox';
import { ColumnsType } from './types/types';
import Table from './components/Table/Table';
import {
  STATIC_FIELD_CREATED_AT,
  STATIC_FIELD_ID,
  STATIC_FIELD_IS_WORKING,
  STATIC_FIELD_NAME,
  STATIC_HEADER_NAME_CREATING_DATE,
  STATIC_HEADER_NAME_ID,
  STATIC_HEADER_NAME_USER,
  STATIC_HEADER_NAME_WORKING
} from './constants';
import styled from 'styled-components';

type RowsType = {
  id: string;
  name: string;
  isWorking: boolean;
  createdAt: string;
  [key: string]: any;
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

    const getDynamicColumns = operatorsAddon.map(item => ({field: item.fieldName, headerName: item.fieldName, width: 260}));
    const getDynamicRows: ColumnsType[] = operatorsAddon.map(item => ({[item.fieldName]: item.text}))

    const columns: GridColDef[] = [
        {field: STATIC_FIELD_ID, headerName: STATIC_HEADER_NAME_ID, width: 90},
        {field: STATIC_FIELD_NAME, headerName: STATIC_HEADER_NAME_USER, width: 150},
        {field: STATIC_FIELD_IS_WORKING, headerName: STATIC_HEADER_NAME_WORKING, width: 150, renderCell: CheckBoxCell},
        {field: STATIC_FIELD_CREATED_AT, headerName: STATIC_HEADER_NAME_CREATING_DATE, width: 190},
        ...getDynamicColumns
    ];

    const rows: RowsType[] = 
      [...operators.map(item => ({id: item.id, name: item.name, isWorking: item.isWorking, createdAt: moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss')}))];

    rows.forEach(obj => {
      getDynamicRows.forEach(item => {
          Object.assign(obj, item);
      });
    });
  
    return (
        <Wrapper><Table rows={rows} columns={columns}/></Wrapper>
    );
}

export default App;
