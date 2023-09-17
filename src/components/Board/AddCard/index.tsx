import * as React from 'react';
import * as Styled from "./styles";
import Button from '../../Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { CardType } from '../../../types';

interface AddCardProps {
  coluna:"To Do" | "Doing" | "Done";
  handleAddCards:(card:CardType)=>void;
}

export default function AddCard({coluna,handleAddCards}:AddCardProps) {
  const [open, setOpen] = React.useState(false);
  const [dados, setDados] = React.useState<CardType>({
    titulo:'',
    conteudo:'',
    lista:coluna,
});
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addCard = () => {
    handleAddCards(dados);
    handleClose();
  }



const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDados({
        ...dados,
        titulo: event.target.value as string
    });
};
const handleChangeContudo = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDados({
        ...dados,
        conteudo: event.target.value as string
    });
};

  return (
    <div>
      <Button color='primary' variant='contained' onClick={handleClickOpen}>
        Adicionar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Adicionando em " + coluna}
        </DialogTitle>
        <DialogContent>
        <Styled.Card>
          <Styled.CardHead>
              <Styled.CardHeadTitle>
                  <TextField id="input-title" label="titulo" variant="outlined" onChange={handleChangeTitle} value={dados.titulo} fullWidth />
              </Styled.CardHeadTitle>
          </Styled.CardHead>
          <Styled.CardBody>
            <TextField id="input-title" label="conteudo" variant="outlined" onChange={handleChangeContudo} value={dados.conteudo} fullWidth multiline 
          maxRows={5}/>
          </Styled.CardBody>
        </Styled.Card>
        </DialogContent>
        <DialogActions>
          <Button color='error' variant='contained' onClick={handleClose}>Cancelar</Button>
          <Button onClick={addCard} color='success' variant='contained'>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}