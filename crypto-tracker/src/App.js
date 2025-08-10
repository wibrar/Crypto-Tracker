import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: '#14161a',
    color: 'white',
    minHeight: '100vh',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
          <Route path="/" element={<Homepage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
