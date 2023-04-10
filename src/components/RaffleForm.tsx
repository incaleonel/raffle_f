import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { pink, orange } from '@mui/material/colors';
import { Button, TextField, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


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
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes hacer lo que necesites con los datos del formulario
    console.log({ firstName, lastName, email, instagramUsername, file });
  };

  return (
    <ThemeProvider theme={theme}>

    <form onSubmit={handleSubmit}>
      <Stack spacing={1}>
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth 
          sx={{ bgcolor: 'rgba(255,255,255,0.3)', borderRadius: '4px',"& label": {
            color: "white"
          },
          "& input": {
            color: "white"
          } }}
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <TextField
          label="Apellido"
          variant="outlined"
          fullWidth
          sx={{ bgcolor: 'rgba(255,255,255,0.3)', borderRadius: '4px',"& label": {
            color: "white"
          },
          "& input": {
            color: "white"
          } }}
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <TextField
        type='email'
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          sx={{ bgcolor: 'rgba(255,255,255,0.3)', borderRadius: '4px',"& label": {
            color: "white"
          },
          "& input": {
            color: "white"
          } }}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Usuario de Instagram"
          variant="outlined"
          fullWidth
          sx={{ bgcolor: 'rgba(255,255,255,0.3)', borderRadius: '4px',"& label": {
            color: "white"
          },
          "& input": {
            color: "white"
          } }}
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
        <label htmlFor="file-upload">
          <Button
            variant="contained"
            component="div"
            startIcon={<CloudUploadIcon />}
            sx={{ bgcolor: 'rgba(255,255,255,0.3)', borderRadius: '4px', borderColor: 'green' }}
          >
            Subir archivo
          </Button>
        </label>
        {file && <p>Archivo seleccionado: {file.name}</p>}
        <Button type="submit" variant="contained" >
          Enviar
        </Button>
      </Stack>
    </form>
    </ThemeProvider>
  );
}