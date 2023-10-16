import React from 'react'
import './css/Style1.css'
import img from './image/icon-park-twotone_degree-hat.png'
import img1 from './image/icon-park-twotone_enquire.png'
import img2 from './image/icon-park-twotone_search.png'
import img3 from './image/icon-park-twotone_table-report.png'
import teacher from './image/Teacher.png'
import student from './image/Student.png'
import chat from './image/Chat-bubble.png'
import chat1 from './image/Chat-bubble1.png'
import chat2 from './image/Chat-bubble2.png'
import chat3 from './image/Row.png'
import chat4 from './image/Row1.png'

const Plateform = () => {
  return (
    <>
      <div className="main2">
        <div className="section1">
          <h1>
            <span>All-in-One </span>platform
            <br />
            that Makes Easier
          </h1>
          <p>
            We are more than a platform; We are your success partner. Discover
            our services to achieve your business and educational goals
          </p>
          <div className="icon">
            <div className="child">
              <img src={img2} alt="" />
              <h4>
                <span className="text">SEARCH</span> for vital <br />
                company <br />
                information{" "}
              </h4>
            </div>
            <div className="child">
              <img src={img1} alt="" />
              <h4>
                <span className="text">CONNECT</span> with the <br />
                resources to meet <br />
                your business needs{" "}
              </h4>
            </div>
          </div>
          <div className="icon1">
            <div className="child1">
              <img src={img3} alt="" />
              <h4>
                <span className="text">RESEARCH</span> and <br /> generate
                reports <br /> that drive growth
              </h4>
            </div>
            <div className="child1">
              <img src={img} alt="" />
              <h4>
                <span className="text">ACADEMY</span> to give you <br />
                the skills for success <br />
                in your career{" "}
              </h4>
            </div>
          </div>
        </div>
        <div className="section2">
          <img src={chat} alt="" />
          <br />
          <img src={chat3} alt="" />
          <br />
          <img src={chat4} alt="" />
          <br />
          <br />
          <img src={chat1} alt="" />
          <br />
          <img src={chat2} alt="" />
          <br />
          <img src={teacher} alt="" />
        </div>
        <div className="image">
          <img src={student} alt="" />
        </div>
      </div>
    </>
  );
}

export default Plateform
