/** @jsx jsx */
import { jsx } from '@emotion/core'
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";
import PresqtProject from "./PresqtProject";
import BlancoProject from "./BlancoProject";
import SRPeruProject from "./SRPeruProject";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  GridContainer: {},
  ProjectGridContainer: {
    height: 500,
    width: "100%",
    border: `1px solid ${colors.main}`
  },
  divider: {
    width: 50,
    backgroundColor: "black",
    marginTop: 10,
    marginBottom: 20
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
      <Typography variant="h4">
        Projects
      </Typography>
      <Divider className={classes.divider} variant="middle" />
      <PresqtProject />
      <BlancoProject />
      <SRPeruProject />
    </Grid>
  )
}