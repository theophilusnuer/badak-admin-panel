import { Pagination } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useEffect, useState } from "react";


export default function Table() {
    const [requests, setRequests] = useState([]);

    const getRequests = async () => {
        const response = await fetch('http://localhost:4000/api/request', {
            method: 'GET',
            body: JSON.stringify(),
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoxLCJpYXQiOjE3MTI5MzYzODR9.E9C3paPTOf9bkN9YpAThQiQEsPIHBHiX_VBed5_sr3U',
                'Content-type': 'application/json'
            }
        });
        const data = await response.json();
        console.log("student data: ", data)
        setRequests(data);
    }

useEffect(() => {
    getRequests();
}, []);

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
                            <th className=" px-4 py-2 text-center">Statut</th>
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
                                <td className=" px-4 py-2 text-center">
                                    <p className=" rounded-lg bg-green-200">{request.status}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center my-4">
                    <Pagination count={10} color="primary" />
                </div>
            </div>
        </div>
    );
}