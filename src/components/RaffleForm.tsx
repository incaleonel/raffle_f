import { useState, forwardRef, useEffect } from 'react';
import { Button, TextField, Stack, Snackbar, Grid, FormHelperText } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { RootState } from '../redux/store';
import { ticketsReset } from '../redux/selectSlice';
import { getTickets } from '@/helpers/getTickets';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Form, sendForm } from '@/helpers/sendForm';
import { getLinkCheckout } from '@/helpers/getLinkCheckout';


const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const styleInput = {

  "& label": {
    color: "#fbae09"
  },
  "& input": {
    color: "#cccccc"
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: "#fbae09",
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0fa8bfd1',
    },
  },
}

interface Props {
  receipt?: boolean;
}
export default function RaffleForm({ receipt = true }: Props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [instagramUsername, setInstagramUsername] = useState('');
  const [file, setFile] = useState<File>();
  const tickets = useAppSelector((state: RootState) => state.selected.tickets);
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [helperText, setHelperText] = useState(false);

  const [urlMP, setUrlMP] = useState<string>('');
  useEffect(() => {

    getLinkCheckout(tickets.length).then(res => setUrlMP(res)).catch(err => console.log(err));

  }, [tickets])
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

    const form: Form = {
      firstName,
      lastName,
      email,
      instagramUsername,
      tickets,
      file
    }

    try {
      if (firstName && lastName && email && instagramUsername && (file || !receipt) && tickets.length != 0) {
        await sendForm(form);

        setFirstName('');
        setLastName('');
        setEmail('');
        setInstagramUsername('');
        setFile(undefined);

        handleClick();
        const list = await getTickets();
        dispatch(ticketsReset(list))
        if(!receipt){
          window.open(urlMP, '_blank');
        }
      } else {
        setHelperText(true);
      }
      
    } catch (err) {
      console.log('RaffleForm ', err)
    }
  };

  return (
    

      <form onSubmit={handleSubmit} >
        <Stack spacing={1} sx={{ maxWidth: 500, mx: 'auto' }}>


          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>

              <TextField
                error={(!firstName && helperText) as boolean}
                helperText={helperText && (firstName ? '' : 'Escribe tu nombre')}
                className='slide-right'
                label="Nombre"
                color='secondary'
                variant='outlined'
                fullWidth
                sx={styleInput}
                value={firstName}
                onChange={(event) => { setHelperText(false); setFirstName(event.target.value) }}
              />
            </Grid>
            <Grid item xs={12} md={6}>

              <TextField
                error={(!lastName && helperText) as boolean}
                helperText={helperText && (lastName ? '' : 'Escribe tu apellido')}
                className='slide-left'
                label="Apellido"
                color='secondary'
                variant='outlined'
                fullWidth
                sx={styleInput}
                value={lastName}
                onChange={(event) => { setHelperText(false); setLastName(event.target.value) }}
              />
            </Grid>
          </Grid>
          <TextField
            error={(!email && helperText) as boolean}
            helperText={helperText && (email ? '' : 'Escribe tu correo electrónico')}
            className='slide-right'
            type='email'
            color='secondary'
            variant='outlined'
            label="Correo electrónico"
            fullWidth
            sx={styleInput}
            value={email}
            onChange={(event) => { setHelperText(false); setEmail(event.target.value) }}
          />
          <TextField
            error={(!instagramUsername && helperText) as boolean}
            helperText={helperText && (instagramUsername ? '' : 'Completa este campo')}
            className='slide-left'
            label="Usuario de Instagram"
            variant='outlined'
            color='secondary'
            fullWidth
            sx={styleInput}
            value={instagramUsername}
            onChange={(event) => { setHelperText(false); setInstagramUsername(event.target.value) }}
          />
          {
            receipt && <div>
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
                    className='slide-right'
                    variant="contained"
                    component="div"
                    startIcon={<CloudUploadIcon />}
                    color={file || !helperText ? 'primary' : 'error'}
                  >
                    Subir Comprobante
                  </Button>
                  <FormHelperText error>{helperText && 'Suba el comprobante.'}</FormHelperText>
                </label>
              </div>
            </div>
          }

          {file && <p>Archivo seleccionado: {file.name}</p>}
          {<Button
            className='slide-left'
            type="submit"
            variant="contained"
            color='secondary'
            sx={{ my: 10 }}>
            Enviar
          </Button> }
          <Snackbar open={open} onClose={handleClose} autoHideDuration={9000}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Sus Rifas han sido reservadas!.
            </Alert>
          </Snackbar>
        </Stack>
      </form>
    
  );
}