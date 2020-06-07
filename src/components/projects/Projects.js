/** @jsx jsx */
import { jsx } from '@emotion/core'
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";
import Project from "./Project";

const useStyles = makeStyles({
  GridContainer: {},
  ProjectGridContainer: {
    height: 500,
    width: "100%",
    border: `1px solid ${colors.main}`
  }
});

export default function Projects() {
  const classes = useStyles();

  return(
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.GridContainer}
    >
      <Project
        projectName="presqt"
        color={colors.presqtOrange}
        title="PresQT"
        text="PresQT (Preservation Quality Tool) is an open-source tool with RESTful services to improve Preservation and Re-use of Research Data and Software."
        link="https://presqt-qa.crc.nd.edu/ui/"
      />
      <Project
        projectName="blanco"
        color={colors.blancoPurple}
        title="Blanco"
        text="Blanco is a kickass game I made that is basically Azul. Ok, it IS Azul."
        link="https://www.blancogame.com"
      />
    </Grid>
  )
}