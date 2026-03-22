import "./SectionHeader.css";
import { PiLightning } from "react-icons/pi";

const SectionHeader = ({ badge, title, subtitle, center = false }) => {
  return (
    <div className={`section-header ${center ? "section-header--center" : ""}`}>
      {badge && (
        <span className="solar-badge">
          <PiLightning size={14} className="solar-badge__icon" />
          {badge}
        </span>
      )}
      
      <h2 className="section-header__title">
        {title}
      </h2>
      
      {subtitle && (
        <p className="section-header__subtitle">
          {subtitle}
        </p>
      )}
      
      <div className="section-header__bar"></div>
    </div>
  );
};

export default SectionHeader;