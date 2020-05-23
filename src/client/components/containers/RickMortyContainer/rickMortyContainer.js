import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRickMortyData } from "../../../actions";
import RickMortyComponent from "../../presentational/RickMortyPresentational/RickMortyPresentational";
import TwoColumnTemplateLayout from "../../templates/twocolumntemplate";
import { getAllFilterValues } from "../../../../utils";

const RickMortyContainer = ({
  rickMortyDataResultSet,
  fetchRickMortyData,
  species,
  gender,
  origin,
}) => {
  useEffect(() => {
    fetchRickMortyData();
  }, []);
  console.log("##data", rickMortyDataResultSet, species, gender, origin);
  return (
    <TwoColumnTemplateLayout
      rickMortyData={rickMortyDataResultSet}
      species={species}
      gender={gender}
      origin={origin}
    />
  );
};

const loadData = (store) => store.dispatch(fetchRickMortyData());

const mapStateToProps = ({ rickMorty }) => ({
  rickMortyDataResultSet: rickMorty?.showData?.results,
  species: getAllFilterValues(rickMorty?.showData?.results, "species"),
  gender: getAllFilterValues(rickMorty?.showData?.results, "gender"),
  origin: getAllFilterValues(rickMorty?.showData?.results, "origin", "name"),
});

export default {
  component: connect(mapStateToProps, { fetchRickMortyData })(
    RickMortyContainer
  ),
  loadData,
};
