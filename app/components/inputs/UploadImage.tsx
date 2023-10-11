import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface UploadImageProps {
  handleFileChange: (file: File) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({ handleFileChange }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        handleFileChange(acceptedFiles[0]);
      }
    },
    [handleFileChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".png"] },
  });

  return (
    <div
      className="border-2 border-slate-400  border-dashed cursor-pointer text-sm font-normal text-slate-400 flex items-center justify-center rounded-xl p-3 "
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <p>Sélectionnez votre image</p>
    </div>
  );
};

export default UploadImage;
