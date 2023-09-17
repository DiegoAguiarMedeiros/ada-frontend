import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import authRest from '../../services/auth/auth-rest';
import authUser from '../../utils/auth';
import User from '../../utils/user';
import { useEffect } from 'react';
import { UserDataType } from '../../types';

const users = ['letscode', 'letscode2'];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    
    const user:UserDataType ={
      login:value,
      senha:"lets@123"
    }

    authRest.login(user).then((retorno) => User.setUserData(retorno.data))

    handleClose()
    onClose(value);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>User</DialogTitle>
      <List sx={{ pt: 0 }}>
        {users.map((email) => (
          <ListItem disableGutters key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        </List>
    </Dialog>
  );
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };


  useEffect(()=>{

    authUser.isAuthenticated().then((retorno)=>!retorno && handleClickOpen())
    User.getUser().then((retorno)=>handleClose(retorno.login))
  },[])


  return (
    <div>
      <Typography variant="subtitle1" component="div">
        User: {selectedValue}
      </Typography>
      <Button variant="outlined" onClick={handleClickOpen}>
        Change
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}