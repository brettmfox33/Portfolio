/** @jsx jsx */
import Grid from "@material-ui/core/Grid";
import {jsx} from "@emotion/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";
import CodeIcon from '@material-ui/icons/Code';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  projectGridContainer: {
    height: 1000,
    width: "100%",
    backgroundColor: colors.presqtOrange
  },
  projectImage: {
    height: '58%',
  },
  listText: {
      fontSize: 20
  }
});

const techUsed = ['Django Rest Framework', 'React', 'React-Redux', 'Redux-Saga', 'Python Multiprocessing', 'Sphinx'];

export default function PresqtProject() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.projectGridContainer}
    >
      {/* LEFT SIDE */}
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        md={6}
      >
        <img
          className={classes.projectImage}
          draggable={false}
          alt="PresQT"
          src={require(`../../images/presqt_browser.png`)}
          css={{marginLeft: 40}}
        />
      </Grid>

      {/* RIGHT SIDE */}
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        md={6}
      >
        <Grid
          container
          md={12}
          direction="column"
          css={{height: '53%'}}
        >
          {/* DETAIL HEADER */}
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            md={2}
            css={{minWidth: '100%', color: "white", fontSize: 40}}
          >
            Preservation Quality Tool (PresQT)
          </Grid>
          <Grid
            container
            md={8}
            direction="row"
            justify="space-evenly"
            alignItems="center"
            css={{minWidth: '100%'}}
          >


            {/* LEFT CARD */}
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              md={5}
              css={{height: "100%"}}
            >
              <Paper
                elevation={1}
                css={{height: "100%", width: "100%", border: `1px solid ${colors.presQTOrangeLight}`, borderRadius: 5, backgroundColor: colors.presQTOrangeLight}}
              >
                {/* LEFT CARD ICON */}
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  md={2}
                  css={{padding: 5, minWidth: "100%", color: "white"}}
                >
                  <FormatQuoteIcon fontSize="large" />
                </Grid>
                {/* LEFT CARD CONTENT */}
                <Grid
                  item
                  md={10}
                  css={{padding: 20, fontSize: 20, marginTop: 20, minWidth: "100%", color: 'white', textAlign: "center"}}
                >
                  PresQT (Preservation Quality Tool) is an open-source tool with RESTful services to improve Preservation and Re-use of Research Data and Software.
                </Grid>
              </Paper>
            </Grid>


            {/* RIGHT CARD */}
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              md={5}
              css={{height: "100%"}}
            >
              <Paper
                elevation={1}
                css={{height: "100%", width: "100%", border: `1px solid ${colors.presQTOrangeLight}`, borderRadius: 5, backgroundColor: colors.presQTOrangeLight}}
              >
                {/* RIGHT CARD ICON */}
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  md={2}
                  css={{padding: 5, minWidth: "100%", color: "white"}}
                >
                  <CodeIcon fontSize="large" />
                </Grid>
                {/* RIGHT CARD CONTENT*/}
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="flex-start"
                  md={10}
                  css={{minWidth: "100%", color: "white", marginTop: 10}}
                >
                  <List dense>
                    {
                      techUsed.map(tech => {
                        return (
                          <ListItem
                            key={tech}
                            css={{textAlign: "center"}}
                          >
                            <ListItemText
                              primary={tech}
                              classes={{ primary: classes.listText }}
                            />
                          </ListItem>
                        )
                      })
                    }
                  </List>
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          {/* FOOTER LINKS */}
          <Grid
            container
            md={2}
            direction="row"
            justify="space-evenly"
            alignItems="center"
            css={{minWidth: '100%'}}
          >
                <Button variant="contained" target="_blank" href="https://presqt-qa.crc.nd.edu/ui/" css={{backgroundColor: colors.presQTOrangeLight, color: "white", width: 200}}>Visit Site</Button>
                <Button variant="contained" target="_blank" href="https://github.com/ndlib/presqt" css={{backgroundColor: colors.presQTOrangeLight, color: "white", width: 200}}>Back-End Github</Button>
                <Button variant="contained" target="_blank" href="https://github.com/ndlib/presqt-ui" css={{backgroundColor: colors.presQTOrangeLight, color: "white", width: 200}}>Front-End Github</Button>
                <Button variant="contained" target="_blank" href="https://presqt.readthedocs.io/en/latest/" css={{backgroundColor: colors.presQTOrangeLight, color: "white", width: 200}}>Documentation</Button>
          </Grid>
        </Grid>
      </Grid>
  </Grid>
  );
}