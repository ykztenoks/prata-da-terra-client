import { useState, useEffect, useRef } from "react";
import Image from "next/image";
const FileUpload = ({ setFiles, files }) => {
  //   const [files, setFiles] = useState([]);
  const fileRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  useEffect(() => {
    console.log(files);
  }, [files]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    setFiles([...e.dataTransfer.files]);
  };

  const handleFileSelect = (e) => {
    setFiles([...e.target.files]);
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };
  const handleClick = () => {
    fileRef.current.click();
  };
  const renderfiles = () => {
    return files.map((file, index) => (
      <div key={index} className="selected-file">
        <span>{file.name}</span>
        <button onClick={() => handleRemoveFile(index)}>Remove</button>
      </div>
    ));
  };

  return (
    <div
      className={`file-upload-container center flex-col ${
        dragging ? "dragging" : ""
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <div className="file-input center ">
        <Image
          width={50}
          height={50}
          loading="lazy"
          unoptimized="true"
          className=" w-22 h-22 object-cover"
          onClick={handleClick}
          src={"/images/upload.png"}
          alt="product image"
        />
        <input
          type="file"
          multiple
          required
          ref={fileRef}
          className="hidden"
          onChange={handleFileSelect}
          accept="image/*"
        />
        <p onClick={handleClick} className="hover:scale-105 transition-all">
          Arraste arquivos ou clique para selecionar
        </p>
      </div>
      <div className="selected-files">{renderfiles()}</div>
    </div>
  );
};

export default FileUpload;
