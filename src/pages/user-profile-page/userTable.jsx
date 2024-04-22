import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { Dialog, DialogTitle } from '@mui/material';
import VerifyStatus from "../../pages/verify-status";
import { useState } from 'react';


export default function Table() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="mt-10">

      <div className="mt-10">
        <table className="bg-white shadow-lg w-full rounded-lg" style={{ marginBottom: "50px" }}>
          <thead>
            <tr className="border-b border-gray-100">
              <th className=" px-4 py-2 text-left">Fullname</th>
              <th className=" px-4 py-2 text-left">Programme</th>
              <th className=" px-4 py-2 text-left">Name of School</th>
              <th className=" px-4 py-2 text-left">Certification</th>
              <th className=" px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className=" px-4 py-2">John Doe</td>
              <td className=" px-4 py-2">Computer Science</td>
              <td className=" px-4 py-2">UPSA</td>
              <td className=" px-4 py-2">Degree</td>
              <td className=" px-4 py-2 text-left flex">
                <p className="p-1 mr-6 rounded-lg bg-green-200">Not Verified</p>
                <Link>
                  <EditIcon onClick={handleOpen} />
                </Link>
              </td>
            </tr>
            <tr className="border-b border-gray-100 items-center">
              <td className=" px-4 py-2">John Doe</td>
              <td className=" px-4 py-2">Computer Science</td>
              <td className=" px-4 py-2">UPSA</td>
              <td className=" px-4 py-2">Degree</td>
              <td className=" px-4 py-2 text-center">
                <p className=" rounded-lg bg-green-200">Not Verified</p>
              </td>
            </tr>
            <tr className="border-b border-gray-100 items-center">
              <td className=" px-4 py-2">John Doe</td>
              <td className=" px-4 py-2">Computer Science</td>
              <td className=" px-4 py-2">UPSA</td>
              <td className=" px-4 py-2">Degree</td>
              <td className=" px-4 py-2 text-center">
                <p className=" rounded-lg bg-green-200">Not Verified</p>
              </td>
            </tr>
            <tr className="border-b border-gray-100 items-center">
              <td className=" px-4 py-2">John Doe</td>
              <td className=" px-4 py-2">Computer Science</td>
              <td className=" px-4 py-2">UPSA</td>
              <td className=" px-4 py-2">Degree</td>
              <td className=" px-4 py-2 text-center">
                <p className=" rounded-lg bg-green-200">Not Verified</p>
              </td>
            </tr>
            <tr className="border-b border-gray-100 items-center">
              <td className=" px-4 py-2">John Doe</td>
              <td className=" px-4 py-2">Computer Science</td>
              <td className=" px-4 py-2">UPSA</td>
              <td className=" px-4 py-2">Degree</td>
              <td className=" px-4 py-2 text-center">
                <p className=" rounded-lg bg-green-200">Not Verified</p>
              </td>
            </tr>
          </tbody>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Request</DialogTitle>
            <VerifyStatus onClose={handleClose} />
          </Dialog>
        </table>
      </div>
    </div>
  );
}
