import styled from 'styled-components';
import { TextField } from '@mui/material';

export default function Input({formatChars, variant = 'outlined', value='', onChange = () => 0,...props}) {
  return  (
    <StyledTextField {...props} value={value}  onChange={onChange} variant={variant} />
  );
}

const StyledTextField = styled(TextField)`
  margin-top: 8px !important;
  margin-top: 14px !important;
  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 1px solid #000;
`;
