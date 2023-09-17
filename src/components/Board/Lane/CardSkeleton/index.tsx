
import Skeleton from "@mui/material/Skeleton";
import * as Styled from "./styles";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CardSkeleton = () =>{
    return (
    <Styled.Card>
    <Styled.CardHead>
        <Styled.CardHeadTitle>
        <Skeleton variant="rectangular" height={40} />
        </Styled.CardHeadTitle>
        <Styled.CardHeadIcon>
        <EditIcon/>
        </Styled.CardHeadIcon>
    </Styled.CardHead>
    <Styled.CardBody>
        <Skeleton variant="rectangular" width='100%' height={60} />
    </Styled.CardBody>
    <Styled.CardFooter>
        <p><DeleteIcon/></p>
    </Styled.CardFooter>
    </Styled.Card>
    )
}
export default CardSkeleton;