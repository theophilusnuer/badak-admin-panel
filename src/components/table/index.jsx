import { Pagination } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Dialog, DialogTitle } from "@mui/material";
import VerifyStatus from "../../pages/verify-status";

export default function Table() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [requests, setRequests] = useState([]);

  const getRequests = async () => {
    // Retrieve token from session storage
    const token = sessionStorage.getItem("userToken");
    console.log("userToken:", token);
    const response = await fetch(`${process.env.REACT_APP_URL}/api/request`, {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log("student data: ", data);
    setRequests(data);
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
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Montant</th>
              <th className="px-4 py-2 text-left">Diplome</th>
              <th className="px-4 py-2 text-left">Statut</th>
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
                    <p className="rounded-lg bg-green-200">{request.status}</p>
                  </td>
                  <td>
                    <EditIcon onClick={handleOpen} />
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
        <VerifyStatus onClose={handleClose} />
      </Dialog>
    </div>
  );
}
