import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import { State } from '../../state/reducer';

const Course = () => {
  const courses = useSelector((state: State) => state.courses);
  const dispatch = useDispatch();
  const { deleteCourse } = bindActionCreators(actionCreators, dispatch);
  const handelDeleteItem = (id: string) => {
    deleteCourse(id);
  };
  return (
    <div className='main-container'>
      <h2 className='course-heading'>Courses</h2>
      <div className='course-feature'>
        <button className='btn-addCourse'>Add Courses</button>
      </div>
      <div className='course-list'>
        {[...courses].map((item, index) => {
          return (
            <div className='course-item' key={index}>
              <div className='course-image'>
                <img src={item.image} alt={item.author} />
                <button className='course-edit' data-id=''>
                  <i className='fa fa-pencil' />
                </button>
                <button
                  className='course-remove'
                  data-id=''
                  onClick={() => handelDeleteItem(item.id)}
                >
                  <i className='fa fa-times' />
                </button>
              </div>
              <div className='course-content'>
                <h3 className='course-title'>{item.title}</h3>
                <div className='course-author'>{item.author}</div>
                <div className='course-meta'>
                  <div className='course-rating'>{item.rating}</div>
                  <div className='course-enroll'>{item.buyAmount}</div>
                </div>
                {item.bestSeller ? (
                  <div className='course-best-seller'>Best Seller</div>
                ) : (
                  ''
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Course;
