import Card, { CardProps } from "@mui/material/Card";
import { styled } from "@mui/material/styles";

const MDCard = styled((props: any) => <Card {...props} />)<CardProps>(
    ({ theme }) => ({

        boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.1)`,

    })
);

export default MDCard;
