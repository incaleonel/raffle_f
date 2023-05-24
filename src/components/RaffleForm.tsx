import { useState,forwardRef} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { Button, TextField, Stack, Box, Snackbar } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { RootState } from '../redux/store';
import { ticketsReset } from '../redux/selectSlice';
import { getTickets } from '@/helpers/getTickets';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
  const tickets = useAppSelector((state: RootState) => state.selected.tickets);
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fd = new FormData();
    const ticketAsJSON = JSON.stringify(tickets);
    if (file) {
      fd.append('firstName', firstName);
      fd.append('lastName', lastName);
      fd.append('email', email);
      fd.append('instagramUsername', instagramUsername);
      fd.append('tickets', ticketAsJSON);
      fd.append('file', file);
    }

    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/raffles`, fd);
    setFirstName('');
    setLastName('');
    setEmail('');
    setInstagramUsername('');
    setFile(undefined);

    const list = await getTickets();
    dispatch(ticketsReset(list))
    console.log(response);
    handleClick();
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
    <Box sx={{ my: 3 }}>

      <ThemeProvider theme={theme}>

        <form onSubmit={handleSubmit} >
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
                  Subir Comprobante
                </Button>
              </label>
            </div>

            {file && <p>Archivo seleccionado: {file.name}</p>}
            <Button type="submit" variant="contained"  >
              Enviar
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Sus Rifas han sido reservadas!.
              </Alert>
            </Snackbar>
          </Stack>
        </form>
      </ThemeProvider>
    </Box>
  );
}