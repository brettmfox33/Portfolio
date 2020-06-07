/** @jsx jsx */
import { jsx } from '@emotion/core'
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  projectPaper: {
    height: 250,
    border: `1px solid ${colors.main}`,
    borderRadius: 30,
    margin: 30
  },
  divider: {
    width: 50,
    backgroundColor: "black",
    marginTop: 10
  }
});

export default function Project() {
  const classes = useStyles();

  return(
    <Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid>
          <Typography variant="h4">
            Projects
          </Typography>
        </Grid>
        <Grid>
          <Divider className={classes.divider} variant="middle" />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid  md={3}>
          <Paper variant="outlined" className={classes.projectPaper}>

          </Paper>
        </Grid>

        <Grid  md={3}>
          <Paper variant="outlined" className={classes.projectPaper}>

          </Paper>
        </Grid>

        <Grid  md={3}>
          <Paper variant="outlined" className={classes.projectPaper}>

          </Paper>
          </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid  md={3}>
          <Paper variant="outlined" className={classes.projectPaper}>

          </Paper>
        </Grid>

        <Grid  md={3}>
          <Paper variant="outlined" className={classes.projectPaper}>

          </Paper>
        </Grid>

        <Grid  md={3}>
          <Paper variant="outlined" className={classes.projectPaper}>

          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}