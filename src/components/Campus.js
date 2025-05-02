import React, { useState } from "react";
import "../styling/Campus.css";
import NavSidebar from "./side-top-nav-bars";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";

function Campus() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const data = [
    { campusId: "01", CITY_CODE: "Guntur", CITY_NAME: "Gardens Branch", STATUS: "Active", DISTRICT_ID: "D1", ZONE: "Z1", PAYROLL_CITY_CODE: "PC1", SYNC_STATUS: "01", SYNC_DATA: "Guntur" },
    { campusId: "02", CITY_CODE: "Vijayawada", CITY_NAME: "Main Branch", STATUS: "Active", DISTRICT_ID: "D2", ZONE: "Z2", PAYROLL_CITY_CODE: "PC2", SYNC_STATUS: "01", SYNC_DATA: "Vijayawada" },
    { campusId: "03", CITY_CODE: "Hyd", CITY_NAME: "Hyd Branch", STATUS: "Active", DISTRICT_ID: "D3", ZONE: "Z3", PAYROLL_CITY_CODE: "PC3", SYNC_STATUS: "01", SYNC_DATA: "Hyd" },
    { campusId: "04", CITY_CODE: "Nellore", CITY_NAME: "Nellore Branch", STATUS: "Active", DISTRICT_ID: "D4", ZONE: "Z4", PAYROLL_CITY_CODE: "PC4", SYNC_STATUS: "01", SYNC_DATA: "Nellore" },
    { campusId: "05", CITY_CODE: "Vizag", CITY_NAME: "Vizag Branch", STATUS: "Active", DISTRICT_ID: "D5", ZONE: "Z5", PAYROLL_CITY_CODE: "PC5", SYNC_STATUS: "01", SYNC_DATA: "Vizag" },
    { CITY_ID: "06", CITY_CODE: "Tirupati", CITY_NAME: "Tirupati Branch", STATUS: "Active", DISTRICT_ID: "D6", ZONE: "Z6", PAYROLL_CITY_CODE: "PC6", SYNC_STATUS: "01", SYNC_DATA: "Tirupati" },
    { CITY_ID: "07", CITY_CODE: "Kurnool", CITY_NAME: "Kurnool Branch", STATUS: "Active", DISTRICT_ID: "D7", ZONE: "Z7", PAYROLL_CITY_CODE: "PC7", SYNC_STATUS: "01", SYNC_DATA: "Kurnool" },
    { CITY_ID: "08", CITY_CODE: "Anantapur", CITY_NAME: "Anantapur Branch", STATUS: "Active", DISTRICT_ID: "D8", ZONE: "Z8", PAYROLL_CITY_CODE: "PC8", SYNC_STATUS: "01", SYNC_DATA: "Anantapur" },
    { CITY_ID: "09", CITY_CODE: "Ongole", CITY_NAME: "Ongole Branch", STATUS: "Active", DISTRICT_ID: "D9", ZONE: "Z9", PAYROLL_CITY_CODE: "PC9", SYNC_STATUS: "01", SYNC_DATA: "Ongole" },
    { CITY_ID: "10", CITY_CODE: "Kadapa", CITY_NAME: "Kadapa Branch", STATUS: "Active", DISTRICT_ID: "D10", ZONE: "Z10", PAYROLL_CITY_CODE: "PC10", SYNC_STATUS: "01", SYNC_DATA: "Kadapa" },
    { CITY_ID: "11", CITY_CODE: "Machilipatnam", CITY_NAME: "Machili Branch", STATUS: "Active", DISTRICT_ID: "D11", ZONE: "Z11", PAYROLL_CITY_CODE: "PC11", SYNC_STATUS: "01", SYNC_DATA: "Machilipatnam" },
    { CITY_ID: "12", CITY_CODE: "Eluru", CITY_NAME: "Eluru Branch", STATUS: "Active", DISTRICT_ID: "D12", ZONE: "Z12", PAYROLL_CITY_CODE: "PC12", SYNC_STATUS: "01", SYNC_DATA: "Eluru" },
    { CITY_ID: "13", CITY_CODE: "Rajahmundry", CITY_NAME: "Rajahmundry Branch", STATUS: "Active", DISTRICT_ID: "D13", ZONE: "Z13", PAYROLL_CITY_CODE: "PC13", SYNC_STATUS: "01", SYNC_DATA: "Rajahmundry" },
    { CITY_ID: "14", CITY_CODE: "Rajahmundry", CITY_NAME: "Rajahmundry Branch", STATUS: "Active", DISTRICT_ID: "D13", ZONE: "Z13", PAYROLL_CITY_CODE: "PC13", SYNC_STATUS: "01", SYNC_DATA: "Rajahmundry" },
    { CITY_ID: "15", CITY_CODE: "Rajahmundry", CITY_NAME: "Rajahmundry Branch", STATUS: "Active", DISTRICT_ID: "D13", ZONE: "Z13", PAYROLL_CITY_CODE: "PC13", SYNC_STATUS: "01", SYNC_DATA: "Rajahmundry" },
    { CITY_ID: "16", CITY_CODE: "Rajahmundry", CITY_NAME: "Rajahmundry Branch", STATUS: "Active", DISTRICT_ID: "D13", ZONE: "Z13", PAYROLL_CITY_CODE: "PC13", SYNC_STATUS: "01", SYNC_DATA: "Rajahmundry" },
    { CITY_ID: "17", CITY_CODE: "Rajahmundry", CITY_NAME: "Rajahmundry Branch", STATUS: "Active", DISTRICT_ID: "D13", ZONE: "Z13", PAYROLL_CITY_CODE: "PC13", SYNC_STATUS: "01", SYNC_DATA: "Rajahmundry" },
  ];



  //pagination 
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 16;


  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);


  const totalPages = Math.ceil(data.length / rowsPerPage);


  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };








  const handleViewClick = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <NavSidebar />


      <div className="head-table-container">
        <div className="inner-container">
          <div className="campus-header">
            <h2>Campus </h2>
            <div className="campus-controls">
              <button className="filter">
                <i className="fa-solid fa-filter" style={{ color: "#054447", padding: "4px" }}></i> Filter <span className="notification">1</span>
              </button>
              <button className="export">
                <i class="fa-solid fa-arrow-up" style={{ color: "#054447", padding: "4px" }}></i> Export
              </button>
              <button className="add-new-field">
                + Add New Field
              </button>
            </div>
          </div>

          <div className="campus-table-wrapper">
            <table className="campus-table">
              <thead>
                <tr>
                  <th>Campus ID</th>
                  <th>Campus Code</th>
                  <th>Campus Name</th>
                  <th>Campus Type</th>
                  <th>Status</th>
                  <th>Address Dno</th>
                  <th>Land Mark</th>
                  <th>Location</th>
                  <th>Name</th>
                  <th>PIN</th>
                  <th>Principal Mobile</th>
                  <th>Street</th>
                  <th>City ID</th>
                  <th>Country ID</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((campus, index) => (
                  <tr key={index}>
                    <td>{campus.campusId}</td>
                    <td>{campus.campusCode}</td>
                    <td>{campus.campusName}</td>
                    <td>{campus.campusType}</td>
                    <td>{campus.status}</td>
                    <td>{campus.addressDno}</td>
                    <td>{campus.landmark}</td>
                    <td>{campus.location}</td>
                    <td>{campus.name}</td>
                    <td>{campus.pin}</td>
                    <td>{campus.principalMobile}</td>
                    <td>{campus.street}</td>
                    <td>{campus.cityId}</td>
                    <td>{campus.countryId}</td>
                    <td>
                      <button className="action-btn edit"><FaEdit /></button>
                      <button className="action-btn delete"><FaTrashAlt /></button>
                      <button className="action-btn view" onClick={() => handleViewClick(campus)}><FaEye /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>



          </div>

        </div>


      

      <div className="pagination-container">
        <button className="pagination-btn left-btn" onClick={goToPreviousPage} disabled={currentPage === 1}>
          ← Previous
        </button>

        <div className="page-numbers">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`page ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>


        <button className="pagination-btn right-btn" onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next →
        </button>
      </div>


      </div>
      {/*         
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>×</button>
              <h3>View</h3>
              <form>
                <div className="form-group">
                  <label>Campus ID</label>
                  <input type="text" value={modalData.campusId} readOnly />
                </div>
                <div className="form-group">
                  <label>Campus Code</label>
                  <input type="text" value={modalData.campusCode} readOnly />
                </div>
                <div className="form-group">
                  <label>Campus Name</label>
                  <input type="text" value={modalData.campusName} readOnly />
                </div>
                <div className="form-group">
                  <label>Campus Type</label>
                  <input type="text" value={modalData.campusType} readOnly />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <input type="text" value={modalData.status} readOnly />
                </div>
                <div className="form-group">
                  <label>Address Dno</label>
                  <input type="text" value={modalData.addressDno} readOnly />
                </div>
                <div className="form-group">
                  <label>Land Mark</label>
                  <input type="text" value={modalData.landmark} readOnly />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" value={modalData.location} readOnly />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" value={modalData.name} readOnly />
                </div>
                <div className="form-group">
                  <label>PIN</label>
                  <input type="text" value={modalData.pin} readOnly />
                </div>
                <div className="form-group">
                  <label>Principal Mobile</label>
                  <input type="text" value={modalData.principalMobile} readOnly />
                </div>
                <div className="form-group">
                  <label>Street</label>
                  <input type="text" value={modalData.street} readOnly />
                </div>
                <div className="form-group">
                  <label>City ID</label>
                  <input type="text" value={modalData.cityId} readOnly />
                </div>
                <div className="form-group">
                  <label>Country ID</label>
                  <input type="text" value={modalData.countryId} readOnly />
                </div>
                <div className="modal-actions">
                  <button type="button" className="delete-btn">Delete</button>
                  <button type="button" className="edit-btn">Edit</button>
                </div>
              </form>
            </div>
          </div>
        )} */}


    </>
  );
}

export default Campus;