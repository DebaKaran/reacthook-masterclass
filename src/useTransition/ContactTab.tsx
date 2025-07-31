/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";

interface ContactTabProps {}

const ContactTab: React.FC<ContactTabProps> = ({}) => {
  return (
    <>
      <p>You can find me online here:</p>
      <ul>
        <li>admin@mysite.com</li>
        <li>+123456789</li>
      </ul>
    </>
  );
};

export default ContactTab;
