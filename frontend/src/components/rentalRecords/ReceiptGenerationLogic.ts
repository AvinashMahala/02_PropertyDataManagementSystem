import * as FlatsModel from "./../../models/flatModel";
import * as PropertiesModel from "./../../models/allPropertiesModel";
import * as TenantsModel from "./../../models/tenantModel";
import * as CommonUtilsForDate from "./../../utils/formatDate";

import ReactPdf from "react-pdf";

const receiptGen = async (receiptData:any) => {
  // try {
  //   // Create a new PDF document
  //   const pdfDoc = await PDFDocument.create();

  //   // Add a new page to the document
  //   const page = pdfDoc.addPage();

  //   // Set the font for the document
  //   const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  //   // Set the initial y-position for the content
  //   let y = page.getHeight() - 50;

  //   // Add content to the page
  //   page.drawText(`Receipt for Property Name: ${receiptData.propertyName}`, {
  //     x: 50,
  //     y,
  //     font,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   y -= 20;
  //   page.drawText(`Flat Name: ${receiptData.flatName}`, {
  //     x: 50,
  //     y,
  //     font,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   y -= 20;
  //   page.drawText(`Tenant Name: ${receiptData.tenantName}`, {
  //     x: 50,
  //     y,
  //     font,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   y -= 20;
  //   page.drawText(`Rent Amount: $${receiptData.rentAmount}`, {
  //     x: 50,
  //     y,
  //     font,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   y -= 20;
  //   page.drawText(`Payment Date: ${CommonUtilsForDate.formatDate(receiptData.paymentDate)}`, {
  //     x: 50,
  //     y,
  //     font,
  //     size: 12,
  //     color: rgb(0, 0, 0),
  //   });

  //   // Generate the PDF bytes
  //   const pdfBytes = await pdfDoc.save();

  //   // Create a Blob from the PDF bytes
  //   const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

  //   // Generate a download URL for the PDF
  //   const downloadURL = URL.createObjectURL(pdfBlob);

  //   // Open a new window or navigate to the download URL
  //   window.open(downloadURL);
  // } catch (error) {
  //   console.error("Error generating receipt:", error);
  // }
};


  const generateReceipt = (rowData:any,flatsArr:FlatsModel.IFlatViewModel[],propertiesArr:PropertiesModel.IPropertyDetailsViewModel[],teantsArr:TenantsModel.ITenantViewModel[]) => {
    // Logic to generate rent receipt using the rowData
    // rowData contains the data for the specific row clicked
  
    // Example implementation:
    const { propertyId, flatId, tenantId, rentAmount, paymentDate } = rowData;

    const propertyName = propertiesArr.filter((property)=>property._id===propertyId)[0].propertyName;
    const flatName = flatsArr.filter((flat)=>flat._id===flatId)[0].roomName;
    const tenantName = teantsArr.filter((tenant)=>tenant._id===tenantId)[0].Name;


    const receiptData = {
      propertyName,
      flatName,
      tenantName,
      rentAmount,
      paymentDate,
      // Include any other necessary data for the receipt
    };
  
    // Call a function to generate the receipt or navigate to a receipt generation page
    // For example:
    receiptGen(receiptData);
  };
  

export function generateRentReceipt(rowData:any,flatsArr:FlatsModel.IFlatViewModel[],propertiesArr:PropertiesModel.IPropertyDetailsViewModel[],teantsArr:TenantsModel.ITenantViewModel[]){
    console.log("Hi");
    generateReceipt(rowData.original,flatsArr,propertiesArr,teantsArr);
}