/** @jsx jsx */
import { jsx } from '@emotion/core'
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";
import PresqtProject from "./PresqtProject";
import BlancoProject from "./BlancoProject";
import SRPeruProject from "./SRPeruProject";

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
      <PresqtProject />
      <BlancoProject />
      <SRPeruProject />
    </Grid>
  )
}