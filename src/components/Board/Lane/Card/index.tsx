import { CardType } from "../../../../types";
import * as Styled from "./styles";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactMarkdown from "react-markdown";

interface CardProps {
    card: CardType
}

const Card = ({card}:CardProps) =>{

    return (
    <Styled.Card>
    <Styled.CardHead>
        <Styled.CardHeadTitle>
            <h4>{card.titulo}</h4>
            </Styled.CardHeadTitle>
        <Styled.CardHeadIcon>
            <EditIcon/>
        </Styled.CardHeadIcon>
    </Styled.CardHead>
    <Styled.CardBody>
        <ReactMarkdown  className="markdown-container">{card.conteudo}</ReactMarkdown>
    </Styled.CardBody>
    <Styled.CardFooter>
        <p><DeleteIcon/></p>
    </Styled.CardFooter>
    </Styled.Card>
    )
}
export default Card;