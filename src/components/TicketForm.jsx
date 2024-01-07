import React, { useEffect } from "react";
import { Breadcrumb } from "./Breadcrumb";
import { AddTicketForm } from "./add-ticket-form/AddTicketForm.comp";
import { useState } from "react";


const initialFrmDt = {
  subject: "",
  issueDate: "",
  details: "",
};
export const TicketForm = () => {
  const [frmData, setfrmData] = useState(initialFrmDt);
  useEffect(()=>{},[frmData]);
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    
    setfrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = async(e) =>{
    e.preventDefault();
    console.log("Form Submit request received",frmData);
  }
  return (
    <div>
      <div>
        <Breadcrumb page={"New Ticket"} />
      </div>
      <div>
        <AddTicketForm handleOnchange={handleOnchange} frmDt={frmData} handleOnSubmit={handleOnSubmit} />
      </div>
    </div>
  );
};
