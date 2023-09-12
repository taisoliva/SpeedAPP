import { Checkbox, FormControlLabel } from "@mui/material";
import { datas } from "../../utils/datas";

export default function InputCheckBox(){
    return (
        <>
            {datas.students.map((item) => <FormControlLabel key={item.key} control={<Checkbox defaultChecked />} label={item.name} /> )}
            
        </>
       
    )
}