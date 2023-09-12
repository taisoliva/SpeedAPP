import { InputLabel, MenuItem, Select } from "@mui/material";
import { styled } from "styled-components";

export default function InputSelect({data, label, value = '', onChange = () => 0}) {

    
    return (
        <>
            <InputLabel id="demo-simple-select-label">{`Selecione ${label} `}</InputLabel>
            <StyledSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value={value}
                onChange={onChange}
                
            >
                {data.map(item => <MenuItem key={item.key} value={item.name}>{item.name}</MenuItem>)}
            </StyledSelect>
        </>

    )
} 

const StyledSelect = styled(Select)`
    width: 100% !important;
    margin-bottom: 10px;
`