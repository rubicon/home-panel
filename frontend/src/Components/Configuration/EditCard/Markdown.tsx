import React, { ReactElement, Fragment } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { BaseProps } from "./Base";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(1),
  },
  heading: {
    marginTop: theme.spacing(2),
  },
  textField: {
    width: "calc(100% - 8px)",
    margin: 4,
  },
}));

function Markdown(props: BaseProps): ReactElement {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography
          className={classes.heading}
          variant="subtitle1"
          gutterBottom
        >
          Markdown Configuration
        </Typography>
        <Divider variant="fullWidth" />
      </Grid>
      <Grid
        className={classes.container}
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        alignContent="flex-end"
        item
        xs
      >
        <Grid item xs>
          <TextField
            className={classes.textField}
            InputLabelProps={{ shrink: true }}
            multiline
            label="Content"
            placeholder="- Markdown"
            value={props.card.content || ""}
            onChange={props.handleChange && props.handleChange("content")}
          />
        </Grid>
        <Grid item xs>
          <TextField
            className={classes.textField}
            InputLabelProps={{ shrink: true }}
            label="Height"
            placeholder="auto"
            value={props.card.height || "auto"}
            onChange={props.handleChange && props.handleChange("height")}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Markdown;
