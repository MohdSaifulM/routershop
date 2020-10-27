import React from "react";
import { useParams } from "react-router-dom";
function Contact() {
  let { name } = useParams();
  return (
    <div>
      <h3>{name} of contact</h3>
    </div>
  );
}

export default Contact;
