import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Carrera de F??sica" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Carrera de Matem??tica" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Carrera de Inform??tica" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Typography variant="h1" component="h2" gutterBottom>
        Carrera de F??sica
      </Typography>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <img src='https://espaciociencia.com//wp-content/uploads/quimica-fisica-que-son-diferencias-similitudes-istock-600x390.jpg'/>
      </div>
      <br></br>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Misi??n</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          La carrera de F??sica tiene como misi??n propia y fundamental la de formar y entrenar recursos humanos de alto nivel, especializados en la investigaci??n cient??fica, la docencia y la aplicaci??n de conocimientos en todas las ??reas de la F??sica; crear y difundir conocimiento en f??sica o relacionado con la f??sica, formando y contribuyendo para la formaci??n de profesionales cr??ticos, independientes y capacitados tanto a nivel de pregrado como de posgrado. Estos profesionales deber??n ser capaces de contribuir al desarrollo cient??fico y tecnol??gico, y como consecuencia, al mejoramiento de las condiciones sociales y econ??micas del Pa??s.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Visi??n</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          La visi??n de la Carrera es la de constituirse en un centro de excelencia en F??sica con capacidades plenas para entrar competitivamente en el ??mbito cient??fico a nivel regional y mundial.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography variant="h1" component="h2" gutterBottom>
        Carrera de Matem??tica
      </Typography>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <img src='https://ichef.bbci.co.uk/news/640/cpsprodpb/164EE/production/_109347319_gettyimages-611195980.jpg'/>
      </div>
      <br></br>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Misi??n</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          La Carrera de Matem??tica, como parte del Sistema Universitario p??blico boliviano, es una instituci??n de generaci??n, transmisi??n y aplicaci??n de conocimientos matem??ticos, orientada hacia la investigaci??n, la formaci??n de profesionales calificados y al fortalecimiento de la ense??anza de la matem??tica a todo nivel.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Visi??n</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Ser la Unidad nacional modelo de eficiencia, desarrollo e impacto social en Matem??tica que brinda formaci??n s??lida en pregrado y postgrado. Apoyar y contribuir al desarrollo cient??fico y tecnol??gico de Bolivia a trav??s de la resoluci??n de problemas que competen a sus ??reas de inter??s.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Typography variant="h1" component="h2" gutterBottom>
        Carrera de Inform??tica
      </Typography>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <img src='https://conceptodefinicion.de/wp-content/uploads/2019/08/Inform%C3%A1tica-.jpg'/>
      </div>
      <br></br>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Misi??n</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Formar profesionales id??neos con calidad humana, ??tica, valores, excelencia cient??fica, compromiso social, capacidad cr??tica y creativa para potenciar el desarrollo de la ciencia y la tecnolog??a en el ??rea de la Inform??tica en concordancia con los requerimientos de la sociedad y sus instituciones, desempe????ndose con ??xito en el ??mbito regional, nacional e internacional.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Visi??n</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Ser la unidad acad??mica l??der a nivel nacional y un referente de alto nivel en la formaci??n de profesionales del ??rea de la Inform??tica, que aporta a la regi??n y el pa??s no solo con sus graduados sino tambi??n con proyectos de investigaci??n y extensi??n de alto impacto relacionados con ciencia y tecnolog??a.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </TabPanel>
    </div>
  );
}