import { Autocomplete, Box, Checkbox, Chip, FormControlLabel, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
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
}) {
  return (
    <Box sx={{ gridColumn: 'span 1 ' }} key={e}>
      <Autocomplete
        multiple
        freeSolo
        options={[
          ...(e === 'bottleSize' ? _variables.bottleSize : []),
          ...(e === 'puffs' ? _variables.puffs : []),
          ...(e === 'flavour' ? _variables.flavour : []),
          ...(e === 'nicotineStrength' ? _variables.nicotineStrength : []),
          ...(e === 'color' ? _variables.color : []),
          ...(e === 'batteries' ? _variables.batteries : []),
          ...savedAttibutes.filter((v) => v.attribute === e).map((e) => e.value),
        ]}
        value={values.attributes[e] || []}
        onChange={(event, newValue) => {
          let updatedAttributes = {
            ...values.attributes,
          };
          if (values.type === 'Simple' && e !== 'flavour') {
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
            if (variation.find((v) => v === e)) {
              if (newValue.length === 1) {
                return alert(
                  `Please uncheck "Use this attribute to create Variations" before deleting this attribute.`
                );
              }
            }
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
              defaultChecked={variation.find((v) => v === e)}
              onChange={(ch) => {
                if (currentProduct) {
                  const con = confirm(
                    "Changing the variation of this product will reset all current variations, and you'll have to start over from the beginning. Do you wish to proceed?"
                  );
                  if (con) {
                    setValue('variations', []);
                  } else {
                    return;
                  }
                }
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
