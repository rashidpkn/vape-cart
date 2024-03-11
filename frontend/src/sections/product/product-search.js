import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ProductSearch({ name,setName,fetchProduct }) {

  const handleClick = () => {
    console.log('Hello');
    fetchProduct()
  };

  const handleKeyUp = (event) => {
    
      if (event.key === 'Enter') {
        handleClick();
      }
    
  };

  return (
    
        <TextField
          placeholder="Search..."
          onKeyUp={handleKeyUp}
          onChange={e=>setName(e.target.value)}
          value={name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ ml: 1, color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    

ProductSearch.propTypes = {
  hrefItem: PropTypes.func,
  loading: PropTypes.bool,
  onSearch: PropTypes.func,
  query: PropTypes.string,
};
