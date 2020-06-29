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

export default function BreakTextTwo() {
    const classes = useStyles();

    return(
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.detailsContainer}
        >

          {/* TOP DIVIDER */}
          <Divider className={classes.topDivider} variant="middle" />

          {/* TEXT */}
          <Grid 
            className={classes.text}
          >
            I am seeking freelance opportunities within any of my tech stacks.
            Small businesses and non-profits to the front of the line! 
          </Grid>

          {/* BOTTOM DIVIDER */}
          <Divider className={classes.bottomDivider} variant="middle" />

          {/* CONTACT LABEL */}
          <Typography className={classes.projectsHeader} variant="h4">
              Contact Me
          </Typography>
          <Grid>
            <Divider className={classes.projectDivider} variant="middle" />
          </Grid>

        </Grid>
    )
}