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
  title: {
    color: colors.main
  },
  divider: {
    width: 50,
    backgroundColor: colors.main,
    marginTop: 10
  },
  listText: {
    fontSize: 20,
    textAlign: "center"
  }
});

export default function SkillsList({skills, title}) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid>
        <Typography className={classes.title} variant="h5">
          {title}
        </Typography>
      </Grid>
      <Grid>
        <Divider className={classes.divider} variant="middle" />
      </Grid>
      <Grid item md={12}>
          <List>
            {skills.map(skill => {
              return (
                <ListItem key={skill} dense={true}>
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