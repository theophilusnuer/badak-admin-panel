import { DialogContent } from '@mui/material';
import Button from '@mui/material/Button';

export default function VerifyStatus() {
    return (
        <DialogContent sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <Button variant="contained">Not Verified</Button>
            <Button variant="contained" color='success'>Verified</Button>
            <Button variant="contained" color='error'>Denied</Button>
        </DialogContent>
    );
}
