import { DialogContent } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function VerifyStatus({ requestId, onClose }) {
  const [status, setStatus] = useState('Not Verified');

  const updateRequestStatus = async (newStatus) => {
    // Retrieve token from session storage
    const token = sessionStorage.getItem("codeToken");
    console.log("userToken:", token);

    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/api/request/${requestId}`, {
        method: "PATCH",
        body: JSON.stringify({ status: newStatus }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        console.log(`${requestId} status updated to ${newStatus}`);
        setStatus(newStatus);
      } else {
        console.error('Failed to update request status');
      }
    } catch (error) {
      console.error('Error updating request status:', error);
    }
  };

  return (
    <DialogContent sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
      <Button
        variant="contained"
        color='success'
        onClick={() => {
          updateRequestStatus('Verified');
          onClose(); // Close dialog after status update
        }}
      >
        Verified
      </Button>
      <Button
        variant="contained"
        color='error'
        onClick={() => {
          updateRequestStatus('Denied');
          onClose(); // Close dialog after status update
        }}
      >
        Denied
      </Button>
    </DialogContent>
  );
}
