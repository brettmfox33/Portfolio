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
    backgroundColor: colors.srPeruBlue
  },
  projectImage: {
    height: '58%',
  },
  listText: {
    fontSize: 20
  }
});

const techUsed = ['Django', 'Javascript', 'PostgreSQL', 'ETL Scripting'];

export default function SRPeruProject() {
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
          src={require(`../../images/sr_peru_browser.png`)}
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
            Spatial Repellents: Peru (SR Peru)
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
                css={{height: "100%", width: "100%", border: `1px solid ${colors.srPeruBlueLight}`, borderRadius: 5, backgroundColor: colors.srPeruBlueLight}}
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
                  SR Peru, bruh
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
                css={{height: "100%", width: "100%", border: `1px solid ${colors.srPeruBlueLight}`, borderRadius: 5, backgroundColor: colors.srPeruBlueLight}}
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
            <Button variant="contained" target="_blank" href="https://spatialrepellents.nd.edu/" css={{backgroundColor: colors.srPeruBlueLight, color: "white", width: 200}}>More Info</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}