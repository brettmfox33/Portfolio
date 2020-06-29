/** @jsx jsx */
import { jsx } from '@emotion/core'
import colors from "../../styles/colors";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    height: "90vh",
    backgroundColor: colors.main
  },
  content: {
    marginTop: -100,
    color: "white",
    fontSize: 40,
    textAlign: "center"
  },
  topText: {
    marginTop: 30
  },
  avatarImage: {
    maxWidth: 200
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <Grid 
      container
      className={classes.header}
    >
      {/* CONTENT CONTAINER */}
      <Grid 
        container
        direction="column"
        alignContent="center"
        justify="center"
        className={classes.content}
      >
        {/* IMAGE */}
        <Grid
          container
          direction="row"
          alignContent="center"
          justify="center"
        >
          <img
            draggable={false}
            alt="Avatar"
            src={require(`../../images/avatar.png`)}
            className={classes.avatarImage}
          />
        </Grid>
        
        {/* TOP TEXT */}
        <Grid className={classes.topText}>
            Hello, Brett here!
        </Grid>

        {/* BOTTOM TEXT */}
        <Grid>
            I'm a full stack developer specializing in React and Django.
        </Grid>
      </Grid>
    </Grid>
  )
}