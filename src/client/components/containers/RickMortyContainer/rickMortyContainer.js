import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRickMortyData } from '../../../actions';
import TwoColumnTemplateLayout from '../../templates/twocolumntemplate';
import { getAllFilterValues, getFilteredData } from '../../../../utils';
import { triggerFilter, resetFilter } from '../../../actions/filterActions';

const RickMortyContainer = ({
  rickMortyDataResultSet,
  fetchRickMortyData,
  filterTrigger,
  species,
  gender,
  origin,
  filterReset,
}) => {
  useEffect(() => {
    fetchRickMortyData();
  }, []);
  return (
    <TwoColumnTemplateLayout
      rickMortyData={rickMortyDataResultSet}
      species={species}
      gender={gender}
      origin={origin}
      filterTrigger={filterTrigger}
      noResults={!(rickMortyDataResultSet.length > 0)}
      filterReset={filterReset}
    />
  );
};

const loadData = (store) => store.dispatch(fetchRickMortyData());

const mapStateToProps = ({ rickMorty, filterTerms }) => ({
  rickMortyDataResultSet: getFilteredData(
    rickMorty?.showData?.results,
    filterTerms
  ),
  species: getAllFilterValues(
    rickMorty?.showData?.results,
    filterTerms,
    'species'
  ),
  gender: getAllFilterValues(
    rickMorty?.showData?.results,
    filterTerms,
    'gender'
  ),
  origin: getAllFilterValues(
    rickMorty?.showData?.results,
    filterTerms,
    'origin',
    'name'
  ),
});

const mapDispatchToProps = (dispatch) => ({
  fetchRickMortyData,
  filterTrigger: (filterType, filterValue, checkedState) =>
    dispatch(triggerFilter(filterType, filterValue, checkedState)),
  filterReset: () => dispatch(resetFilter()),
});

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(RickMortyContainer),
  loadData,
};
