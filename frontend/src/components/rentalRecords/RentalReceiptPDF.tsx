import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import * as RentReceiptModel from "./../../models/RentReceiptModel";

import propManageLogo from "./../../assets/propManageLogo.png";
// Define your styles
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 40,
  },
  header: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerPropertyDetails: {
    marginBottom: 10,
    textAlign: 'left'
  },
  headerText: {
    marginLeft: 'auto',
    fontSize: 10
  },
  logo: {
    height: 50,
    width: 50,
  },
  content: {
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
    textDecoration: 'underline',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    marginBottom: 10,
  },
  table: {
    marginBottom: 10,
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1pt solid black',
    alignItems: 'center',
    height: 24,
  },
  tableCell: {
    flex: 1,
    padding: 4,
  },
  footer: {
    borderTop: '1pt solid black',
    paddingTop: 5,
  },
  footerPart1: {
    marginBottom: 10,
  },
  footerPart2: {
    fontSize: 10,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 10,
  },
  copyRight: {
    fontSize: 8,
    textAlign: 'center',
    marginTop: 10,
  },
});

type RentReceiptProps = {
  propertyDetails: RentReceiptModel.IRentReceiptPropertyDetailsModel;
  billDetails:RentReceiptModel.IRentReceiptBillDetailsModel
  electricityDetails:RentReceiptModel.IRentReceiptEBillDetailsModel
  paymentDetails:RentReceiptModel.IRentReceiptPaymentDetailsModel
  paymentOptionDetails:RentReceiptModel.IRentReceiptPaymentOptionsModel
};

