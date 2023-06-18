import React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

interface FooterProps {
  companyName: string;
  year: number;
}

const footerStyle: React.CSSProperties = {
  backgroundColor: '#fbae09',
  color: '#000',
  padding: '16px',
  textAlign: 'center',
};

const socialIconsStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '8px',
};

const iconStyle: React.CSSProperties = {
  color: '#729',
  margin: '0 4px',
};

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (
    <footer style={footerStyle}>
      <div style={socialIconsStyle}>
        <IconButton
          style={iconStyle}
          component="a"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          style={iconStyle}
          component="a"
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          style={iconStyle}
          component="a"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </IconButton>
      </div>
      <Typography variant="body1" component="p">
        &copy; {year} {companyName}. Todos los derechos reservados.
      </Typography>
      <Typography variant="body2" component="p">
        Diseñado y desarrollado por <a href="https://www.example.com">Inca Bros</a>.
      </Typography>
    </footer>
  );
};

export default Footer;
