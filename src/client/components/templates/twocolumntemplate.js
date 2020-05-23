import React from "react";
import Grid from "@material-ui/core/Grid";
import FilterComponent from "../../components/presentational/FilterComponent/filterComponent";
import ImageCardsContainer from "../presentational/ImageCardsContainer/ImageCardsContainer";
import {
  LayoutContainer,
  LeftSection,
  RightSection,
} from "./twocolumntemplate.style";

const TwoColumnTemplateLayout = ({ rickMortyData, species, gender, origin }) => {
  return (
    <LayoutContainer>
      <Grid container>
        <LeftSection item xs={12} lg={3}>
          <FilterComponent filterComp={species} />
          <FilterComponent filterComp={gender} />
          <FilterComponent filterComp={origin} />
        </LeftSection>
        <RightSection item xs={12} lg={9}>
          <ImageCardsContainer rickMortyData={rickMortyData} />
        </RightSection>
      </Grid>
    </LayoutContainer>
  );
};

export default TwoColumnTemplateLayout;
