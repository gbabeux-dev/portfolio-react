import { ThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
function App() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        "Red Hat Display",
        "sans-serif"
      ].join(",")
    },
    //see https://github.com/mui/material-ui/issues/10980
    palette: {
      text: {
        primary: "#ffffff",
        secondary: "#00000"
      }
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </ThemeProvider>
    </>
  )
}

export default App
