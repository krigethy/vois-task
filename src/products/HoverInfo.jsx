import "./product-styles.css";

import { useState } from "react";
import tooltipStatic from "../assets/tooltip-static.svg";
import tooltipHover from "../assets/tooltip-hover.svg";

export default function HoverInfo({ productData }) {
  const [isHovered, setIsHovered] = useState(false);
  const { name, hoverInfo, imageUrl } = productData;

  return (
    <div className="hover-info">
      <img
        src={isHovered ? tooltipHover : tooltipStatic}
        alt="Hover Info"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="hover-info__icon"
      />
      {isHovered && (
        <div className="hover-info-popup">
          <img src={imageUrl} className="hover-info-popup__image" alt={name} />
          <div>
            <div className="heavy-font">Description</div>
            <div className="data-font">{hoverInfo.description}</div>
            <br />
            <div className="heavy-font">Key Features</div>
            {Object.keys(hoverInfo.features).map((key) => (
              <div key={key} className="space-between">
                <span className="data-font">
                  {convertCamelCaseToTitleString(key)}:
                </span>
                <span className="data-font">{hoverInfo.features[key]}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function convertCamelCaseToTitleString(string) {
  return string
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase());
}
