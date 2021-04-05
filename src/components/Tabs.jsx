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
          <LinkTab label="Carrera de Física" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Carrera de Matemática" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Carrera de Informática" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Typography variant="h1" component="h2" gutterBottom>
        Carrera de Física
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
          <Typography className={classes.heading}>Misión</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          La carrera de Física tiene como misión propia y fundamental la de formar y entrenar recursos humanos de alto nivel, especializados en la investigación científica, la docencia y la aplicación de conocimientos en todas las áreas de la Física; crear y difundir conocimiento en física o relacionado con la física, formando y contribuyendo para la formación de profesionales críticos, independientes y capacitados tanto a nivel de pregrado como de posgrado. Estos profesionales deberán ser capaces de contribuir al desarrollo científico y tecnológico, y como consecuencia, al mejoramiento de las condiciones sociales y económicas del País.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Visión</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          La visión de la Carrera es la de constituirse en un centro de excelencia en Física con capacidades plenas para entrar competitivamente en el ámbito científico a nivel regional y mundial.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography variant="h1" component="h2" gutterBottom>
        Carrera de Matemática
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
          <Typography className={classes.heading}>Misión</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          La Carrera de Matemática, como parte del Sistema Universitario público boliviano, es una institución de generación, transmisión y aplicación de conocimientos matemáticos, orientada hacia la investigación, la formación de profesionales calificados y al fortalecimiento de la enseñanza de la matemática a todo nivel.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Visión</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Ser la Unidad nacional modelo de eficiencia, desarrollo e impacto social en Matemática que brinda formación sólida en pregrado y postgrado. Apoyar y contribuir al desarrollo científico y tecnológico de Bolivia a través de la resolución de problemas que competen a sus áreas de interés.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Typography variant="h1" component="h2" gutterBottom>
        Carrera de Informática
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
          <Typography className={classes.heading}>Misión</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Formar profesionales idóneos con calidad humana, ética, valores, excelencia científica, compromiso social, capacidad crítica y creativa para potenciar el desarrollo de la ciencia y la tecnología en el área de la Informática en concordancia con los requerimientos de la sociedad y sus instituciones, desempeñándose con éxito en el ámbito regional, nacional e internacional.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Visión</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Ser la unidad académica líder a nivel nacional y un referente de alto nivel en la formación de profesionales del área de la Informática, que aporta a la región y el país no solo con sus graduados sino también con proyectos de investigación y extensión de alto impacto relacionados con ciencia y tecnología.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </TabPanel>
    </div>
  );
}