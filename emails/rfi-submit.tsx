import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
  Section,
  Hr,
} from "@react-email/components";
import * as React from "react";
import data from "@/data/globalData.json";
import type { PersonProps } from "@/common/components/FormModal";

interface NotificationEmailProps {
  person?: PersonProps;
}

const baseUrl = process.env.DEPLOY_URL
  ? `https://${process.env.DEPLOY_URL}`
  : "";

export const RfiSubmitNotification = ({ person }: NotificationEmailProps) => (
  <Html>
    <Head />
    <Preview>Thanks for submitting your information</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Thank you!</Heading>

        <Text style={{ ...text }}>Dear {person?.firstName ?? "Friend"},</Text>
        <Link
          href=""
          target="_blank"
          style={{
            ...link,
            display: "block",
            marginBottom: "16px",
          }}
        >
          Thank you for submitting your information to {data.partner.acronym}.
        </Link>
        <Text style={{ ...text }}>
          I hope this message finds you well. I am writing to express our
          gratitude for submitting your information.
        </Text>

        <Text style={{ ...text }}>
          We have successfully received the following details:
        </Text>

        <Section style={{ ...text }}>
          <ul>
            <li>
              Name: {person?.firstName} {person?.lastName}
            </li>
            <li>Phone Number: {person?.phone ?? "No phone number provided"}</li>
            <li>
              Graduation Year:{" "}
              {person?.gradYear ?? "We didn't receive your grad year."}
            </li>
            <li>
              Permission to send text messages:{" "}
              {person?.permission
                ? "You have given us permission to send you important updates via text messaging."
                : "X"}
              {!person?.permission ? (
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  You have not given us permission to send you important updates
                  via text messaging, so we're going to show the following
                  message.
                </Text>
              ) : null}
            </li>
          </ul>
        </Section>
        {person?.phone && !person.permission && (
          <Text
            style={{
              ...text,
              color: "#ababab",
              marginTop: "12px",
              marginBottom: "38px",
            }}
          >
            <strong>Important:</strong> You have provided your phone number but
            have not given us permission to send you important updates via text
            messaging. Please <Link href="">update your preferences</Link>.
          </Text>
        )}
        <Hr />
        <Text style={{ ...text }}>
          We appreciate your interest and will be reviewing your submission
          shortly. Please expect a follow-up from us soon with more information
          on the next steps. Thank you once again for reaching out. Should you
          have any questions or need further assistance in the meantime, feel
          free to contact us. Best regards,
        </Text>
        {/* if they gave us their phone number but didn't check the permission box, then display a message */}

        <Img
          src={`${baseUrl}/static/logo.svg`}
          width="32"
          height="32"
          alt={`${data.partner.acronym}'s Logo`}
        />
        <Text style={footer}>
          <Link href="" target="_blank" style={{ ...link, color: "#898989" }}>
            {data.partner.name}
          </Link>

          <br />
          {data.partner.description}
        </Text>
      </Container>
    </Body>
  </Html>
);

export default RfiSubmitNotification;

RfiSubmitNotification.PreviewProps = {
  person: {
    firstName: "George",
    lastName: "Washington",
    email: "friend@example.com",
    phone: "555-555-5555",
    gradYear: "2025",
    permission: false,
  },
} as NotificationEmailProps;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};
