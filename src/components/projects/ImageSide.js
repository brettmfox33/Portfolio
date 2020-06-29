/** @jsx jsx */
import Grid from "@material-ui/core/Grid";
import {jsx} from "@emotion/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

export default function ImageSide({projectData}) {
  const useStyles = makeStyles({
    projectImage: {
      marginLeft: 40
    },

  });
  const classes = useStyles();
  
  return (<Grid
    md={6}
    container
    direction="row"
    justify="center"
    alignItems="center"
  >
      <img
        draggable={false}
        alt="PresQT"
        src={require(`../../images/${projectData.image}`)}
        className={classes.projectImage}
      />
  </Grid>)
}