/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Grid, Paper, Divider } from '@material-ui/core'
import colors from "../../styles/colors";

export default function BreakTwo() {
  return (
    <Grid md={12} container direction="row" justify="center" alignItems="center" css={{marginBottom: 20, height: 150, paddingLeft: 50, paddingRight: 50}}>
      <Grid md={3}>
        <Divider css={{height:2, backgroundColor:colors.main}}></Divider>
      </Grid>
      <Grid md={6} css={{height: '100%', zIndex: 2}}>
        <Paper css={{height: '100%', backgroundColor: colors.main, borderRadius: 10, color: "white"}}>
        <Grid md={12} css={{height: '100%'}} container direction="row" justify="center" alignItems="center">
          <Grid md={5} item css={{height: '100%', fontSize: 40}} container direction="row" justify="center" alignItems="center">
            Contact Me
          </Grid>
          <Grid md={7} item css={{paddingRight: 20, height: '100%', textAlign: "center"}} container direction="row" justify="center" alignItems="center">
            I am seeking freelance opportunities within any of my tech stacks.
            Small businesses and non-profits to the front of the line! 
          </Grid>
        </Grid>
        </Paper>
      </Grid>
      <Grid md={3}>
        <Divider css={{height:2, backgroundColor:colors.main}}></Divider>
      </Grid>
    </Grid>
  )
}