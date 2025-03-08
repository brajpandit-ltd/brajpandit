"use client";

import React, { useState } from "react";
import TextInput from "../common-ui/TextInput";
import Button from "../common-ui/Button";
import DateInput from "../common-ui/DateInput";
import DropdownInput from "../common-ui/DropdownInput";
import TextareaInput from "../common-ui/TextareaInput";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    mobNo: "",
    date: "",
    service: "",
    message: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="frm-cnn">
        <TextInput
          name="name"
          label="Name"
          placeholder="Enter your name"
          value={formState.name}
          onChange={handleChange}
        />

        <TextInput
          name="mobNo"
          label="Mobile No."
          placeholder="Enter your mobile number"
          value={formState.mobNo}
          onChange={handleChange}
        />

        <DateInput
          name="date"
          label="Date"
          value={formState.date}
          onChange={handleChange}
          placeholder="Enter your date"
        />

        <DropdownInput
          name={"service"}
          label={"Services"}
          value={formState.service}
          onChange={handleChange}
          options={[
            { value: "service1", label: "Service 1" },
            { value: "service2", label: "Service 2" },
            { value: "service3", label: "Service 3" },
          ]}
        />

        <TextareaInput
          name="message"
          label="Message"
          placeholder="Enter your message"
          value={formState.message}
          onChange={handleChange}
        />

        <div className="btnnn">
          <Button text="Submit" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default ContactSection;
