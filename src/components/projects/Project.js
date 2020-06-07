/** @jsx jsx */
import Grid from "@material-ui/core/Grid";
import {jsx} from "@emotion/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  gridContainer: {},
  projectGridContainer: {
    height: 1000,
    width: "100%",
  },
  projectImage: {
    height: '55%',
    paddingTop: 50,

  },
  projectDetails: {
    height: 150,
    width: 600,
    paddingTop: 20,
    textAlign: "center"
  },
  button: {
    width: 150,
    margin: 20
  },
  typographyHeader: {
    color: "white"
  },
  typographyContent: {
    color: "white"
  }
});

export default function Project({projectName, color, title, text, link}) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.projectGridContainer}
      justify="flex-start"
      alignItems="center"
      direction="column"
      css={{backgroundColor: color}}
    >
      <img
        className={classes.projectImage}
        draggable={false}
        alt={projectName}
        src={require(`../../images/${projectName}_browser.png`)}
      />
      <Grid>
        <Typography className={classes.typographyHeader} variant="h4">
          {title}
        </Typography>
      </Grid>

      <Grid
        container
        justify="center"
        direction="row"
        alignItems="flex-start"
        className={classes.projectDetails}
      >
        <Typography className={classes.typographyHeader} variant="h6">
          {text}
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Button target="_blank" href={link} className={classes.button} variant="contained" color="primary">
          Visit Site
        </Button>
        <Button className={classes.button} variant="contained" color="primary">
          More Details
        </Button>
      </Grid>
    </Grid>
  )
}