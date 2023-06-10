import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';


import propManageLogo from "./../../assets/propManageLogo.png";
// Define your styles
// Define your styles
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 40,
  },
  header: {
    marginBottom: 20,
    borderBottom: '1pt solid black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 10,
    fontSize: 10,
  },
  content: {
    marginBottom: 20,
  },
  footer: {
    borderTop: '1pt solid black',
    paddingTop: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1pt solid black',
    paddingBottom: 5,
  },
  cell: {
    flex: 1,
    padding: 5,
  },
});

type RentReceiptProps = {
  propertyDetails: string;
  billNumber: string;
  generatedOn: string;
  rentDetails: string;
  tenantDetails: string;
  paymentOptions: string[];
};

const RentReceipt: React.FC<RentReceiptProps> = ({
  propertyDetails,
  billNumber,
  generatedOn,
  rentDetails,
  tenantDetails,
  paymentOptions,
}: RentReceiptProps) => (
  <Document
    title={billNumber}
    author="Rent Receipt Generator"
    subject="Rent Receipt"
    keywords="rent receipt, rent receipt generator, rent receipt pdf"
    creator="Rent Receipt Generator"
    producer="Rent Receipt Generator"
  >
    <Page style={styles.page}>
      <View style={styles.header}>
        <Image src={propManageLogo} style={{ height: 100, width: 100 }}/>
        <View>
          <Text style={styles.headerText}>House Name</Text>
          <Text style={styles.headerText}>Owner Details</Text>
          <Text style={styles.headerText}>Property Details</Text>
          <Text style={styles.headerText}>Contact Number</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Rent Receipt</Text>
        <View style={styles.section}>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text>Bill Number:</Text>
              <Text>Generated On:</Text>
              <Text>Month:</Text>
              <Text>Room Number:</Text>
              <Text>Tenant Name:</Text>
            </View>
            <View style={styles.cell}>
              <Text>ABC123</Text>
              <Text>June 10, 2023</Text>
              <Text>June 2023</Text>
              <Text>101</Text>
              <Text>John Doe</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Electricity Details:</Text>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text>Meter Number:</Text>
              <Text>Per Unit Cost:</Text>
              <Text>Old Meter Reading:</Text>
              <Text>New Meter Reading:</Text>
              <Text>Total Units Consumed:</Text>
              <Text>Total Electricity Bill Cost:</Text>
            </View>
            <View style={styles.cell}>
              <Text>12345</Text>
              <Text>$0.10</Text>
              <Text>1000</Text>
              <Text>1050</Text>
              <Text>50</Text>
              <Text>$5.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Payment Details:</Text>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text>Total Rent:</Text>
              <Text>Period:</Text>
              <Text>Total Electricity Bill:</Text>
              <Text>Old Balance:</Text>
              <Text>Expenses Added:</Text>
              <Text>Total Due Amount:</Text>
              <Text>Total Amount Paid:</Text>
              <Text>Balance Due:</Text>
            </View>
            <View style={styles.cell}>
              <Text>$1000.00</Text>
              <Text>June 1, 2023 - June 30, 2023</Text>
              <Text>$5.00</Text>
              <Text>$0.00</Text>
              <Text>$0.00</Text>
              <Text>$1005.00</Text>
              <Text>$1000.00</Text>
              <Text>$5.00</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>Payment Options:</Text>
        <Text>Bank Details: Bank XYZ</Text>
        <Text>UPI Options: UPI ABC</Text>
        <Text>Bank Name: Bank XYZ</Text>
        <Text>Bank Address: Address XYZ</Text>
        <Text>Bank Account Number: 1234567890</Text>
        <Text>IFSC Code: ABCD1234</Text>
        <Text>Account Holder Name: John Doe</Text>
      </View>
    </Page>
  </Document>
);

export default RentReceipt;
