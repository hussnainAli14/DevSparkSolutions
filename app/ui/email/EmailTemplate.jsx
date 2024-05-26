import {
  Body,
  Button,
  Html,
  Head,
  Preview,
  Section,
} from "@react-email/components";
import React from "react";

const EmailTemplate = ({
  senderName,
  services,
  companyName,
  email,
  priceRange,
  description,
  phoneNumber,
}) => {
  return (
    <Html>
      <Head>
        <style>
          {`
            .email-container {
              @apply bg-lightGray py-6 px-4 ;
            }
            .content-container {
              @apply bg-white p-6 rounded-lg shadow-md;
            }
            .header {
              @apply text-2xl font-bold mb-4;
            }
            .details {
              @apply mb-4;
            }
            .detail {
              @apply mb-2;
            }
            .description {
              @apply mt-4 text-gray-700;
            }
          `}
        </style>
      </Head>
      <Preview>Your service request details</Preview>
      <Body className="email-container">
        <Section className="header">
          {" "}
          <strong>Customer Name:</strong> {senderName}
        </Section>
        <Section className="details">
          <p className="detail">
            <strong>Company Name:</strong> {companyName}
          </p>
          <p className="detail">
            <strong>Email:</strong> {email}
          </p>
          <p className="detail">
            <strong>Phone Number:</strong> {phoneNumber}
          </p>
          <p className="detail">
            <strong>Required Services:</strong>{" "}
            {services.map((service) => service.name + ",")}
          </p>

          <p className="detail">
            <strong>Price Range:</strong> {priceRange}
          </p>
        </Section>
        <Section className="description">
          <strong>Project Description:</strong>
          <p>{description}</p>
        </Section>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
