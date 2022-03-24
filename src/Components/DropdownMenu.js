import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function DropdownMenu() {
  const [country, setCountry] = React.useState('');

  const handleChange = (event) => {
      setCountry(event.target.value);
  };

  return (
    <FormControl fullWidth >
      <InputLabel id="demo-simple-select-label">Select country</InputLabel>
      <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={country}
      label="Select country"
      onChange={handleChange}
      MenuProps={MenuProps}
      // className={classes.selectcountry}
      >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      </Select>
    </FormControl>
  );
}


