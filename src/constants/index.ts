import CheckBoxCell from '../ui/cells/Checkbox/Checkbox';

// Store

export const OPERATORS_SLICE_NAME: string = 'operators';
export const OPERATORS_ADDON_SLICE_NAME: string = 'operatorsAddon';

// Saga types

export const GET_OPERATORS_START: string = 'operators/getOperatorsStart';
export const GET_OPERATORS_ADDON_START: string = 'operatorsAddon/getOperatorsAddonStart';

// Column static fields

export const STATIC_FIELD_ID: string = 'id';
export const STATIC_FIELD_NAME: string = 'name';
export const STATIC_FIELD_IS_WORKING: string = 'isWorking';
export const STATIC_FIELD_CREATED_AT: string = 'createdAt';

export const STATIC_HEADER_NAME_ID: string = '#';
export const STATIC_HEADER_NAME_USER: string = 'Користувач';
export const STATIC_HEADER_NAME_WORKING: string = 'Працює';
export const STATIC_HEADER_NAME_CREATING_DATE: string = 'Дата / Час створення';

export const STATIC_COLUMNS = [
    {field: STATIC_FIELD_ID, headerName: STATIC_HEADER_NAME_ID, width: 90},
    {field: STATIC_FIELD_NAME, headerName: STATIC_HEADER_NAME_USER, width: 150},
    {field: STATIC_FIELD_IS_WORKING, headerName: STATIC_HEADER_NAME_WORKING, width: 150, renderCell: CheckBoxCell},
    {field: STATIC_FIELD_CREATED_AT, headerName: STATIC_HEADER_NAME_CREATING_DATE, width: 190},
]
// Endpoints

export const OPERATORS_ENDPOINT: string = '/operator';
export const OPERATORS_ADDON_ENDPOINT: string = '/operatorAddon';
