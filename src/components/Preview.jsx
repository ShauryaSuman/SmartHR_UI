import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import ReactMarkdown from 'react-markdown';
const Preview = ({ data, showModal, setShowModal }) => {
    return <Dialog open={showModal} onClose={()=>setShowModal(false)}  fullWidth maxWidth="md">
        <DialogTitle>Preview Job Description</DialogTitle>
        <DialogContent>
            <ReactMarkdown>{data}</ReactMarkdown>
        </DialogContent>
        <DialogActions>
            {/* <Button onClick={handleClose} color="primary">
        Close
      </Button> */}
            {/* <Button onClick={generatePDF} color="primary" variant="contained">
        Generate PDF
      </Button> */}
        </DialogActions>
    </Dialog>
};
export default Preview;