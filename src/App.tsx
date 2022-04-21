import React, { useEffect } from 'react';
import './App.css';
import { fetchCourseAPI } from './state/action-creators';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const { fetchCourseAPI } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    fetchCourseAPI();
  }, []);
  return <div className='App'></div>;
}

export default App;
