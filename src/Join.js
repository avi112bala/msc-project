import React from 'react'
import './css/Style.css'

const Join = () => {
  return (
    <>
      <div>
        <div className="main">
          <h1>
            Want to <span className="gradient-text">Join</span> Us?
          </h1>
          <p>
            To remain with us, it is essential that you diligently follow the
            steps provided
          </p>
          <div className="box">
            <div className="box1">
              <h1>Commencement of business </h1>
              <p>
                Invested shareholders must confirm <br />
                payment and office address{" "}
              </p>
              <table className="info-table">
                <tbody>
                  <tr>
                    <td
                      className="info-cell info-header"
                      style={{ color: "#0076CE" }}
                    >
                      Due Date
                    </td>
                    <td className="info-cell">
                      <span style={{ color: "#FF6666" }}>Penality fees</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="info-cell info-header">Within 180 </td>
                    <td className="info-cell">
                      <span className="rupees">₹50,000 </span>for the company
                    </td>
                  </tr>
                  <tr>
                    <td className="info-cell info-header">Days</td>
                    <td className="info-cell">
                      <span className="rupees">₹1,000 </span>/day for directors
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="box1">
              <h1>Auditor Appointment </h1>
              <p>
                Company informs new auditor and <br /> submits ADT.1 form to
                ROC.
              </p>
              <table className="info-table">
                <tbody>
                  <tr>
                    <td
                      className="info-cell info-header"
                      style={{ color: "#0076CE" }}
                    >
                      Due Date
                    </td>
                    <td className="info-cell">
                      <span style={{ color: "#FF6666" }}>Penality fees</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="info-cell info-header">Within 180 </td>
                    <td className="info-cell">
                      <span className="rupees">₹300 </span>per month.
                    </td>
                  </tr>
                  <tr>
                    <td className="info-cell info-header">Days</td>
                    <td className="info-cell" />
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="box1">
              <h1>DIN eKYC</h1>
              <p>
                Directors share personal information for <br />
                identification &amp; verification
              </p>
              <table className="info-table">
                <tbody>
                  <tr>
                    <td
                      className="info-cell info-header"
                      style={{ color: "#0076CE" }}
                    >
                      Due Date
                    </td>
                    <td className="info-cell">
                      <span style={{ color: "#FF6666" }}>Penality fees</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="info-cell info-header">Every Year </td>
                    <td className="info-cell">
                      <span className="rupees">₹5000</span> one time
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="box2">
            <div className="box3">
              <h1>DPT-3</h1>
              <p>
                Companies report money taken from <br /> people to ROC; auditors
                confirm details.{" "}
              </p>
              <table className="info-table">
                <tbody>
                  <tr>
                    <td
                      className="info-cell info-header"
                      style={{ color: "#0076CE" }}
                    >
                      Due Date
                    </td>
                    <td className="info-cell">
                      <span style={{ color: "#FF6666" }}>Penality fees</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="info-cell info-header">Within 30 days </td>
                    <td className="info-cell">
                      <span className="rupees">₹300</span> per month
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="box3">
              <h1>MCA Form AOC-4</h1>
              <p>
                It's like an official report card <br />
                for a company's documents{" "}
              </p>
              <table className="info-table">
                <tbody>
                  <tr>
                    <td
                      className="info-cell info-header"
                      style={{ color: "#0076CE" }}
                    >
                      Due Date
                    </td>
                    <td className="info-cell">
                      <span style={{ color: "#FF6666" }}>Penality fees</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="info-cell info-header">
                      On or Before
                      <br /> 30th <br /> November{" "}
                    </td>
                    <td className="info-cell">
                      <span className="rupees">₹200</span> per day <br />
                      (No upper limit)*
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="box3">
              <h1>MCA Form MGT-7</h1>
              <p>
                Companies must annually report activities <br /> and finances to
                the registrar.
              </p>
              <table className="info-table">
                <tbody>
                  <tr>
                    <td
                      className="info-cell info-header"
                      style={{ color: "#0076CE" }}
                    >
                      Due Date
                    </td>
                    <td className="info-cell">
                      <span style={{ color: "#FF6666" }}>Penality fees</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="info-cell info-header">
                      On or Before <br />
                      31st December
                    </td>
                    <td className="info-cell">
                      <span className="rupees"> ₹200</span> per day
                      <br />
                      (No upper limit)*{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="main2">
            <p>
              * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200
              every day until you file the form . There is no maximum penalty
              amount. So, if <br /> you don't file the form for a year, you will
              owe ₹73,000 per form
            </p>
          </div>
        </div>
      
      </div>
    </>
  );
}

export default Join
