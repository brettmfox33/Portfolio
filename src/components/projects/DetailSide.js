/** @jsx jsx */
import Grid from "@material-ui/core/Grid";
import {jsx} from "@emotion/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CodeIcon from '@material-ui/icons/Code';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Button from "@material-ui/core/Button";

export default function DetailSide({projectData}) {
  const useStyles = makeStyles({
    detailContainer: {
      height: '45%'
    },
    detailHeader: {
      minWidth: '100%', 
      color: "white", 
      fontSize: 40
    },
    footerLinks: {
      minWidth: "100%"
    },
    linkButton: {
      backgroundColor: projectData.secondaryColor, 
      color: "white", 
      width: 200
    },
    detailText: {
      color: 'white',
      fontSize: 25,
      textAlign: "center",
      marginBottom: 50
    },
    techText: {
      color: 'white',
      fontSize: 25,
      textAlign: "center"
    },
  });
  const classes = useStyles();
  
  return (
    <Grid
      md={6}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid
        md={12}
        container
        direction="row"
        justify="center"
        className={classes.detailContainer}
        >
          {/* PROJECT TITLE */}
          <Grid
            md={2}
            container
            direction="row"
            alignItems="flex-start"
            justify="center"
            className={classes.detailHeader}
          >
            {projectData.title}
          </Grid>
          <Grid 
            md={9}
          >
            {/* DESCRIPTION */}
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
              className={classes.detailText}
            >
              <FormatQuoteIcon fontSize="large" />
              {projectData.description}
            </Grid>
            
            {/* TECH */}
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
              className={classes.techText}
            >
              <CodeIcon fontSize="large" />
              {
                projectData.tech.map(tech => {
                  return (
                    `${tech} / `
                  )
                })
              }
            </Grid>
          </Grid>

          {/* LINK BUTTONS */}
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="flex-end"
            className={classes.detailHeader}
          >
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
              className={classes.footerLinks}
            >
              {
                projectData.links.map(linksObject => {
                  return (
                    <Button 
                      variant="contained" 
                      target="_blank" 
                      href={linksObject.url}
                      className={classes.linkButton}
                    >
                      {linksObject.title}
                    </Button>
                  )
                })
              }
            </Grid>
          </Grid>
      </Grid>
    </Grid>
      )
}