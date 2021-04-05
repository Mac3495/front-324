import { withStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router-dom';
import { useFirebaseApp, useUser } from 'reactfire';
import React, { useState, useEffect } from 'react';

import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { CirclePicker } from 'react-color';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  table: {
    minWidth: 700,
    margin_right: 150,
    margin_left: 80,
  },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

export default function HomePage() {

  const history = useHistory();

  const firebase = useFirebaseApp();
  const user = useUser(); 

  const logout = () => {
      firebase.auth().signOut();
      history.push('/')
  }

  const [userDB, setUserDB] = useState([]);
  const [notesDB, setNotesDB] = useState([]);
  const [allNotesDB, setAllNotesDB] = useState([]);
  const [rol, setRol] = useState(0);
  const [color, setColor] = useState(0);

  useEffect( async () => {
    await getUserData(user.data.uid);
    if(rol == 0){
      getUserNotes(user.data.uid);
    } else {
      getAllNotes();
    }
  }, []);

  const getUserData = async (id) => {
    const data = await fetch('http://localhost:3050/users/' + id);
    var res = await data.json();
    console.log(res);
    setUserDB(res);
    console.log(res[0]['rol'] + ' === ' + res[0]['color']);
    setRol(res[0]['rol']);
    setColor(res[0]['color']);
    //console.log('USERDB ' + userDB['0']['name']);
  }

  const getUserNotes = async (id) => {
    const data = await fetch('http://localhost:3050/notes/' + id);
    var res = await data.json();
    setNotesDB(res);
    //console.log('NOTESDB ' + notesDB[0]['sigla']);
  }

  const getAllNotes = async () => {
    const data = await fetch('http://localhost:3050/averages');
    var res = await data.json();
    setAllNotesDB(res);
    console.log('NOTESDB ' + res);
  }

  const updateColor = async () => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ color: color })
    };
    fetch('http://localhost:3050/update/' + user.data.uid, requestOptions)
        .then(response => response.json());
  }

  const classes = useStyles();

  const handleChangeComplete = (color) => {
      console.log(color['rgb']['b']);
      if(color['rgb']['b'] === 227){
        console.log('Azul');
        setColor(1);
      } else if(color['rgb']['b'] === 76){
        console.log('Rojo');
        setColor(2);
      } else {
        console.log('Verde');
        setColor(3);
      }
    //setColor();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={
          color == 0 
          ? {color: "#FFFFFF"}
          : color == 1 
          ? {backgroundColor: "#0693E3", color: "#FFFFFF"}
          : color == 2 
          ? {backgroundColor: "#EB144C", color: "#FFFFFF"}
          : {backgroundColor: "#00D084", color: "#FFFFFF"}
        }>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {user.data.email !== null ? user.data.email : 'please wait'}
          </Typography>
          <Button color="inherit" onClick={logout}>CERRAR SESION</Button>
        </Toolbar>
      </AppBar>
      <br></br>
      {rol == 0 ? 
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Materia</StyledTableCell>
              <StyledTableCell align="right">Nota 1</StyledTableCell>
              <StyledTableCell align="right">Nota 2&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Nota 3&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Total&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notesDB.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row['sigla']}
                </StyledTableCell>
                <StyledTableCell align="right">{row['nota1']}</StyledTableCell>
                <StyledTableCell align="right">{row['nota2']}</StyledTableCell>
                <StyledTableCell align="right">{row['nota3']}</StyledTableCell>
                <StyledTableCell align="right">{row['total']}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      : <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Materia</StyledTableCell>
            <StyledTableCell align="right">INF-111</StyledTableCell>
            <StyledTableCell align="right">INF-121&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allNotesDB.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row['city']}
              </StyledTableCell>
              <StyledTableCell align="right">{row['AVG(total)']}</StyledTableCell>
              <StyledTableCell align="right">{row['AVG(total)']}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      }
    <br></br>
    <CirclePicker colors={["#0693E3", "#EB144C", "#00D084"]} onChange={handleChangeComplete}/>
    <br></br>
    <Button variant="contained" color="primary" onClick={updateColor}>
        Guardar
    </Button>
    </div>
  );
}
