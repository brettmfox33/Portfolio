/** @jsx jsx */
import { jsx } from '@emotion/core'
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import data from "../../data.json"
import Project from "./Project"

const useStyles = makeStyles({
  GridContainer: {
    marginBottom: 200
  },
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
      {
        data.projects.map((projectData, index) => {
          let side = "left"
          if (index % 2 !== 0) {
            side = "right"
          }

          return <Project key={index} projectData={projectData} side={side} />
        })
      }
    </Grid>
  )
}