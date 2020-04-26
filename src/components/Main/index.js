import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from "@material-ui/core"
import React, { Component } from "react"

import { CopyToClipboard } from "react-copy-to-clipboard"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import GTranslateIcon from "@material-ui/icons/GTranslate"
import queryString from "query-string"

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputText: "",
      outputText: "",

      // properties
      autoClear: false,
      breakLineAfterEverySentence: false,
    }
  }

  clearText = () => {
    this.setState({ inputText: "", outputText: "" })
  }

  formatText = (inputText) => {
    let plainText = inputText.replace(/\n/g, " ")

    if (!this.state.breakLineAfterEverySentence) {
      return plainText
    }

    let lineBrokenText = plainText.replace(/\.\s/g, ".\n\n")

    return lineBrokenText
  }

  handleTranslateWithGoogleTranslate = () => {
    const params = {
      sl: "auto",
      text: this.state.outputText,
    }

    window.open(
      `https://translate.google.com/?${queryString.stringify(params)}`
    )

    if (this.state.autoClear) {
      this.clearText()
    }
  }

  handleSwitchChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.checked,
      },
      () => {
        this.setState({
          outputText: this.formatText(this.state.inputText),
        })
      }
    )
  }

  handleTextChange = (e) => {
    this.setState({
      inputText: e.target.value,
      outputText: this.formatText(e.target.value),
    })
  }

  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.autoClear}
                  name="autoClear"
                  onChange={this.handleSwitchChange}
                />
              }
              label="auto clear"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.breakLineAfterEverySentence}
                  name="breakLineAfterEverySentence"
                  onChange={this.handleSwitchChange}
                />
              }
              label="break line after every sentence"
            />
          </Grid>
        </Grid>

        <Box my={2}>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <TextField
                autoFocus
                fullWidth
                label="Input text copied from PDF"
                multiline
                onChange={this.handleTextChange}
                rows={20}
                variant="outlined"
                value={this.state.inputText}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                multiline
                rows={20}
                variant="outlined"
                value={this.state.outputText}
              />
            </Grid>
          </Grid>
        </Box>

        <Grid container justify="center" spacing={2}>
          <Grid item>
            <CopyToClipboard text={this.state.outputText}>
              <Button
                color="primary"
                onClick={() => {
                  this.state.autoClear && this.clearText()
                }}
                startIcon={<FileCopyIcon />}
                variant="contained"
              >
                COPY TO CLIPBOARD
              </Button>
            </CopyToClipboard>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              onClick={this.handleTranslateWithGoogleTranslate}
              startIcon={<GTranslateIcon />}
              variant="contained"
            >
              TRANSLATE WITH GOOGLE TRANSLATE
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Main