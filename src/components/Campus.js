import React, { useState } from "react";
import "../styling/Campus.css";
import NavSidebar from "./side-top-nav-bars";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";

function Campus() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const campusData = Array(20).fill({
    campusId: "01",
    campusCode: "Andhra Pradesh",
    campusName: "Guntur",
    campusType: "01",
    status: "Updated",
    addressDno: "Updated",
    landmark: "Updated",
    location: "Updated",
    name: "Updated",
    pin: "Updated",
    principalMobile: "Updated",
    street: "Updated",
    cityId: "Updated",
    countryId: "Updated",
  });

  const handleViewClick = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <NavSidebar />
      <div className="campus-container">
        <div className="campus-header">
          <h2>Campus Details</h2>
          <div className="campus-controls">
            <button>Filter</button>
            <button>Export</button>
            <button>Add New Field</button>
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {campusData.map((campus, index) => (
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

        <div className="campus-pagination">
          <button>Previous</button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n}>{n}</button>
          ))}
          <button>Next</button>
        </div>

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
        )}
      </div>
    </div>
  );
}

export default Campus;
