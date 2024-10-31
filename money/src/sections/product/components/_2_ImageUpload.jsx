import React, { useCallback } from 'react';
import { RHFUpload } from 'src/components/hook-form';
import api from 'src/utils/api';

export default function ImageUpload({ setValue, values }) {
  const handleDrop = useCallback(
    (acceptedFiles) => {
      const files = values.images || [];

      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setValue('images', [...files, ...newFiles], { shouldValidate: true });
    },
    [setValue, values.images]
  );

  const handleRemoveFile = useCallback(
    (inputFile) => {
      const filtered = values.images && values.images?.filter((file) => file !== inputFile);
      setValue('images', filtered);
    },
    [setValue, values.images]
  );

  const handleRemoveAllFiles = useCallback(() => {
    setValue('images', []);
  }, [setValue]);

  return (
    <RHFUpload
      multiple
      name="images"
      maxSize={3145728}
      onDrop={handleDrop}
      onRemove={handleRemoveFile}
      onRemoveAll={handleRemoveAllFiles}
      onUpload={async (acceptedFiles) => {
        try {
          const form = new FormData();
          values.images.forEach((e) => {
            form.append('images', e);
          });
          const { data } = await api.post('upload', form);
          setValue('images', data);
          alert('Image upload complete.');
        } catch (error) {
          alert(' Image upload failed, try again.');
        }
      }}
    />
  );
}
