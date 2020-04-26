import { AppBar, Button, Toolbar, Typography } from "@material-ui/core"

import FileCopyIcon from "@material-ui/icons/FileCopy"
import GitHubIcon from "@material-ui/icons/GitHub"
import IconButton from "@material-ui/core/IconButton"
import React from "react"

const githubUrl = "https://github.com/skmatz/copitter"

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" edge="start">
            <FileCopyIcon />
          </IconButton>
          <Typography variant="h6">Copitter</Typography>
          <div style={{ marginLeft: "auto" }}>
            <a href={githubUrl} target="_blank">
              <Button>
                <GitHubIcon />
              </Button>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
