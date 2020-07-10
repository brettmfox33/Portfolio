/** @jsx jsx */
import { jsx } from '@emotion/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";
import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  footer: {
    height: 200,
    background: "linear-gradient(0deg, rgba(103,152,149,1) 57%, rgba(74,124,121,1) 100%)",
    marginTop: 50
  },
  avatarImage: {
    width: 150,
    marginRight: 250
  },
  listText: {
    color: "white"
  },
  listContainer: {
    marginLeft: 250
  }
});
export default function Footer() {
  const classes = useStyles();

  return(
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.footer}
    >

      {/* LIST */}
      <Grid
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.listContainer}
      >
        <List dense>
          <ListItem className={classes.listText}>
            <ListItemText>
              About
            </ListItemText>
          </ListItem>
          <ListItem className={classes.listText}>
            <ListItemText>
              Skills
            </ListItemText>
          </ListItem>
          <ListItem className={classes.listText}>
            <ListItemText>
              Project
            </ListItemText>
          </ListItem>
          <ListItem className={classes.listText}>
            <ListItemText>
              Contact
            </ListItemText>
          </ListItem>
        </List>
      </Grid>

      {/* LINKS */}
      <Grid
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid>
          <GitHubIcon />
          <GitHubIcon />
          <LinkedInIcon />
        </Grid>
        <Grid>
          Developed lovingly by me using
        </Grid>
        <Grid>
          <GitHubIcon />
          <GitHubIcon />
          <LinkedInIcon />
          <LinkedInIcon />
        </Grid>
        <Grid>
          2020
        </Grid>
      </Grid>

      {/* AVATAR */}
      <img
        draggable={false}
        alt="Avatar"
        src={require(`../../images/avatar.png`)}
        className={classes.avatarImage}
      />
    </Grid>
  )
}