import { ReactNode } from "react";
import * as Styled from "./styles";
import { CardType } from "../../../types";
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";

interface LaneProps {
    background:string;
    color:string;
    children: ReactNode;
    cards: CardType[];
    skeleton:boolean;
    handleEditCards: (cardId: string, card: CardType) => void
}

const Lane = ({background,color,children,cards,skeleton,handleEditCards}:LaneProps) => {
    return(
    <Styled.Lane background={background}>
        <Styled.LaneTitle color={color}>
        {children}
        </Styled.LaneTitle>
        {
            skeleton ?
            <CardSkeleton/>
            :
            cards.map((card) => (
                <Card key={card._id} card={card} handleEditCards={handleEditCards}/>
            ))}
        
    </Styled.Lane>
  )
}

export default Lane;