import { Pagination } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Dialog, DialogTitle } from "@mui/material";
import VerifyStatus from "../../pages/verify-status";

export default function Table() {
  const [open, setOpen] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null); // State to store the selected request ID

  const handleOpen = (requestId) => {
    setOpen(true);
    setSelectedRequestId(requestId); // Set the selected request ID when opening the dialog
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRequestId(null); // Reset the selected request ID when closing the dialog
  };

  const [requests, setRequests] = useState([]);

  const getRequests = async () => {
    // Retrieve token from session storage
    const token = sessionStorage.getItem("codeToken");
    
    const response = await fetch(`${process.env.REACT_APP_URL}/api/request`, {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    
    // Update status color based on response
    const updatedRequests = data.map((request) => {
      let status = Array.isArray(request.status) ? request.status[0] : request.status; // Handle array format
      let statusColor;
      switch (status) {
        case 'Verified':
          statusColor = 'green';
          break;
        case 'Denied':
          statusColor = 'red';
          break;
        default:
          statusColor = 'blue';
          break;
      }
      console.log("Request ID:", request._id, "Status:", status, "Status Color:", statusColor);
      return {
        ...request,
        statusColor: statusColor,
      };
    });

    console.log("Updated Requests:", updatedRequests);
    setRequests(updatedRequests);
};


  useEffect(() => {
    getRequests();
  }, []);

  return (
    <div className="mt-10">
      <div className="border border-blue-700 rounded-md flex flex-col md:flex-row items-center justify-center mb-2 w-full md:w-5/6 p-1">
        <div className="flex font-semibold ml-2 md:ml-0 mr-10 md:mr-6">
          <FilterAltIcon color="primary" />
          <p className="ml-1">Filter by</p>
        </div>
        <div className="md:w-40 mb-2 md:mb-0 md:mr-2">
          <input placeholder="Date" type="date" className="w-full" />
        </div>
        <div className="md:w-40 mb-2 md:mb-0 md:mr-2">
          <select name="diplome" id="diplome" className="w-full">
            <option value="">--Please choose an option--</option>
            <option value="Diploma">Diploma</option>
            <option value="HND">HND</option>
            <option value="Degree">Degree</option>
            <option value="MSC">MSC</option>
          </select>
        </div>
        <div className="md:w-40 mb-2 md:mb-0 md:mr-2">
          <select name="statut" id="statut" className="w-full">
            <option value="">--Select a status--</option>
            <option value="Verified">Verified</option>
            <option value="In progress">In progress</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div className="ml-4">
          <button className="px-3 py-1 bg-blue-700 text-white mr-10 rounded-md hover:bg-white hover:text-blue-700 text-sm">
            Filter
          </button>
        </div>
      </div>

      <div className="mt-10">
        <table className="bg-white shadow-lg w-full rounded-lg">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">School</th>
              <th className="px-4 py-2 text-left">Program</th>
              <th className="px-4 py-2 text-left">Certificate</th>
              <th className="px-4 py-2 text-center">Status</th>
              <th className="px-4 py-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(requests) &&
              requests.map((request) => (
                <tr key={request._id} className="border-b border-gray-100">
                  <td className="px-4 py-2">{request.name}</td>
                  <td className="px-4 py-2">{request.school}</td>
                  <td className="px-4 py-2">{request.program}</td>
                  <td className="px-4 py-2">{request.certificate}</td>
                  <td className="px-4 py-2 text-center">
                  <p className={`rounded-lg text-white ${request.statusColor === 'green' ? 'bg-green-600' : request.statusColor === 'red' ? 'bg-red-600' : 'bg-blue-600'}`}>
    {request.status}
  </p>
                  </td>
                  <td>
              <EditIcon onClick={() => handleOpen(request._id)} /> {/* Pass the requestId to handleOpen */}
            </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="flex justify-center my-4">
          <Pagination count={10} color="primary" />
        </div>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Request</DialogTitle>
        {/* Pass the selectedRequestId to the VerifyStatus component */}
        <VerifyStatus requestId={selectedRequestId} onClose={handleClose} />
      </Dialog>
    </div>
  );
}
