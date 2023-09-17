import { CardType } from "../../../../types";
import * as Styled from "./styles";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import EditCard from "./EditCard";

interface CardProps {
    card: CardType;
    handleEditCards: (cardId: string, card: CardType) => void
}

const Card = ({card,handleEditCards}:CardProps) =>{

    const [editMode, setEditMode] = useState(false);

    const handleEditMode = () =>{
        setEditMode(!editMode);
    }

    const handleEdit = (cardId: string,newCard:CardType) => {
        console.log('cardId',cardId)
        console.log('newCard',newCard)
        handleEditCards(cardId,newCard);
        handleEditMode();
    }

    return (

        editMode ?
        <EditCard card={card} handleEditMode={handleEditMode} handleEdit={handleEdit}/>
        :
        <Styled.Card>
        <Styled.CardHead>
            <Styled.CardHeadTitle>
                <h4>{card.titulo}</h4>
                </Styled.CardHeadTitle>
            <Styled.CardHeadIcon>
                <EditIcon onClick={handleEditMode}/>
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