import React from "react";
import "../styling/Modal.css";

function Modal({ data, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h3>View</h3>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-row">
            <label>Campus ID</label>
            <input type="text" value={data.campusId} readOnly />
          </div>
          <div className="modal-row">
            <label>Campus Code</label>
            <input type="text" value={data.campusCode} readOnly />
          </div>
          <div className="modal-row">
            <label>Campus Name</label>
            <input type="text" value={data.campusName} readOnly />
          </div>
          <div className="modal-row">
            <label>Campus Type</label>
            <input type="text" value={data.campusType} readOnly />
          </div>
          <div className="modal-row">
            <label>Status</label>
            <input type="text" value={data.status} readOnly />
          </div>
          <div className="modal-row">
            <label>Address Dno</label>
            <input type="text" value={data.addressDno} readOnly />
          </div>
          <div className="modal-row">
            <label>Land Mark</label>
            <input type="text" value={data.landmark} readOnly />
          </div>
          <div className="modal-row">
            <label>Location</label>
            <input type="text" value={data.location} readOnly />
          </div>
          <div className="modal-row">
            <label>PIN</label>
            <input type="text" value={data.pin} readOnly />
          </div>
          <div className="modal-row">
            <label>City ID</label>
            <input type="text" value={data.cityId} readOnly />
          </div>
          <div className="modal-row">
            <label>Country ID</label>
            <input type="text" value={data.countryId} readOnly />
          </div>
        </div>
        <div className="modal-footer">
          <button className="modal-delete">Delete</button>
          <button className="modal-edit">Edit</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
