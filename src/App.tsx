import React, { useEffect } from 'react';
import './App.css';
import { fetchCourseAPI } from './state/action-creators';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Course from './components/Course/Course';
import Add from './components/Add/Add';
import Updated from './components/Updated/Updated';
function App() {
  const dispatch = useDispatch();
  const { fetchCourseAPI } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    fetchCourseAPI();
  }, []);
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Course></Course>} />
          <Route path='/add' element={<Add></Add>} />
          <Route path='/update/:id' element={<Updated></Updated>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
