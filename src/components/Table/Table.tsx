import React from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import styled from 'styled-components';
interface ITable {
    rows: Array<{[key: string]: string | boolean}>,
    columns: GridColDef[]
}

const Wrapper = styled.div`
    width: 80%;
`

const Table:React.FC<ITable> = ({rows, columns}) => {
    return(
        <Wrapper>
            <Box sx={{ height: 700 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                        paginationModel: { pageSize: 25, page: 0 },
                    },
                    }}
                />
            </Box>
        </Wrapper>
    )
}

export default Table