import React from "react";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FilterComponentWrapper from "./filterComponent.style";

const FilterComponent = ({ filterComp }) => {
  const { name, values } = filterComp;
  return (
    <FilterComponentWrapper>
      <Typography variant="h4" gutterBottom>
        {name}
      </Typography>
      <div className="checkbox-wrapper">
        {values &&
          values.length > 0 &&
          values.map(({ label, checked }) => {
            return (
              <div key={label} className="checkbox-with-label">
                <Checkbox color="primary" checked={checked} />
                <span>{label}</span>
              </div>
            );
          })}
      </div>
    </FilterComponentWrapper>
  );
};

export default FilterComponent;
