import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Slider,
  Button,
} from "@mui/material";
import Image from "next/image";
import Phone from "../../public/phone.svg";
import Email from "../../public/email.svg";
import Location from "../../public/location.svg";

const CssTextField = styled(TextField)({
  "& label": {
    color: "#FFFFFF", // Label color when not focused
  },
  "& label.Mui-focused": {
    color: "#FFFFFF", // Label color when focused
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#FFFFFF", // Default underline color
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FFFFFF", // Underline color when focused
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#FFFFFF", // Default border color
    },
    "&:hover fieldset": {
      borderColor: "#FFFFFF", // Border color when hovered
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FFFFFF", // Border color when focused
    },
  },
  "& .MuiInputBase-input": {
    color: "#FFFFFF", // Text color inside the input
  },
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    services: {
      uiUx: false,
      digitalMarketing: false,
      graphicDesign: false,
      others: false,
    },
    budget: [100, 1000],
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    message: false,
  });

  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSliderChange = (event: any, newValue: any) => {
    setFormData({ ...formData, budget: newValue });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      services: { ...formData.services, [name]: checked },
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { fullName: false, email: false, message: false };

    if (formData.fullName.trim() === "") {
      newErrors.fullName = true;
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = true;
      isValid = false;
    }
    if (formData.message.trim() === "") {
      newErrors.message = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setIsLoading(true); // Start loading
      const text = `New Contact Form Submission:\n\n
        Full Name: ${formData.fullName}\n
        Email: ${formData.email}\n
        Services: ${formData.services.uiUx ? "UI/UX Design, " : ""}${
        formData.services.digitalMarketing ? "Digital Marketing, " : ""
      }${formData.services.graphicDesign ? "Graphic Design, " : ""}${
        formData.services.others ? "Others" : ""
      }\n
        Budget: ${formData.budget[0]} - ${formData.budget[1]}\n
        Message: ${formData.message}`;

      let data = {
        service_id: "service_spvu31h",
        template_id: "template_df8wned",
        user_id: "0nF7lAtQJ72WHIN4M",
        template_params: {
          from_name: "Taiwo Ademola Website",
          contact_form: text,
          reply_to: "hello@taiwoademola.com",
        },
      };

      const url = "https://api.emailjs.com/api/v1.0/email/send";

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          alert("Message sent successfully!");
          // Clear form after submission
          setFormData({
            fullName: "",
            email: "",
            services: {
              uiUx: false,
              digitalMarketing: false,
              graphicDesign: false,
              others: false,
            },
            budget: [100, 1000],
            message: "",
          });
        } else {
          alert("Failed to send message!");
        }
      } catch (error) {
        alert("An error occurred while sending the message.");
        console.error(error);
      } finally {
        setIsLoading(false); // End loading
      }
    }
  };

  return (
    <div className="my-30 flex justify-center items-center" id="contact">
      <div className="md:w-4/6 flex flex-col justify-center items-center">
        {/* Contact Form */}
        <h2 className="mt-4 text-white text-4xl font-semibold">
          Let’s Discuss Your Project
        </h2>

        {/* Form Fields */}
        <div className="my-5 w-full">
          {/* Full Name and Email */}
          <div className="md:flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4">
            <div className="bg-[#6EBFF439] md:w-1/2 px-5 md:px-10 py-7 items-start rounded-xl">
              <CssTextField
                variant="standard"
                label="Full Name"
                name="fullName"
                className="w-full"
                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
                helperText={errors.fullName && "Full Name is required"}
              />
            </div>
            <div className="bg-[#6EBFF439] md:w-1/2 px-5 md:px-10 py-7 items-start rounded-xl">
              <CssTextField
                variant="standard"
                label="Email"
                name="email"
                className="w-full"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email && "Invalid email"}
              />
            </div>
          </div>

          {/* Services */}
          <div className="mt-10 text-white bg-[#6EBFF439] px-5 md:px-10 py-7 items-start rounded-xl">
            <p className="font-semibold text-lg mb-4">Why are you contacting me?</p>
            <div className="flex flex-wrap">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.services.uiUx}
                    onChange={handleCheckboxChange}
                    name="uiUx"
                  />
                }
                label="UI/UX Design"
                className="mr-4"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.services.digitalMarketing}
                    onChange={handleCheckboxChange}
                    name="digitalMarketing"
                  />
                }
                label="Digital Marketing"
                className="mr-4"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.services.graphicDesign}
                    onChange={handleCheckboxChange}
                    name="graphicDesign"
                  />
                }
                label="Graphic Design"
                className="mr-4"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.services.others}
                    onChange={handleCheckboxChange}
                    name="others"
                  />
                }
                label="Others"
                className="mr-4"
              />
            </div>
          </div>

          {/* Budget */}
          <div className="mt-10 text-white bg-[#6EBFF439] px-5 md:px-10 py-7 items-start rounded-xl">
            <p className="font-semibold text-lg mb-4">Your Budget($)</p>
            <Slider
              value={formData.budget}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              min={100}
              max={10000}
            />
          </div>

          {/* Message */}
          <div className="mt-10 text-white bg-[#6EBFF439] px-5 md:px-10 py-7 items-start rounded-xl">
            <p className="font-semibold text-lg mb-4">Your Message</p>
            <CssTextField
              label="Your Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              helperText={errors.message && "Message is required"}
            />
          </div>

          {/* Submit Button */}
          <div className="mt-8 w-full flex justify-center">
          

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="bg-[#0B78F4] w-full justify-center text-white mt-6 font-bold flex items-center rounded-3xl px-8 py-4"
            >
              {isLoading ? "Sending..." : "Send Message"}
              <svg
                className="ml-3"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5383 7.6633L9.91328 13.2883C9.73716 13.4644 9.49829 13.5634 9.24922 13.5634C9.00015 13.5634 8.76128 13.4644 8.58516 13.2883C8.40904 13.1122 8.31009 12.8733 8.31009 12.6242C8.31009 12.3752 8.40904 12.1363 8.58516 11.9602L12.6094 7.93752H1.125C0.87636 7.93752 0.637903 7.83874 0.462087 7.66293C0.286272 7.48711 0.1875 7.24866 0.1875 7.00002C0.1875 6.75137 0.286272 6.51292 0.462087 6.3371C0.637903 6.16129 0.87636 6.06252 1.125 6.06252H12.6094L8.58672 2.03751C8.4106 1.86139 8.31166 1.62252 8.31166 1.37345C8.31166 1.12438 8.4106 0.88551 8.58672 0.70939C8.76284 0.533269 9.00171 0.434326 9.25078 0.434326C9.49985 0.434326 9.73872 0.533269 9.91484 0.70939L15.5398 6.33439C15.6273 6.4216 15.6966 6.52523 15.7438 6.63931C15.7911 6.75339 15.8153 6.87569 15.8152 6.99917C15.815 7.12265 15.7905 7.24489 15.743 7.35886C15.6955 7.47283 15.6259 7.57629 15.5383 7.6633Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
