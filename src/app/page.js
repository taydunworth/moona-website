"use client";

import { useState } from "react";
import SectionSwitcher from "./components/SectionSwitcher/SectionSwitcher";
import styles from "./page.module.css";

export default function Home() {
  const [activeSection, setActiveSection] = useState("allVentures");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SectionSwitcher
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </main>
    </div>
  );
}
