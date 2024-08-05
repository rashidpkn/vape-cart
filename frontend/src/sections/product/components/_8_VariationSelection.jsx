import { Autocomplete, Box, Checkbox, Chip, FormControlLabel, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { _variables } from 'src/data/createProducts';
import api from 'src/utils/api';

export default function VariationSelection({ values, setValue, setVariation, e, savedAttibutes }) {
  return (
    <Box sx={{ gridColumn: 'span 1 ' }} key={e}>
      <Autocomplete
        multiple
        freeSolo
        options={[
          ...(e === 'Bottle Size' ? _variables.bottleSize : []),
          ...(e === 'Puffs' ? _variables.puffs : []),
          ...(e === 'Flavour' ? _variables.flavour : []),
          ...(e === 'Nicotine Strength' ? _variables.nicotineStrength : []),
          ...(e === 'Color' ? _variables.color : []),
          ...(e === 'Batteries' ? _variables.batteries : []),
          ...savedAttibutes.filter((v) => v.attribute === e).map((e) => e.value),
        ]}
        value={values.attributes[e] || []}
        onChange={(event, newValue) => {
          let updatedAttributes = {
            ...values.attributes,
          };
          if (values.type === 'Simple' && e !== 'Flavour') {
            if (newValue.length > 1) {
              const value = [newValue[newValue.length - 1]];
              updatedAttributes = {
                ...values.attributes,
                [e]: value,
              };
            } else {
              updatedAttributes = {
                ...values.attributes,
                [e]: newValue,
              };
            }

            if (newValue.length === 0) {
              delete updatedAttributes[e];
            }
            setValue('attributes', updatedAttributes);
          } else {
            const updatedAttributes = {
              ...values.attributes,
              [e]: newValue,
            };
            if (newValue.length === 0) {
              delete updatedAttributes[e];
            }
            setValue('attributes', updatedAttributes);
          }
        }}
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
              onChange={(ch) => {
                if (ch.target.checked) {
                  setVariation((prev) => [...new Set([...prev, e])]);
                } else {
                  setVariation((prev) => [...new Set(prev.filter((ev) => ev !== e))]);
                }
              }}
            />
          }
        />
      )}
    </Box>
  );
}
