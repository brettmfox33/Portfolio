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

const useStyles = makeStyles({
  divider: {
    width: 50,
    backgroundColor: colors.main,
    marginTop: 10
  },
  listText: {
    textAlign: "center"
  },
  subHeaders: {
    color: colors.main,
    fontSize: 20,
    marginTop: 10
  },
  root: {
    paddingTop: 1,
    paddingBottom: 1
  }
});

export default function SkillsList({data, title, icon}) {
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
        <Typography variant="h5">
          {title}
        </Typography>
      </Grid>

      {/* ICON */}
      <Grid>
        {icon}
      </Grid>

      {/* DEV TOOLS */}
      <Grid className={classes.subHeaders} >
        Dev Tools
      </Grid>
      <Divider className={classes.divider} variant="middle" />
      <Grid item md={12}>
          <List>
            {data.devTools.map(skill => {
              return (
                <ListItem 
                  className={classes.root} 
                  key={skill}
                >
                  <ListItemText
                    classes={{ primary: classes.listText }}
                    primary={skill}
                  />
                </ListItem>
              )
            })}
          </List>
      </Grid>

      {/* CONCEPTS */}
      <Grid className={classes.subHeaders} >
        Concepts
      </Grid>
      <Divider className={classes.divider} variant="middle" />
      <Grid item md={12}>
          <List>
            {data.concepts.map(skill => {
              return (
                <ListItem 
                  className={classes.root}
                  key={skill}
                >
                  <ListItemText
                    classes={{ primary: classes.listText }}
                    primary={skill}
                  />
                </ListItem>
              )
            })}
          </List>
      </Grid>
    </Grid>
  )
}