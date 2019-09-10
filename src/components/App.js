import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { isEmpty } from 'lodash';

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
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const submitEvent = () => {
    const { lattersString } = values
    const arrayOfLatters = lattersString.split(",");
    let lettersPairs = []
    for (let index = 0; index < arrayOfLatters.length; index++) {
      const firstElement = arrayOfLatters[index];
      for (let index = 0; index < arrayOfLatters.length; index++) {
        const secondElement = arrayOfLatters[index];
        lettersPairs.push({ firstElement, secondElement })
      }
    }
    setValues({ ...values, pairsArray: lettersPairs })
  }
  return (
    <div className={classes.rootDiv}>
      <Paper className={classes.root}>
        <TextField
          id="standard-name"
          label="Name"
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
        {!isEmpty(values.pairsArray) &&
          <div>
            <h2>
              Total count:{values.pairsArray.length}
            </h2>
            <List className={classes.listofPairs}>
              {values.pairsArray.map(item =>
                <ListItem>
                  <ListItemText
                    primary={`{${item.firstElement}, ${item.secondElement}}`}
                  >
                  </ListItemText>
                </ListItem>
              )}
            </List>
          </div>
        }
      </Paper>
    </div>
  )
}