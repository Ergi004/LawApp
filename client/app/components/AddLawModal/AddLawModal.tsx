import { Button, Modal, Box, TextField, Typography, Card } from "@mui/material";
import React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface IAddLawModalProps {
  handleOpen: any;
  handleClose: any;
  openModal: any;
}
const AddLawModal: React.FC<IAddLawModalProps> = ({
  handleClose,
  openModal,
}) => {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box>
          <Box sx={{ ...style, minWidth: "500px", minHeight: "500px" }}>
            <h2>Add Laws</h2>
            <Card>
              <Typography>Add PArtials</Typography>
            </Card>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddLawModal;
