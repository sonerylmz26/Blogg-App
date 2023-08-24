import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import useBlogCall from '../../hooks/useBlogCall';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DeleteModal = ({modal, detailId, handleClose}) => {
  const {deleteBlogData} = useBlogCall()
const navigate = useNavigate()

  return (
    <div>
   
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align='center' id="modal-modal-title" variant="h6" component="h2">
          Do you really want to delete your blog? This process cannot be undone!
          </Typography>
          <Box sx={{display: "flex", justifyContent: "space-evenly", mt: 7}}>
            <Button
              sx={{ backgroundColor: "green", fontWeight: "600" }}
              color="primary"
              onClick={handleClose}
            >
             Cancel
            </Button>
            <Button
              sx={{ backgroundColor: "red", fontWeight: "600" }}
              color="primary"
          onClick={()=>{
            deleteBlogData("blogs",detailId)
navigate("/")
          }}
            >
              DELETE
            </Button>
          </Box>
          
        </Box>

        
      </Modal>
    </div>
  );
}
export default DeleteModal