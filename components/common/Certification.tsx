// components/common/Certificate.js
import Image from "next/image";
import { useState } from "react";
import Google from "../../public/google.svg";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const certifications = [
  {
    logo: Google,
    title: "LinkedIn Learning",
    description: "Design Thinking: Understanding the Process",
    url: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726084123/Design_Thinking_Understanding_the_Process_iagkas.png",
  },
   {
    logo: Google,
    title: "LinkedIn Learning",
    description: "Design Thinking: Understanding the Process",
    url: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726084123/Design_Thinking_Understanding_the_Process_iagkas.png",
  },
   {
    logo: Google,
    title: "LinkedIn Learning",
    description: "Design Thinking: Understanding the Process",
    url: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726084123/Design_Thinking_Understanding_the_Process_iagkas.png",
  },
   {
    logo: Google,
    title: "LinkedIn Learning",
    description: "Design Thinking: Understanding the Process",
    url: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726084123/Design_Thinking_Understanding_the_Process_iagkas.png",
  },
   {
    logo: Google,
    title: "LinkedIn Learning",
    description: "Design Thinking: Understanding the Process",
    url: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726084123/Design_Thinking_Understanding_the_Process_iagkas.png",
  },
   {
    logo: Google,
    title: "LinkedIn Learning",
    description: "Design Thinking: Understanding the Process",
    url: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726084123/Design_Thinking_Understanding_the_Process_iagkas.png",
  },
  // Add other certification objects...
];

const Certification = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOpen = (url: any) => {
    setSelectedImage(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="my-20" id="certification">
      <div className="ellipse flex justify-center items-center">
        <span>Certification</span>
      </div>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-[#6EBFF41A] space-x-3 flex px-5 py-9 items-center rounded-3xl cursor-pointer"
            onClick={() => handleClickOpen(cert.url)}
          >
            <div className="lg:bg-white flex items-center justify-center rounded-full w-24 h-24">
              <Image src={cert.logo} alt={cert.title} />
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
              <p className="text-sm">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying image */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Certification Image"
              width={100}
              height={100}

              style={{ width: "100%", height: "auto" }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Certification;
