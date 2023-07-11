import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './shared/styles/theme/defaultTheme'
import { GlobalStyles } from './shared/styles/global'
import { Router } from './shared/router'
import { BrowserRouter } from 'react-router-dom'
import { BlogProvider } from './shared/Context'

function App() {
  return (
    <>
      {' '}
      <ThemeProvider theme={defaultTheme}>
        <BlogProvider>
          <BrowserRouter>
            <GlobalStyles />
            <Router />
          </BrowserRouter>
        </BlogProvider>
      </ThemeProvider>
    </>
  )
}

export default App
