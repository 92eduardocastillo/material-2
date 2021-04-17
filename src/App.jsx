import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import {Icon, IconButton} from '@material-ui/core'


import Lista from './components/Lista'

function App() {
  return (
    <div>
     <Button
      variant="contained"
       color="primary"
       size="large"
       endIcon={<DeleteIcon />}
       >
       Boton
     </Button>

     <DeleteIcon
     color="primary"
     />
    
    <IconButton aria-label="delete" >
    <DeleteIcon
     color="primary"
    />
    </IconButton>
    
    <Lista />
    
    </div>
    
  );
}

export default App;
