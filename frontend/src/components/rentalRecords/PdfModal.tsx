import React from 'react';
import RentReceipt from './RentalReceiptPDF';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import { PDFViewer } from '@react-pdf/renderer';
import * as commonImports from "./../../commonCode/CommonImports";
import * as ReceiptGenUtility from "./../../utils/ReceiptGenUtility";
import * as OwnerModel from "./../../models/ownerDetails";
import * as PaymentMetaDataModel from "./../../models/rentReceiptMetaDataDetails";

type RentReceiptProps = {
  isOpen: boolean;
  onClose: () => void;
  rowValue:any;
  propertiesArr:any;
  flatsArr:any;
  tenantsArr:any;
  ownersArr:OwnerModel.IOwnerDetailsViewModel[];
  paymentMetaDataArr:PaymentMetaDataModel.IRentReceiptMetaDataDetailsViewModel[];
};

const PdfModal: React.FC<RentReceiptProps> = ({
  isOpen,
  onClose,
  rowValue,
  propertiesArr,
  flatsArr,
  tenantsArr,
  ownersArr,
  paymentMetaDataArr
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
          propertyDetails={ReceiptGenUtility.RetrievePropertyDetails(rowValue,propertiesArr,ownersArr)}
          billDetails={ReceiptGenUtility.RetrieveBillDetails(rowValue,flatsArr,tenantsArr)}
          electricityDetails={ReceiptGenUtility.RetrieveElectricityDetails(rowValue,flatsArr)}
          paymentDetails={ReceiptGenUtility.RetrievePaymentDetails(rowValue)}
          paymentOptionDetails={ReceiptGenUtility.RetrievePaymentOptionDetails(rowValue,propertiesArr,paymentMetaDataArr)}
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