const RentReceipt: React.FC<RentReceiptProps> = ({
  propertyDetails,
  billDetails,
  electricityDetails,
  paymentDetails,
  paymentOptionDetails,
}: RentReceiptProps) => (
  <Document
    title={""}
    author="Rent Receipt Generator"
    subject="Rent Receipt"
    keywords="rent receipt, rent receipt generator, rent receipt pdf"
    creator="Rent Receipt Generator"
    producer="Rent Receipt Generator"
  >
    <Page style={styles.page}>
    <Text style={styles.title}>{(propertyDetails)===undefined?"":propertyDetails.propertyName}</Text>
      <View style={styles.header}>
        <Image src={propManageLogo} style={{ height: 100, width: 100 }}/>
        <View style={styles.headerPropertyDetails}>
          <Text style={[styles.headerText]}>Property Address: {(propertyDetails)===undefined?"":propertyDetails.propertyAddress}</Text>
          <Text style={[styles.headerText]}>Contact Number: {(propertyDetails)===undefined?"":propertyDetails.contactNumber}</Text>
          <Text style={[styles.headerText]}>Email: {(propertyDetails)===undefined?"":propertyDetails.emailId}</Text>
          <Text style={[styles.headerText]}>Owner Name: {(propertyDetails)===undefined?"":propertyDetails.ownerName}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Rent Receipt</Text>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Bill Details</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Bill No: </Text>
              <Text style={styles.tableCell}>{(billDetails)===undefined?"":billDetails.billNumber}</Text>
              <Text style={styles.tableCell}>Generated On: </Text>
              <Text style={styles.tableCell}>{"May, 2023"}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Room Number: </Text>
              <Text style={styles.tableCell}>{(billDetails)===undefined?"":billDetails.roomNumber}</Text>
              <Text style={styles.tableCell}>Tenant Name: </Text>
              <Text style={styles.tableCell}>{(billDetails)===undefined?"":billDetails.tenantName}</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Electricity Details</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Meter No:</Text>
              <Text style={styles.tableCell}>{(electricityDetails)===undefined?"":electricityDetails.meterNo}</Text>
              <Text style={styles.tableCell}>Per Unit Cost:</Text>
              <Text style={styles.tableCell}>{(electricityDetails)===undefined?"":electricityDetails.perUnitCost}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Old Reading:</Text>
              <Text style={styles.tableCell}>{(electricityDetails)===undefined?"":electricityDetails.oldReading}</Text>
              <Text style={styles.tableCell}>New Reading:</Text>
              <Text style={styles.tableCell}>{(electricityDetails)===undefined?"":electricityDetails.newReading}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Units Consumed:</Text>
              <Text style={styles.tableCell}>{(electricityDetails)===undefined?"":electricityDetails.unitsConsumed}</Text>
              <Text style={styles.tableCell}>Total Elec. Cost:</Text>
              <Text style={styles.tableCell}>{(electricityDetails)===undefined?"":electricityDetails.totalElecCost}</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Payment Details</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Rent[From Date- To Date]</Text>
              <Text style={styles.tableCell}>+ {(paymentDetails)===undefined?"":paymentDetails.totalRent}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Electricity</Text>
              <Text style={styles.tableCell}>+ {(paymentDetails)===undefined?"":paymentDetails.totalElectricity}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Old Balance</Text>
              <Text style={styles.tableCell}>+ {(paymentDetails)===undefined?"":paymentDetails.oldBalance}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Expense Added</Text>
              <Text style={styles.tableCell}>+ {(paymentDetails)===undefined?"":paymentDetails.expenseAdded}</Text>
            </View>
            <View style={[styles.tableRow, { backgroundColor: 'black', color: 'white' }]}>
              <Text style={[styles.tableCell, { fontWeight: 'bold' }]}>Total Due Amount</Text>
              <Text style={[styles.tableCell, { fontWeight: 'bold' }]}>{(paymentDetails)===undefined?"":paymentDetails.totalDueAmount}</Text>
            </View>
            <View style={[styles.tableRow, { border: '1pt solid black' }]}>
              <Text style={[styles.tableCell, { borderRight: '1pt solid black' }]}>Total Amount Paid</Text>
              <Text style={styles.tableCell}>{(paymentDetails)===undefined?"":paymentDetails.amountPaid}</Text>
            </View>
            <View style={[styles.tableRow, { border: '1pt solid black' }]}>
              <Text style={[styles.tableCell, { borderRight: '1pt solid black' }]}>Balance Due</Text>
              <Text style={styles.tableCell}>{(paymentDetails)===undefined?"":paymentDetails.balance}</Text>
            </View>
          </View>
          <Text style={{ textAlign: 'right' }}>{(paymentOptionDetails)===undefined?"Sample Signature": paymentOptionDetails.payment_signature}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerPart1}>
          <Text style={styles.label}>Payment Options</Text>
          <Text>[{(paymentOptionDetails)===undefined?"Sample LOGO":paymentOptionDetails.logo}] Bank Name: {(paymentOptionDetails)===undefined?"Sample Bank Name":paymentOptionDetails.bk_details_bk_name}, Address {"Sample Bank Address"} | Account Number: {(paymentOptionDetails)===undefined?"Sample ACC No.":paymentOptionDetails.bk_details_bk_acc_number}</Text>
          <Text>IFSC Code: {(paymentOptionDetails)===undefined?"Sample IFSC": paymentOptionDetails.bk_details_bk_ifsc} | Account Holder Name: {(paymentOptionDetails)===undefined?"Sample Account Holder": paymentOptionDetails.bk_details_acc_holder_name}</Text>
          <Text>UPI QR: {(paymentOptionDetails)===undefined?"Sample QR": paymentOptionDetails.payment_qr_code} | UPI ID: {(paymentOptionDetails)===undefined?"Sample UPI ID": paymentOptionDetails.wallet_details_upi_id}</Text>
        </View>
        <Text style={styles.footerPart2}>
          Made By Property Data Management System
        </Text>
        <Text style={styles.copyRight}>
          © 2023 All rights reserved. This document is for informational purposes only.
        </Text>
      </View>
    </Page>
  </Document>
);

export default RentReceipt;
