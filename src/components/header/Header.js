/** @jsx jsx */
import { jsx } from '@emotion/core'
import colors from "../../styles/colors";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  header: {
    height: "90vh",
    backgroundColor: colors.main
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.header}
    >
      <img
        draggable={false}
        alt="Placeholder Avatar"
        src={require(`../../images/placeholder_avatar.png`)}
        css={{marginTop: -100}}
      />
      <Grid>
        <Typography variant="h3" css={{textAlign: "center", color: 'white', marginTop: 20}}>
          Welcome! My name's Brett.
          <br/>
          I'm a full-stack developer specializing in React and Django.
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="h5" css={{width: 800, textAlign: "center", color: 'white', marginTop: 20}}>
          I love customer engagement and making user friendly applications that help ease day to day work.
          I enjoy working with complicated data and meaningful projects.
        </Typography>
      </Grid>

    </Grid>
  )
}