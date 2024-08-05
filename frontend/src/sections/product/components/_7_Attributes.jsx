import { Autocomplete, Chip, TextField } from '@mui/material';
import React from 'react';
import { _attributes } from 'src/data/createProducts';

export default function Attributes({
  setSelectedAttributes,
  selectedAttributes,
  values,
  setValue,
}) {
  return (
    <Autocomplete
      onChange={(e, v) => {
        setSelectedAttributes(v);
      }}
      value={selectedAttributes}
      name="attributes"
      label="Attributes"
      placeholder="+ Attributes"
      multiple
      options={_attributes}
      getOptionLabel={(option) => option}
      renderOption={(props, option) => (
        <li {...props} key={option}>
          {option}
        </li>
      )}
      renderTags={(selected, getTagProps) =>
        selected.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            key={option}
            label={option}
            size="small"
            color="info"
            variant="soft"
          />
        ))
      }
      renderInput={(params) => (
        <TextField {...params} label="Attributes" placeholder="+ Attributes" />
      )}
    />
  );
}
