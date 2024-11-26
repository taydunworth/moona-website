"use client";

import Image from "next/image";
import Button from "../Button/Button";
import styles from "./NavBar.module.css";

export function openContactModal() {
  console.log('clicked');
};

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/logoIcon.svg"
          alt="Logo Icon"
          width={29}
          height={33}
          priority
        />
      </div>
      <div className={styles.navLinks}>
        <Button
            text="Contact Us"
            onClick={openContactModal}
            variant="default"
          />
      </div>
    </nav>
  );
}
