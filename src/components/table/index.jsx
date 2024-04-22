import { Pagination } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { Dialog, DialogTitle } from '@mui/material';
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
    const [userToken, setUserToken] = useState(null);

    const getRequests = async () => {
        const response = await fetch('https://badak-admin-portal-backend.onrender.com /api/request', {
            method: 'GET',
            body: JSON.stringify(),
            headers: {
                'Authorization': `Bearer ${userToken}`,
                'Content-type': 'application/json'
            }
        });
        const data = await response.json();
        console.log("student data: ", data)
        setRequests(data);
    }

    useEffect(() => {
        // Fetch user token from local storage or cookies
        const token = localStorage.getItem('userToken');
        setUserToken(token);
        // Fetch requests when component mounts
        if (token) {
            getRequests();
        }
    }, [userToken]);

    return (
        <div className="mt-10">
            <div className="border border-blue-700 rounded-md flex  mb-2 w-5/6 p-1">
                <div className="flex font-semibold ml-2 mr-10 6">
                    <FilterAltIcon color="primary" /> <p>Filter by</p>
                </div>
                <div className="">
                    <input placeholder="Date" type="date" />
                </div>
                <div className="">
                    <select name="diplome" id="diplome">
                        <option value="">--Please choose an option--</option>
                        <option value="Diploma">Diploma</option>
                        <option value="HND">HND</option>
                        <option value="Degree">Degree</option>
                        <option value="MSC">MSC</option>
                    </select>
                </div>
                <div className="">
                    <select name="diplome" id="diplome">
                        <option value="">--Select a statut--</option>
                        <option value="Diploma">Verified</option>
                        <option value="HND">In progress</option>
                        <option value="Degree">Rejected</option>
                    </select>
                </div>
                <div className="ml-4 ">
                    <button
                        className="px-3 py-1 bg-blue-700 text-white mr-10 rounded-md hover:bg-white hover:text-blue-700 text-sm">Filter</button>
                </div>

            </div>

            <div className="mt-10">
                <table className="bg-white shadow-lg w-full rounded-lg">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className=" px-4 py-2 text-left">ID</th>
                            <th className=" px-4 py-2 text-left">Date</th>
                            <th className=" px-4 py-2 text-left">Montant</th>
                            <th className=" px-4 py-2 text-left">Diplome</th>
                            <th className=" px-4 py-2 text-left">Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map(request => (
                            <tr key={request
                                ._id} className="border-b border-gray-100">
                                <td className=" px-4 py-2">{request.name}</td>
                                <td className=" px-4 py-2">{request.school}</td>
                                <td className=" px-4 py-2">{request.program}</td>
                                <td className=" px-4 py-2">{request.certificate}</td>
                                <td className=" px-4 py-2 text-left flex">
                                    <p className="p-1 mr-6 rounded-lg bg-green-200">{request.status}</p>
                                    <EditIcon onClick={handleOpen} />
                                </td>
                            </tr>
                        ))}
                    </tbody>

                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Edit Request</DialogTitle>
                        <VerifyStatus onClose={handleClose} />
                    </Dialog>

                </table>
                <div className="flex justify-center my-4">
                    <Pagination count={10} color="primary" />
                </div>
            </div>
        </div>
    );
}
