/** @jsx jsx */
import { jsx } from '@emotion/core'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  divider: {
    width: 50,
    backgroundColor: "black",
    marginTop: 10
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
        <Typography variant="h5">
          {title}
        </Typography>
      </Grid>
      <Grid>
        <Divider className={classes.divider} variant="middle" />
      </Grid>
      <Grid md={12}>
          <List>
            {skills.map(skill => {
              return (
                <ListItem dense={true}>
                  <ListItemText
                    css={{textAlign: "center"}}
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