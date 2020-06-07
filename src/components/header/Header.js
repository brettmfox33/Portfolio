/** @jsx jsx */
import { jsx } from '@emotion/core'
import colors from "../../styles/colors";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  header: {
    height: "90vh",
    backgroundColor: colors.main
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.header}></div>
  )
}