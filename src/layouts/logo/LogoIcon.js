import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import LogoDark from "../../../assets/images/logos/logo-dark.svg";
import LogoMuis from "../../../assets/images/logos/muisLogo.svg"

const LogoIcon = () => {
  return (
    <Link href="/">
      <Image src={LogoMuis} alt={LogoDark} with={100} height={100} />
    </Link>
  );
};

export default LogoIcon;
