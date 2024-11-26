"use client"

import ArtDirection from "../sections/ArtDirection";
import Branding from "../sections/Branding";
import HypeVideos from "../sections/HypeVideos";
import AllVentures from "../sections/AllVentures";
import ProductDesign from "../sections/ProductDesign";
import UXUI from "../sections/UXUI";

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
              return <UXUI />;
          default:
              return <AllVentures />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setActiveSection("allVentures")}>All Ventures</button>
        <button onClick={() => setActiveSection("artDirection")}>Art Direction</button>
        <button onClick={() => setActiveSection("branding")}>Branding</button>
              <button onClick={() => setActiveSection("hypeVideos")}>Hype Videos</button>
              <button onClick={() => setActiveSection("productDesign")}>Product Design</button>
              <button onClick={() => setActiveSection("uxUi")}>UX/UI</button>
      </nav>
      <div>{renderSection()}</div>
    </div>
  );
}
