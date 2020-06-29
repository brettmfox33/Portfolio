/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Grid, TextField, Button, withStyles } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";

const useStyles = makeStyles({
  contactContainer: {
    width: '30%',
    padding: 10
  },
  input: {
    marginTop: 15
  },
  submitButtonContainer: {
    marginTop: 15
  }
});

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: colors.main,
    '&:hover': {
      backgroundColor: colors.main,
    },
  },
}))(Button);

const CustomTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: colors.main,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: colors.main,
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: colors.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: colors.main,
      },
    },
  },
})(TextField);

export default function ContactForm() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid 
        container
        direction="column"
        alignItems="flex-start"
        className={classes.contactContainer}
      >
        {/* NAME */}
        <CustomTextField 
          fullWidth
          className={classes.input}
          label="Name" 
          variant="outlined" 
        />

        {/* EMAIL */}
        <CustomTextField 
          fullWidth
          className={classes.input}
          label="Email" 
          variant="outlined" 
        />

        {/* SUBJECT */}
        <CustomTextField 
          fullWidth
          className={classes.input}
          label="Subject" 
          variant="outlined" 
        />

        {/* MESSAGE */}
        <CustomTextField 
          className={classes.input}
          fullWidth
          label="Message" 
          multiline
          rows={5} 
          variant="outlined" 
        />

        {/* SUBMIT BUTTON */}
        <Grid
          container
          direction="row"
          justify="flex-end"
          className={classes.submitButtonContainer}
        >
        <ColorButton 
          className={classes.submitButton}
          variant="contained" 
          color="primary"
        >
          Submit
        </ColorButton>
        </Grid>
      </Grid>
    </Grid>
  )
}