import PropTypes from 'prop-types';
import { ContactName, Item } from './ContactItem.styles';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import{ Typography} from '@mui/material';

function ContactItem({id, name, number, func}) { 
   return (
      <Item>
               <Typography variant='h5' component='p' sx={{mt: '1rem'}}> {name}</Typography>
         <Typography variant='h5' component='p' sx={{mt: '1rem'}}> {number} </Typography>
         <Button  variant="outlined" sx={{mt: '1rem'}} startIcon={<DeleteIcon />} size="small" onClick={() => func(id)}>
            delete
         </Button>
      </Item>
)
}
ContactItem.propTypes = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
   func: PropTypes.func.isRequired


   
}
export default ContactItem;