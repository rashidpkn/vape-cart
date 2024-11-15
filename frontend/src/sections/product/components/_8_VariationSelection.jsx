import { Autocomplete, Box, Checkbox, Chip, FormControlLabel, TextField } from '@mui/material';
import React from 'react';
import { useAuthContext } from 'src/auth/hooks';
import { _variables } from 'src/data/createProducts';
import api from 'src/utils/api';

export default function VariationSelection({
  currentProduct,
  values,
  setValue,
  setVariation,
  e,
  savedAttibutes,
  variation = [],
}) 

{

  const {user} = useAuthContext()


  const attributeOptions = {
    'Bottle Size': _variables.bottleSize,
    'Puffs': _variables.puffs,
    'Flavour': _variables.flavour,
    'Nicotine Strength': _variables['Nicotine Strength'],
    'Color': _variables.color,
    'Batteries': _variables.batteries,
    'Packaging': _variables.Packaging,
  };

  const options = [
    ...(attributeOptions[e] || []),
    ...savedAttibutes.filter((attr) => attr.attribute === e).map((attr) => attr.value),
  ];

  const handleAttributeChange = (newValue) => {
    let updatedAttributes = { ...values.attributes };

    if (values.type === 'Simple' && e !== 'Flavour') {
      updatedAttributes[e] = newValue.length > 1 ? [newValue[newValue.length - 1]] : newValue;
    } else {
      updatedAttributes[e] = newValue.length === 0 ? undefined : newValue;
    }
    setValue('attributes', updatedAttributes);

    const value = newValue[newValue.length - 1];
    if(newValue.length){
      if(options.includes(value)){
        console.log('Already Included');
      }else{
        api.post('/attributes',{attribute: e,value,username:user.displayName})
      }
    }

  };

  const handleVariationChange = (checked) => {
    if (currentProduct && checked && !window.confirm("Changing the variation of this product will reset all current variations. Do you wish to proceed?")) {
      return;
    }

    const updatedVariation = checked
      ? [...new Set([...variation, e])]
      : variation.filter((v) => v !== e);

    setVariation(updatedVariation);
    if (checked) {
      setValue('variations', []); // Reset variations when enabling this attribute for variations
    }
  };

  return (
    <Box sx={{ gridColumn: 'span 1' }} key={e}>
      <Autocomplete
        multiple
        freeSolo
        options={options}
        value={values.attributes[e] || []}
        onChange={(event, newValue) => handleAttributeChange(newValue)}
        renderInput={(params) => <TextField {...params} label={e} placeholder={e} />}
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
      />
      
      {values.type === 'Variable' && values.attributes[e]?.length > 1 && (
        <FormControlLabel
          label="Use this attribute to create Variations"
          control={
            <Checkbox
              checked={variation.includes(e)}
              onChange={(ch) => handleVariationChange(ch.target.checked)}
            />
          }
        />
      )}
    </Box>
  );
}
