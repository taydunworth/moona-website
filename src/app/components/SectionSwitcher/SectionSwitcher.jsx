"use client";

import Button from "../Button/Button";
import ArtDirection from "../../sections/ArtDirection";
import Branding from "../../sections/Branding";
import HypeVideos from "../../sections/HypeVideos";
import AllVentures from "../../sections/AllVentures";
import ProductDesign from "../../sections/ProductDesign";
import UxUi from "../../sections/UXUI";
import styles from "./SectionSwitcher.module.css";

export default function SectionSwitcher({ activeSection, setActiveSection }) {
  const renderSection = () => {
    switch (activeSection) {
      case "artDirection":
        return <ArtDirection />;
      case "branding":
        return <Branding />;
      case "hypeVideos":
        return <HypeVideos />;
      case "productDesign":
        return <ProductDesign />;
      case "uxUi":
        return <UxUi />;
      default:
        return <AllVentures />;
    }
  };

  const getButtonVariant = (section) =>
    section === activeSection ? "active" : "default";

  return (
    <div>
      <nav className={styles.nav}>
        <Button
          text="All Ventures"
          onClick={() => setActiveSection("allVentures")}
          variant={getButtonVariant("allVentures")}
        />
        <Button
          text="Art Direction"
          onClick={() => setActiveSection("artDirection")}
          variant={getButtonVariant("artDirection")}
        />
        <Button
          text="Branding"
          onClick={() => setActiveSection("branding")}
          variant={getButtonVariant("branding")}
        />
        <Button
          text="Hype Videos"
          onClick={() => setActiveSection("hypeVideos")}
          variant={getButtonVariant("hypeVideos")}
        />
        <Button
          text="Product Design"
          onClick={() => setActiveSection("productDesign")}
          variant={getButtonVariant("productDesign")}
        />
        <Button
          text="UX/UI"
          onClick={() => setActiveSection("uxUi")}
          variant={getButtonVariant("uxUi")}
        />
      </nav>
      <div>{renderSection()}</div>
    </div>
  );
}
