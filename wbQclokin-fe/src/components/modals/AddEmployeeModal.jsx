import React, { useState } from 'react';
import { addEmployeeApi } from '../../api/addEmployeeApi';
import '../css/AddEmployeeModal.css';
import CameraIcon from '../../assets/CameraIcon'
import MarkIcon from '../../assets/MarkIcon';
import DeleteIcon from '../../assets/DeleteIcon';

const AddEmployeeModal = ({ onClose }) => {
  const [employeeData, setEmployeeData] = useState({
    phoneNumber: '090899',
    photoUrl: null,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    preferredName: '',
    email: '',
    department: 'Tech',
    jobTitle: 'UI/UX Designer',
    shiftTime: '9:00am to 4:00pm',
    dateOfHire: '',
    division: 'Managed Projects',
    employeeStatus: 'Intern',
  });

  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = 'token here';
      const response = await addEmployeeApi(employeeData, token);
      alert(response.responseMessage);
      onClose(); // Close the modal after submission
    } catch (error) {
      alert('Failed to add employee.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Personal Information</h2>
          <button className="close-button" onClick={onClose}>X</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="profile-section">
            <img src={employeeData.photoUrl || "https://static.vecteezy.com/system/resources/thumbnails/018/742/015/small/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"} alt="Profile" className="profile-picture"/>
            <button type="button" className="upload-button" style={{ display: 'flex', alignItems: 'center' }}>
      <CameraIcon />
      Upload Picture
    </button>
            <button type="button" className="delete-button" style={{ display: 'flex', alignItems: 'center' }}>
              <DeleteIcon />
              Delete
              </button>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="employeeId">Employee Id</label>
              <input
                type="text"
                id="employeeId"
                name="employeeId"
                value={employeeData.employeeId}
                readOnly
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={employeeData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={employeeData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={employeeData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="preferredName">Preferred Name</label>
              <input
                type="text"
                id="preferredName"
                name="preferredName"
                value={employeeData.preferredName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={employeeData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <h2 style={{ textAlign: 'center', margin: '3%' }}>Employment Information</h2>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <select
                id="department"
                name="department"
                value={employeeData.department}
                onChange={handleChange}
              >
                <option value="Tech">Tech</option>
                <option value="Audit">Audit</option>
                <option value="Finance">Finance</option>
                <option value="HR">HR</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="jobTitle">Job Title</label>
              <select
                id="jobTitle"
                name="jobTitle"
                value={employeeData.jobTitle}
                onChange={handleChange}
              >
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Data Analytics">Data Analytics</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="shiftTime">Shift Time</label>
              <select
                id="shiftTime"
                name="shiftTime"
                value={employeeData.shiftTime}
                onChange={handleChange}
              >
                <option value="9:00am to 4:00pm">9:00am to 4:00pm</option>
                <option value="9:00am to 5:00pm">9:00am to 5:00pm</option>
                <option value="8:30am to 5:30pm">8:30am to 5:30pm</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dateOfHire">Date of Hire</label>
              <input
                type="date"
                id="dateOfHire"
                name="dateOfHire"
                value={employeeData.dateOfHire}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="division">Division</label>
              <select
                id="division"
                name="division"
                value={employeeData.division}
                onChange={handleChange}
              >
                <option value="Managed Projects">Managed Projects</option>
                <option value="Research and Development">Research and Development</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="employeeStatus">Employment Status</label>
              <select
                id="employeeStatus"
                name="employeeStatus"
                value={employeeData.employeeStatus}
                onChange={handleChange}
              >
                <option value="Intern">Intern</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
              </select>
            </div>
          </div>

          <div className="modal-actions">
            <button type="submit" className="submit-button" style={{ display: 'flex', alignItems: 'center' }}>
              <MarkIcon />
              Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
