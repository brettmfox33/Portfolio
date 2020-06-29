/** @jsx jsx */
import { jsx } from '@emotion/core'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardContent from "@material-ui/core/CardContent";
import colors from "../../styles/colors";
import SkillsList from "./SkillsList";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import data from "../../data.json"
import ComputerIcon from '@material-ui/icons/Computer';
import StorageIcon from '@material-ui/icons/Storage';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

const useStyles = makeStyles({
  cardContainer: {
    marginTop: -170,
    marginBottom: 200,
    justifyContent: "center"
  },
  cardTop: {
    justifyContent: "center"
  },
  cardLeft: {
    borderLeft: `1.5px solid ${colors.main}`,
    borderTop: `1.5px solid ${colors.main}`,
    borderRight: `1.5px solid ${colors.main}`,
    borderRadius: "20px 0px 0px 0px",
    height: "100%"
  },
  cardRight: {
    borderRight: `1.5px solid ${colors.main}`,
    borderTop: `1.5px solid ${colors.main}`,
    borderLeft: 0,
    borderRadius: "0px 20px 0px 0px",
    height: "100%"
  },
  cardBottom: {
    border: `1.5px solid ${colors.main}`,
    borderRadius: "0px 0px 20px 20px",
  },
  divider: {
    width: 50,
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 20
  },
  typography: {
    color: "white"
  }
});

export default function Skills() {
  const classes = useStyles();

  return(
    <Grid container className={classes.cardContainer}>
      {/* SKILLS*/}
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid>
          <Typography className={classes.typography} variant="h4">
            Skills
          </Typography>
        </Grid>
        <Grid>
          <Divider className={classes.divider} variant="middle" />
        </Grid>
      </Grid>

      {/* TOP CARDS*/}
      <Grid container className={classes.cardTop} spacing={0}>
        {/* LEFT CARD*/}
        <Grid item md={3}>
          <Card className={classes.cardLeft} variant="outlined">
            <CardContent>
              <SkillsList icon={<StorageIcon />} data={data.skills.backEnd} title="Back-End"/>
            </CardContent>
          </Card>
        </Grid>

        {/* RIGHT CARD*/}
        <Grid item md={3}>
          <Card className={classes.cardRight} variant="outlined">
            <CardContent>
              <SkillsList icon={<ComputerIcon />} data={data.skills.frontEnd} title="Front-End"/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* BOTTOM CARD*/}
        <Grid item md={6}>
          <Card className={classes.cardBottom} variant="outlined">
            <CardContent>
              <SkillsList icon={<SupervisedUserCircleIcon />} data={data.skills.nonTechnical} title="Non-Technical / Other"/>
            </CardContent>
          </Card>
        </Grid>
    </Grid>
  )
}