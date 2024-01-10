import axios from "axios";
import { useModal } from "../contexts/ModalContext";
import { useState } from "react";

const AttachmentModal = () => {
  const { setIsOpen, selectedFiles ,totalAtt,setTotal} = useModal()
  const [loading,setLoading]=useState(false)

  const handleFileUpload = async () => {
    setLoading(true)
    const formData = new FormData();
    for (const file of selectedFiles) {
      formData.append('attachments', file);
    }
    try {
      const response = await axios.post('https://task-cart-server.onrender.com/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.status == 200) {
        setLoading(false)
        setIsOpen(false)
        setTotal(totalAtt + 1)
        console.log(totalAtt ,"koto")
        console.log('File upload successful!');
        console.log('Server response:', response.data);
      } else {
        console.error('File upload failed. Server returned status:', response.status);
        console.log('Server response:', response.data);
        setLoading(false)
      }


    } catch (error) {
      setLoading(false)
      console.error('Error uploading files:', error);
    }
  };

// console.log(attachment,"attachment")

  return (
    <div className="absolute top-0  w-full h-full bg-transparent  z-50 flex justify-center items-center">
      <div className="bg-slate-200 w-[400px] h-auto p-3">
        <div className="flex justify-end "><p
          onClick={() => setIsOpen(false)}
          className="border cursor-pointer border-blue-900 w-7 h-7 flex justify-center items-center rounded-full font-bold text-lg">X</p></div>

        <div className="[&>*:nth-child(odd)]:bg-blue-400 [&>*:nth-child(even)]:bg-slate-400 mt-5">
          {selectedFiles.map((file, index) => (
            <div key={index} className="m-2 px-2 p">

              <p className="text-sm">{`${file.name}`}</p>
            </div>
          ))}
        </div>
        <div>
          {loading ? <button
            className="w-full bg-slate-300 font-bold py-2 rounded-md hover:shadow-md hover:scale-[0.98] mt-5 duration-300 ease-in-out">Loading</button>: 
          <button
            onClick={handleFileUpload}
            className="w-full bg-slate-300 font-bold py-2 rounded-md hover:shadow-md hover:scale-[0.98] mt-5 duration-300 ease-in-out">Submit File</button>}
        </div>
      </div>
    </div>
  );
};

export default AttachmentModal;