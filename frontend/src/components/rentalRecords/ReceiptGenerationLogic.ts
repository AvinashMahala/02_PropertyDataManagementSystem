import * as FlatsModel from "./../../models/flatModel";
import * as PropertiesModel from "./../../models/allPropertiesModel";
import * as TenantsModel from "./../../models/tenantModel";
import * as CommonUtilsForDate from "./../../utils/formatDate";

import ReactPdf from "react-pdf";

const receiptGen = async (receiptData:any) => {
  
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