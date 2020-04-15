import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchQuote } from '../store/actions/quoteActions';

const TrumpQuote = props => {
  useEffect(() => {
    props.fetchQuote();
  }, []);

  return (
    <div>
      <h1>Trump Quotes</h1>
      {props.isFetching && (
        <Loader type="Audio" color="Purple" height={100} width={100} />
      )}
      {props.quote && <h3>"{props.quote}"</h3>}
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={props.fetchQuote}>What else does Donald say?</button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    quote: state.quotes.quote,
    isFetching: state.quotes.isFetching,
    error: state.quotes.error
  };
};

export default connect(
  mapStateToProps,
  { fetchQuote }
)(TrumpQuote);
