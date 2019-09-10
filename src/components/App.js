import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { isEmpty } from 'lodash';
import ListOfPairs from './ListOfPairs'

const useStyles = makeStyles(theme => ({
  rootDiv: {
    textAlign: 'center'
  },
  root: {
    margin: '20px 80px',
    height: 'auto',
    paddingTop: '40px',
    minHeight: '400px'
  },
  button: {
    marginTop: '10px',
    marginLeft: '15px',
  },
  listofPairs: {
    columns: 3,
  }
}));

export default function App() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    lattersString: '',
    pairsArray: [],
    fieldError: false,
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const submitEvent = React.useCallback(() => {
    const { lattersString } = values
    const arrayOfLatters = lattersString.split(",");
    let lettersPairs = []
    if (lattersString !== '') {
      for (let index = 0; index < arrayOfLatters.length; index++) {
        const firstElement = arrayOfLatters[index];
        for (let index = 0; index < arrayOfLatters.length; index++) {
          const secondElement = arrayOfLatters[index];
          lettersPairs.push({ firstElement, secondElement })
        }
      }
      setValues({ ...values, pairsArray: lettersPairs, fieldError: false })
    } else {
      setValues({ ...values, fieldError: true })
    }

  }, [values])
  return (
    <div className={classes.rootDiv}>
      <Paper className={classes.root}>
        <TextField
          id="standard-name"
          label="Name"
          error={values.fieldError}
          className={classes.textField}
          margin="none"
          value={values.lattersString}
          onChange={handleChange('lattersString')}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={submitEvent}
        >
          Ok
        </Button>
        {!isEmpty(values.pairsArray) ?
          <ListOfPairs
            classes={classes}
            values={values}
          />
          : null
        }
      </Paper>
    </div>
  )
}