import React from 'react';
import { Button } from '@mui/material';
import { connect } from 'react-redux';
import { SEARCH_PRODUCT, FILTER_PRICE_PRODUCT, FILTER_QUANTITY_PRODUCT } from '../../stateman/actions';

function SearchBar(props) {
  return (
      <div>
        <form>
          <input type="text" placeholder='Search by Name' onChange={(e) => props.dispatch({type: SEARCH_PRODUCT, key: e.target.value})}/> &emsp;
          <input type="number" min={0} placeholder='Filter by price' onChange={(e) => props.dispatch({type: FILTER_PRICE_PRODUCT, key: e.target.value})}/> &emsp;
          <input type="number" min={0} placeholder='Filter by quantity' onChange={(e) => props.dispatch({type: FILTER_QUANTITY_PRODUCT, key: e.target.value})}/> &emsp;
          <Button
            type="reset"
            onClick={() => {
              props.dispatch({type: SEARCH_PRODUCT, key: ''})                    
              props.dispatch({type: FILTER_PRICE_PRODUCT, key: ''})                        
              props.dispatch({type: FILTER_QUANTITY_PRODUCT, key: ''})                      
          }} style={{margin: '10px 0px 10px 0px'}} variant='contained' size="small">Clear All</Button>

          </form>
      </div>
  
    );
}

const mapStateToProps = (state) =>  {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps)(SearchBar);
