import type { NextPage } from "next";
import sharkImage from "../public/img/shark.png";
import certificationImage from "../public/img/aws-certified-cloud-practitioner.png";
import Link from "next/link";
import Image from "next/image";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import SailingIcon from "@mui/icons-material/Sailing";

const Home: NextPage = () => {
  return (
    <Container maxWidth="md">
      <h1>
        WhatShark <SailingIcon />
      </h1>
      <p>Software engineering student. Website in development.</p>
      <ul>
        <li>
          Contact me:{" "}
          <Link href="mailto:nathan@whatshark.com">nathan@whatshark.com</Link>
        </li>
        <li>
          GitHub repos:{" "}
          <Link href="https://github.com/WhatShark/">
            https://github.com/WhatShark/
          </Link>
        </li>
        <li>
          Public key: <Link href="/public-key.pub">C956 5B05 9C11 FC53</Link>
        </li>
      </ul>

      <Stack spacing={2}>
        <div>
          <Image
            src={sharkImage}
            alt="Picture of a great white shark. Distorted."
          />
        </div>

        <div>
          <Link
            href="https://www.credly.com/badges/58de69a7-8b90-407e-9615-e54155cbc554/public_url"
            target="_blank"
          >
            <a target="_blank">
              <Image
                src={certificationImage}
                alt="Certification of AWS Cloud Practioner."
              />
            </a>
          </Link>
        </div>
      </Stack>
    </Container>
  );
};

export default Home;
