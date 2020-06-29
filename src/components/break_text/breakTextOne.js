/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Grid, Typography } from '@material-ui/core';
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";

const useStyles = makeStyles({
    detailsContainer: {
    },
    topDivider: {
      width: '20%',
      backgroundColor: colors.main,
    },
    bottomDivider: {
      width: '20%',
      backgroundColor: colors.main,
      marginBottom: 200
    },
    projectDivider: {
      width: 50,
      backgroundColor: colors.main,
      marginTop: 10,
      marginBottom: 20
    },
    text: {
      fontSize: 30,
      color: colors.main,
      width: '48%',
      marginTop: 40,
      marginBottom: 40,
      textAlign: "center"
    },
    projectsHeader: {
      color: colors.main
    }
  });

export default function BreakTextOne() {
    const classes = useStyles();

    return(
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.detailsContainer}
        >
            <Divider className={classes.topDivider} variant="middle" />
            <Grid 
              className={classes.text}
            >
              I love customer engagement and making user friendly applications
              that help ease day to day work. I enjoy working with complicated 
              data and meaningful projects
            </Grid>
            <Divider className={classes.bottomDivider} variant="middle" />
          <Typography className={classes.projectsHeader} variant="h4">
              Projects
          </Typography>
          <Grid>
            <Divider className={classes.projectDivider} variant="middle" />
          </Grid>
        </Grid>
    )
}