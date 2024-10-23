import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import theme from '../src/lib/theme';
import { ThemeProvider } from '@mui/material/styles';
import { CookiesProvider, useCookies } from 'react-cookie';
import CookieBanner from './components/Layout/CookieBanner';
import { useState } from 'react';

function App() {
  // const [cookies, setCookies] = useCookies(['user']);
  // const handleLogin=(user)=>{
  //   console.log(user)
  //   setCookies('user', user, {path: '/'})
  // }
  const [open, setOpen] = useState(true);

  const handleCookieClose = () => {
    setOpen(false);
  };


  const handleCookieAccepted = () => {
    document.cookie = 'cookiePolicy=accepted;';
    setOpen(false);
  };

  const handleCookieDeclined = () => {
    setOpen(false);
    document.cookie = "cookiePolicy=declined";
  }

  return (
    <CookiesProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Layout/>
      <CookieBanner open={open} handleCookieAccepted={handleCookieAccepted}
        handleCookieClose={handleCookieClose} handleCookieDeclined={handleCookieDeclined} />
        {/* {cookies.user ? <Layout user={cookies.user}/> : <CookieBanner onLogin={handleLogin}/>} */}
      </BrowserRouter>
    </ThemeProvider>
  </CookiesProvider>
  );
}

export default App;
