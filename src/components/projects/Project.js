/** @jsx jsx */
import Grid from "@material-ui/core/Grid";
import {jsx} from "@emotion/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Fragment } from "react";
import ImageSide from "./ImageSide";
import DetailSide from "./DetailSide";

export default function Project({projectData, side}) {
  const useStyles = makeStyles({
    projectGridContainer: {
      height: 1000,
      width: "100%",
      // backgroundColor: projectData.backgroundColor,
      background: projectData.background
    },
  });
  const classes = useStyles();    

  return (
    <Grid
      container
      className={classes.projectGridContainer}
    >
      {
        side === "left"
        ? 
          <Fragment> 
            <ImageSide projectData={projectData} />
            <DetailSide projectData={projectData} />
          </Fragment>
        : 
          <Fragment> 
            <DetailSide projectData={projectData} />
            <ImageSide projectData={projectData} />
          </Fragment>
      }
  </Grid>
  );
}