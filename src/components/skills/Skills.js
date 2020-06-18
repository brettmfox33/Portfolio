/** @jsx jsx */
import { jsx } from '@emotion/core'
import Grid from "@material-ui/core/Grid";
import React from "react";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardContent from "@material-ui/core/CardContent";
import colors from "../../styles/colors";
import SkillsList from "./SkillsList";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import StorageIcon from '@material-ui/icons/Storage';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ComputerIcon from '@material-ui/icons/Computer';

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
    borderLeft: `2px solid ${colors.main}`,
    borderTop: `2px solid ${colors.main}`,
    borderRight: `2px solid ${colors.main}`,
    borderRadius: "20px 0px 0px 0px",
    height: 600
  },
  cardRight: {
    borderRight: `2px solid ${colors.main}`,
    borderTop: `2px solid ${colors.main}`,
    borderLeft: 0,
    borderRadius: "0px 20px 0px 0px",
    height: "100%"
  },
  cardBottom: {
    border: `2px solid ${colors.main}`,
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

const backEndSkillsListOne = [
  "Python",
  "Django",
  "Django Rest Framework",
  "PostgreSQL",
  "Sphinx",
];
const backEndSkillsListTwo = [
  "PyCharm",
  "ETL Scripting",
  "Unit/Integration Testing",
  "Database Normalization",
  "Multiprocessing",
  "ReadTheDocs",
  "API"
];
const backEndValues = 'I love da back-end! I have the best time with the back-end. People always ask me, ' +
  '"Brett, how do you have such a good time with the back-end.';

const frontEndSkillsOne = [
  "React",
  "React-Redux",
  "Redux-Saga",
  "Socket.io",
  "Emotion Core",
  "Express",
  "Material-UI",
  "HTML5 Drag and Drop",
  "Framer Motion",
  "Create-React-App",
  "Adobe XD"
];
const frontEndSkillsTwo = [];
const frontEndValues = 'I love da front-end! I have the best time with the front-end. People always ask me, ' +
  '"Brett, how do you have such a good time with the front-end.';

const nonTechnicalSkillsOne = [
  "AWS",
  "Github",
  "Git",
  "Jira"
];
const nonTechnicalSkillsTwo = [
  "Scrum",
  "Pair Programming",
  "High Client Engagement"
];
const nonTechnicalValues = 'I love da communication! I have the best time with the communication. People always ask me, ' +
  '"Brett, how do you have such a good time with the communication.';


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
              <SkillsList skillsListOne={backEndSkillsListOne}
                          skillsListTwo={backEndSkillsListTwo}
                          title="Back-End"
                          values={backEndValues}
                          icon={<ComputerIcon fontSize="large" />}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* RIGHT CARD*/}
        <Grid item md={3}>
          <Card className={classes.cardRight} variant="outlined">
            <CardContent>
              <SkillsList
                skillsListOne={frontEndSkillsOne}
                skillsListTwo={frontEndSkillsTwo}
                title="Front-End"
                values={frontEndValues}
                icon={<StorageIcon fontSize="large" />}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* BOTTOM CARD*/}
        <Grid item md={6}>
          <Card className={classes.cardBottom} variant="outlined">
            <CardContent>
              <SkillsList
                skillsListOne={nonTechnicalSkillsOne}
                skillsListTwo={nonTechnicalSkillsTwo}
                title="Non-Technical / Other"
                values={nonTechnicalValues}
                icon={<SupervisedUserCircleIcon fontSize="large" />}
              />
            </CardContent>
          </Card>
        </Grid>
    </Grid>
  )
}