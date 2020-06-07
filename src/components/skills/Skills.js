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

const useStyles = makeStyles({
  cardContainer: {
    marginTop: -170,
    marginBottom: 350,
    justifyContent: "center"
  },
  cardTop: {
    justifyContent: "center"
  },
  cardBottom: {
    border: `1px solid ${colors.main}`,
    borderRadius: "0px 0px 20px 20px"
  },
  cardLeft: {
    border: `1px solid ${colors.main}`,
    borderRadius: "20px 0px 0px 0px"
  },
  cardRight: {
    border: `1px solid ${colors.main}`,
    borderRadius: "0px 20px 0px 0px"
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

const backEndSkills = [
  "Django",
  "Django Rest Framework",
  "PostgreSQL",
  "Database Normalization",
  "ETL Scripting",
  "Sphinx",
  "Read The Docs"
];

const frontEndSkills = [
  "React",
  "Redux",
  "Redux Saga",
  "Socket.io",
  "Express",
  "Material-UI",
  "HTML5 Drag and Drop API"
];

const nonTechnicalSkills = [
  "Scrum",
  "Product Owner",
  "Documentation",
  "Pair Programming",
  "High Client Engagement"
];

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
        <Grid md={2}>
          <Card className={classes.cardLeft} variant="outlined">
            <CardContent>
              <SkillsList skills={backEndSkills} title="Back-End"/>
            </CardContent>
          </Card>
        </Grid>

        {/* RIGHT CARD*/}
        <Grid md={2}>
          <Card className={classes.cardRight} variant="outlined">
            <CardContent>
              <SkillsList skills={frontEndSkills} title="Front-End"/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* BOTTOM CARD*/}
        <Grid md={4}>
          <Card className={classes.cardBottom} variant="outlined">
            <CardContent>
              <SkillsList skills={nonTechnicalSkills} title="Non-Technical"/>
            </CardContent>
          </Card>
        </Grid>
    </Grid>
  )
}