import { Box, Container } from "@material-ui/core"

import Header from "../Header"
import Main from "../Main"
import React from "react"

function App() {
  return (
    <div>
      <Header />

      <Box mt={2}>
        <Container>
          <Main />
        </Container>
      </Box>
    </div>
  )
}

export default App
