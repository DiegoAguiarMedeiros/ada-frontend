import { CardType } from "../../../../../types";
import * as Styled from "./styles";
import SaveIcon from '@mui/icons-material/Save';
import BlockIcon from '@mui/icons-material/Block';
import { FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import { ChangeEvent,  useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';


interface CardProps {
    card: CardType;
    handleEdit:(cardId: string,card: CardType) => void
    handleEditMode:() => void
}

const EditCard = ({card,handleEdit,handleEditMode}:CardProps) =>{
    const [dados, setDados] = useState<CardType>({
        titulo:card.titulo,
        conteudo:card.conteudo,
        lista:card.lista,
    });

    const handleChangeSelect = (event: SelectChangeEvent) => {
        setDados({
            ...dados,
            lista:event.target.value as string
        });
    };
    const handleChangeTitle = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDados({
            ...dados,
            titulo: event.target.value as string
        });
    };
    const handleChangeContudo = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDados({
            ...dados,
            conteudo: event.target.value as string
        });
    };

    const handleChange = () => {
        console.log('card',card)
        handleEdit(card._id!,dados);
    };
    return (
        <Styled.Card>
        <Styled.CardHead>
            <Styled.CardHeadTitle>
                <TextField id="input-title" label="titulo" variant="outlined" onChange={handleChangeTitle} value={dados.titulo} fullWidth />
            </Styled.CardHeadTitle>
        </Styled.CardHead>
        <Styled.CardBody>
        <TextField id="input-title" label="titulo" variant="outlined" onChange={handleChangeContudo} value={dados.conteudo} fullWidth multiline/>
        </Styled.CardBody>
        <Styled.CardFooter>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Coluna</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="select-coluna"
                value={dados.lista}
                label="Coluna"
                onChange={handleChangeSelect}
            >
                <MenuItem value={'To Do'}>To Do</MenuItem>
                <MenuItem value={'Doing'}>Doing</MenuItem>
                <MenuItem value={'Done'}>Done</MenuItem>
            </Select>
            </FormControl>
        </Styled.CardFooter>
        <Styled.CardFooter>
            <p><BlockIcon onClick={handleEditMode}/></p>
            <p><SaveIcon onClick={handleChange}/></p>
        </Styled.CardFooter>
        </Styled.Card>
    )
}
export default EditCard;