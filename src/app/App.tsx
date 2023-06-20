import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './shared/styles/theme/defaultTheme'
import { GlobalStyles } from './shared/styles/global'
import { Router } from './shared/router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
