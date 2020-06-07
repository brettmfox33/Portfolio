/** @jsx jsx */
import { jsx } from '@emotion/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";

const useStyles = makeStyles({
  footer: {
    height: "20vh",
    backgroundColor: colors.main,
    marginTop: 50
  }
});
export default function Footer() {
  const classes = useStyles();

  return(
    <div
      className={classes.footer}
    >

    </div>
  )
}