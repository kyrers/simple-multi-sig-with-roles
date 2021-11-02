import React from "react";
import { PageHeader } from "antd";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/kyrers/simple-multi-sig-with-roles" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="SIMPLE-MULTI-SIG-WITH-ROLES"
        subTitle="based on 🏗 scaffold-eth meta-multi-sig branch"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
