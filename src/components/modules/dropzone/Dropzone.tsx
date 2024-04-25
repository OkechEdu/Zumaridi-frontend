import { useCallback } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";

import { useAppDispatch, useAppSelector } from "hooks";
import { Button, Loader } from "components/widgets";
import { upload, deleteImage } from "redux/slices/image.slice";
import { ZuTrash, ZuUpload } from "components/icons";

const Dropzone = () => {
  const dispatch = useAppDispatch();
  const { imageId, isLoading, preview } = useAppSelector((state) => state.image);

  const onDrop = useCallback((acceptedFiles: Blob[]) => {
    acceptedFiles.forEach((file: Blob) => {
      void dispatch(upload(file));
    });
  }, []);

  const onDelete = () => {
    void dispatch(deleteImage(imageId));
  };

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg", ".jpg"]
    }
  });

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path} className="w-full flex items-center justify-between">
      <span>{file.path}</span>
      <button type="reset" onClick={onDelete}>
        <ZuTrash className="text-red" />
      </button>
    </li>
  ));

  return (
    <div className="space-y-2">
      <div>
        <label htmlFor="logo" className="block text-lg text-gray-200">
          Business Logo
        </label>

        {acceptedFiles.length !== 0 ? (
          <div className="w-full flex justify-center">
            <div className="w-24 h-24 md:w-44 md:h-44 flex items-center justify-center border border-gray-200 rounded-lg">
              {imageId === "" && isLoading ? (
                <Loader color="#07AA3D" />
              ) : (
                <img
                  src={preview}
                  className="w-20 h-20 md:w-40 md:h-40 rounded-lg object-center object-contain"
                />
              )}
            </div>
          </div>
        ) : (
          <div
            {...getRootProps()}
            className="w-full p-5 flex flex-col items-center border border-dashed border-separate border-gray-200 rounded-lg space-y-3 cursor-pointer"
          >
            <input {...getInputProps()} />
            <ZuUpload size={30} />
            {isDragActive ? (
              <p className="text-center">Drop file to upload</p>
            ) : (
              <p className="text-center">
                Browse computer or drag and drop to upload <br />
                (jpeg or png format)
              </p>
            )}
            <Button>Upload Logo</Button>
          </div>
        )}
      </div>
      <ul>{imageId !== "" && files}</ul>
    </div>
  );
};

export default Dropzone;
