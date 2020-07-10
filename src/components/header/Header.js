/** @jsx jsx */
import { jsx } from '@emotion/core'
import colors from "../../styles/colors";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    height: "90vh",
    background: "linear-gradient(180deg, rgba(103,152,149,1) 57%, rgba(74,124,121,1) 100%)"
  },
  content: {
    marginTop: -200,
    color: "white",
    fontSize: 40,
    textAlign: "center"
  },
  avatarImage: {
    maxWidth: 200
  },
  bottomText: {
    marginBottom: 30,
    marginTop: 20
  },
  underText: {
    fontSize: 25,
    marginTop: 70,
    paddingLeft: 450,
    paddingRight: 450,
  },
  upperText: {
    fontSize: 50,
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
        {/* TOP TEXT */}
        <Grid className={classes.upperText}>
          Hello, Brett here!
        </Grid>
        {/* BOTTOM TEXT */}
        <Grid
          className={classes.bottomText}
        >
            I'm a full stack developer specializing in React and Django.
        </Grid>

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

        <Grid className={classes.underText}>
           I've been in development for 5 years with the University of Notre Dame. I like working with complicated data on the back-end, including normalizing inefficient databases.
           Most recently I have discovered a passion for front-end development and web design. I highly value customer engagement and I love being able to bring a client's idea to life.
        </Grid>
      </Grid>
    </Grid>
  )
}