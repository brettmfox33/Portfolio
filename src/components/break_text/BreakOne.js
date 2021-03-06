/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Grid, Paper } from '@material-ui/core'
import fonts from "../../styles/fonts";

export default function BreakOne() {
  return (
    <Grid md={12} container direction="row" justify="center" alignItems="center" css={{height: 150, marginBottom: -100}}>
      <Grid md={8} css={{height: '100%', zIndex: 2}}>
        <Paper css={{height: '100%', backgroundColor: "#416c6a", borderRadius: 10, color: "white"}}>
        <Grid md={12} css={{height: '100%'}} container direction="row" justify="center" alignItems="center">
          <Grid md={5} item css={{height: '100%', fontSize: fonts.largeText.fontSize}} container direction="row" justify="center" alignItems="center">
            Projects
          </Grid>
          <Grid md={7} item css={{fontSize: fonts.smallerText.fontSize, paddingRight: 20, height: '100%', textAlign: "center"}} container direction="row" justify="center" alignItems="center">
            I love customer engagement and making user friendly applications
            that help ease day to day work. I enjoy working with complicated 
            data and meaningful projects
          </Grid>
        </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}