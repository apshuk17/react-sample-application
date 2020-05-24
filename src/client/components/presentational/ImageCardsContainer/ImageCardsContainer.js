import React from "react";
import ImageCard from "../ImageCard/imageCard";
import ImageCardsWrapper from "./ImageCardsContainer.style";

const ImageCardsContainer = ({ rickMortyData }) => {
  return (
    <ImageCardsWrapper container spacing={2}>
      {rickMortyData?.map((data) => {
        return <ImageCard key={data.id} data={data}  />;
      })}
    </ImageCardsWrapper>
  );
};

export default ImageCardsContainer;
