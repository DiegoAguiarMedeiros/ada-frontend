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
    skeleton:boolean
}

const Lane = ({background,color,children,cards,skeleton}:LaneProps) => {
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
                <Card key={card.id} card={card}/>
            ))}
        
    </Styled.Lane>
  )
}

export default Lane;