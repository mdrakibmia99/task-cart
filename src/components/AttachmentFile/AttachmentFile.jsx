import { useState } from "react";

const AttachmentFile = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (event) => {
    const fileList = event.target.files;
    const filesArray = Array.from(fileList);
    setSelectedFiles(filesArray);
  };
    
    return (
        <div>
        <input type="file" id="fileInput" multiple onChange={handleFileSelect} />
        <div id="attachmentList" className="mt-4">
          <h2>Selected Attachments:</h2>
          <div className="flex flex-wrap">
            {selectedFiles.map((file, index) => (
              <div key={index} className="m-2">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Attachment ${index + 1}`}
                  className="w-32 h-32 object-cover rounded"
                />
                <p className="mt-2">{`${file.name} (${file.type})`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default AttachmentFile;