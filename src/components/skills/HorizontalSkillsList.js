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
    textAlign: "center",
    fontFamily: 'B612'
  },
  listTextRoot: {
    marginTop: 0,
    marginBottom: 0
  },
  subHeaders: {
    color: colors.main,
    fontSize: 20,
    marginTop: 10
  },
  root: {
    paddingTop: 0,
    paddingBottom: 0
  },
  values: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    paddingLeft: 100,
    paddingRight: 100
  }
});

export default function HorizontalSkillsList({data, title, icon}) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      
      {/* ICON */}
      <Grid>
        {icon}
      </Grid>

      {/* TITLE */}
      <Grid
        className={classes.title}
      >
        <Typography variant="h5">
          {title}
        </Typography>
      </Grid>
      <Grid className={classes.values}>
        People ask me how I can like the back end and I'm like ook at me, I'm a back-end boi and I love working on the back-end.
      </Grid>
      <Grid className={classes.subHeaders} >
        Specializations
      </Grid>
      <Divider className={classes.divider} variant="middle" />

      <Grid item md={12}>
          <List>
            {data.specializations.map(skill => {
              return (
                <ListItem 
                  className={classes.root}
                  key={skill}
                >
                  <ListItemText
                    classes={{ root: classes.listTextRoot, primary: classes.listText }}
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