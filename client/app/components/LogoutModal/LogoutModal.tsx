import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/navigation";
import { useState } from "react";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LogoutModal = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    router.push('/')
  };

  return (
    <Box>
      <Button color="error" variant="contained" onClick={handleOpen}>
        Logout
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" sx={{margin: '20px auto', maxWidth: '320px', fontWeight: 'bold' }}>Are you sure you want to logout</Typography>
          <Box sx={{textAlign: 'center'}}>
            <Button variant="contained" color="error" sx={{margin: '10px 45px'}}  onClick={() => handleLogout()}>Yes</Button>
            <Button variant="outlined" color="error" sx={{margin: '10px 45px'}}  onClick={() => handleClose()}>No</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default LogoutModal;
