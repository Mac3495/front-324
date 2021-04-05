import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFirebaseApp, useUser } from 'reactfire';
import { useHistory } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paperM: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userDB, setUserDB] = useState([]);

  const firebase = useFirebaseApp();
  const user = useUser(); 

  const login = async () => {
    console.log(email, password);
    try {
        var res = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(res);
        getUserData(user.data.uid);
        history.push('/profile', userDB );
        /*this.props.history.push({
            pathname: '/profile',
            userDB: userDB
        })*/
        console.log('ULTIMO');
    } catch (error) {
        handleOpen();
        if(error['code'] == 'auth/user-not-found'){
            console.log('Usuario no existe');
        } else {
            console.log('Error en login');
        }
    }
  }

  const getUserData = async (id) => {
    const data = await fetch('http://localhost:3050/users/' + id);
    var res = await data.json();
    console.log(res);
    setUserDB(res);
    //console.log('USERDB ' + userDB['0']['name']);
  }

  const history = useHistory();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={ (ev) => setEmail(ev.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            onChange={ (ev) => setPassword(ev.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={login}
          >
            Iniciar Sesión
          </Button>
        </form>
      </div>
      <Box mt={8}>
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paperM}>
            <h2 id="transition-modal-title">Error al hacer login</h2>
            <p id="transition-modal-description">Intente otra vez!</p>
          </div>
        </Fade>
      </Modal>
    </Container>
  );
}