import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  appBar: {
  },
}));
const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const darktheme = createTheme({
    palette: {
      primary: {  
        main: '#fff',
      },
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darktheme}>
        <AppBar color= 'transparent' position='static'>
          <Container>
            <Toolbar>
              <Typography onClick = {()=> history.push('/')} className={classes.title} variant='h6'>Crypto Tracker</Typography>
              <Select variant='outlined'
                style={{
                  width: 100,
                  height: 40,
                  marginRight: 15,
                }}>
                  <MenuItem value={'USD'} >USD</MenuItem>
                  <MenuItem value={'CAD'}>CAD</MenuItem>
                </Select>
            </Toolbar>
          </Container>
        </AppBar>
    </ThemeProvider>
  )
}

export default Header
