/** @jsx jsx */
import { jsx } from '@emotion/core'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";
import {Fragment} from "react";
import GridList from "@material-ui/core/GridList";
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles({
  title: {
    color: "black"
  },
  subTitle: {
    color: colors.main,
    marginTop: 10
  },
  divider: {
    width: 100,
    backgroundColor: "black",
    marginTop: 10
  },
  subDivider: {
    width: 50,
    backgroundColor: colors.main,
    marginTop: 10
  },
  listText: {
    fontSize: 15,
    textAlign: "center"
  },
});

export default function SkillsList({skillsListOne, skillsListTwo, title, values, icon}) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      {/* TITLE */}
      <Grid>
        <Typography className={classes.title} variant="h5">{title}</Typography>
      </Grid>
      {/* TITLE DIVIDER */}
      {/*<Grid>*/}
      {/*  <Divider className={classes.divider} variant="middle" />*/}
      {/*</Grid>*/}
      <Grid>
        {icon}
      </Grid>
      {/* VALUES */}
      <Grid>
        <Typography className={classes.subTitle} variant="h6"> Values </Typography>
      </Grid>
      {/* VALUES DIVIDER*/}
      <Grid>
        <Divider className={classes.subDivider} variant="middle" />
      </Grid>
      {/* VALUES CONTENT */}
      <Grid css={{marginTop: 10, textAlign: "center", width: 400}}>
        {values}
      </Grid>
      {/* SUBTITLE 1 */}
      <Grid>
        <Typography className={classes.subTitle} variant="h6"> Dev Tools </Typography>
      </Grid>
      {/* SUBTITLE 1 DIVIDER*/}
      <Grid>
        <Divider className={classes.subDivider} variant="middle" />
      </Grid>
      {/* SKILLS LIST 1 */}
      <Grid item md={12}>
        <List>
          <GridList cols={2} cellHeight={30}>
            {skillsListOne.map(skill => {
              return (
                <ListItem key={skill} dense={true}>
                  <ListItemText
                    classes={{ primary: classes.listText }}
                    primary={skill}
                  />
                </ListItem>
              )
            })}
          </GridList>
        </List>
      </Grid>
      {
        skillsListTwo.length > 0
          ?
            <Fragment>
              {/* SUBTITLE 2 */}
              <Grid>
                <Typography className={classes.subTitle} variant="h6"> Concepts </Typography>
              </Grid>
              {/* SUBTITLE 2 DIVIDER*/}
              <Grid>
                <Divider className={classes.subDivider} variant="middle" />
              </Grid>
              {/* SKILLS LIST 2*/}
              <Grid item md={12}>
                <List>
                  <GridList cols={2} cellHeight={30}>
                  {skillsListTwo.map(skill => {
                    return (
                        <ListItem key={skill} dense={true}>
                          <ListItemText
                            classes={{ primary: classes.listText }}
                            primary={skill}
                          />
                        </ListItem>
                    )
                  })}
                  </GridList>
                </List>
              </Grid>
            </Fragment>
          : null
      }
    </Grid>
  )
}