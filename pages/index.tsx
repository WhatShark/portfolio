import type { NextPage } from "next";
import sharkImage from "../public/img/shark.png";
import certificationImage from "../public/img/aws-certified-cloud-practitioner.png";
import Image from "next/image";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import SailingIcon from "@mui/icons-material/Sailing";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyIcon from "@mui/icons-material/Key";

const Home: NextPage = () => {
  return (
    <Container maxWidth="md">
      <h1>
        Hi, I&apos;m Nathan! <SailingIcon />
      </h1>
      <p>
        Software engineering student. Graduating in 2023. Website in
        development.
      </p>
      <ul>
        <li>
          <EmailIcon /> Contact me:{" "}
          <a href="mailto:nathan@whatshark.com">nathan@whatshark.com</a>
        </li>
        <li>
          <GitHubIcon /> GitHub repos:{" "}
          <a
            href="https://github.com/WhatShark/"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/WhatShark/
          </a>
        </li>
        <li>
          <KeyIcon /> Public key:{" "}
          <a href="/public-key.pub">C956 5B05 9C11 FC53</a>
        </li>
      </ul>

      <Stack>
        <div>
          <Image
            src={sharkImage}
            alt="Picture of a great white shark. Distorted."
          />
        </div>

        <div>
          <a
            href="https://www.credly.com/badges/58de69a7-8b90-407e-9615-e54155cbc554/public_url"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={certificationImage}
              alt="Certification of AWS Cloud Practioner."
            />
          </a>
        </div>
      </Stack>
    </Container>
  );
};

export default Home;
