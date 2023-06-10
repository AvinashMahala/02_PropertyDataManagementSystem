import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';

import RentReceipt from './RentalReceiptPDF';

type RentReceiptProps = {
  isOpen: any;
  onClose: any;
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
  <div className="pdf-modal" style={{ display: isOpen ? 'block' : 'none' }}>
    <div className="pdf-modal-content">
      <button className="pdf-modal-close" onClick={onClose}>Close</button>
      <PDFViewer width="100%" height="500px">
        <RentReceipt
          propertyDetails={propertyDetails}
          billNumber={billNumber}
          generatedOn={generatedOn}
          rentDetails={rentDetails}
          tenantDetails={tenantDetails}
          paymentOptions={paymentOptions}
        />
      </PDFViewer>
    </div>
  </div>
);

export default PdfModal;
