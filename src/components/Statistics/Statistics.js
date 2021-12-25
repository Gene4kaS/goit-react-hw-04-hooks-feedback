import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePerсentage }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>TOTAL: {total}</p>
      <p>Positive Feedback: {positivePerсentage} %</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePerсentage: PropTypes.number.isRequired,
};

export default Statistics;
