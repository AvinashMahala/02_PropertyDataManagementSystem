import React from 'react';
import RentReceipt from './RentalReceiptPDF';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import { PDFViewer } from '@react-pdf/renderer';
import * as commonImports from "./../../commonCode/CommonImports";

type RentReceiptProps = {
  isOpen: boolean;
  onClose: () => void;
  propertyDetails: string;
  billNumber: string;
  generatedOn: string;
  rentDetails: string;
  tenantDetails: string;
  paymentOptions: string[];
};

const PdfModal: React.FC<RentReceiptProps> = ({
  isOpen,
  onClose,
  propertyDetails,
  billNumber,
  generatedOn,
  rentDetails,
  tenantDetails,
  paymentOptions,
}: RentReceiptProps) => (
  <commonImports.Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth
  PaperProps={{
    sx: {
      width: "100%",
      maxWidth: "85%!important",
      height:"100%",
      maxHeight:"95%!important",
    },
  }} 
  >
    <DialogTitle>Rent Receipt</DialogTitle>
    <DialogContent>
      <PDFViewer width="100%" height="98%">
        <RentReceipt
          propertyDetails={propertyDetails}
          billNumber={billNumber}
          generatedOn={generatedOn}
          rentDetails={rentDetails}
          tenantDetails={tenantDetails}
          paymentOptions={paymentOptions}
        />
      </PDFViewer>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </commonImports.Dialog>
);

export default PdfModal;
