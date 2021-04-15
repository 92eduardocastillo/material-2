import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import {Icon} from '@material-ui/core'


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

    

    </div>
    
  );
}

export default App;
