import { useState} from 'react';
import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { pink, orange } from '@mui/material/colors';
import { Button, TextField, Stack, Box} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';


const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: orange[500],
    },
  },
});

export default function RaffleForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [instagramUsername, setInstagramUsername] = useState('');
  const [file, setFile] = useState<File>();
  const tickets = useAppSelector((state:RootState)=> state.selected.tickets)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const data = { firstName, lastName, email, instagramUsername, file, tickets};
    const response = await axios.post('http://192.168.0.102:3001/api/check', data);
    setFirstName('');
    setLastName('');
    setEmail('');
    setInstagramUsername('');
    
  };
  const styleInput = {
      bgcolor: 'rgba(255,255,255,0.3)', borderRadius: '4px', "& label": {
        color: "white"
      },
      "& input": {
        color: "white"
      }
  }

  return (
    <Box sx={{my:3}}>

    <ThemeProvider theme={theme}>

      <form onSubmit={handleSubmit}>
        <Stack spacing={1}>
          <TextField
            label="Nombre"
            fullWidth
            sx={styleInput}
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <TextField
            label="Apellido"
            fullWidth
            sx={styleInput}
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <TextField
            type='email'
            label="Correo electrónico"
            fullWidth
            sx={styleInput}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            label="Usuario de Instagram"
            fullWidth
            sx={styleInput}
            value={instagramUsername}
            onChange={(event) => setInstagramUsername(event.target.value)}
          />
          
          <input
            type="file"
            accept="image/*, application/pdf"
            id="file-upload"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <div>
            <label htmlFor="file-upload" id='label-upload'>
              <Button
                variant="contained"
                component="div"
                startIcon={<CloudUploadIcon />}
                sx={{ bgcolor: 'rgba(255,255,255,0.3)', borderRadius: '4px', borderColor: 'green' }}
              >
                Subir archivo
              </Button>
            </label>
          </div>

          {file && <p>Archivo seleccionado: {file.name}</p>}
          <Button type="submit" variant="contained" >
            Enviar
          </Button>
        </Stack>
      </form>
    </ThemeProvider>
    </Box>
  );
}