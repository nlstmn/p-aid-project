import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const MDButton = styled((props: ButtonProps) => (
    <Button {...props} />
))((theme) => ({

}));

export default MDButton