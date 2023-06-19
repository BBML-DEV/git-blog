import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './shared/styles/theme/defaultTheme'
import { GlobalStyles } from './shared/styles/global'
import { Router } from './shared/router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  console.log(defaultTheme)

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
        </ThemeProvider>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
