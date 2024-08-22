import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";

const CheckBoxCell = (props: GridRenderCellParams<any, boolean>) => {
    const [checked, setChecked] = useState(props.value);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
    
    return (
      <Checkbox
        size="medium"
        checked={checked} 
        onChange={handleChange}
        color="error"
      />
    );
  }

  export default CheckBoxCell;