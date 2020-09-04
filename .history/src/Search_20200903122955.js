import React, {useState} from 'react';
import './Search.css';
import 'reat-date-range/dist/styles.css'; //main style file
import 'react-date-range/dist/theme/default.css';
//theme css file
import {DateRangePicker} from 'react-date-range';

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };
  return <div className="search"></div>;
}

export default Search;
