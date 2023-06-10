import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';


import propManageLogo from "./../../assets/propManageLogo.png";
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
  section: {
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    marginBottom: 10,
  },
  table: {
    width: '100%',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: '1pt solid black',
    alignItems: 'center',
    height: 24,
  },
  tableCell: {
    width: '20%',
    padding: 4,
  },
  footer: {
    borderTop: '1pt solid black',
    paddingTop: 10,
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
          <Text style={styles.subtitle}>Bill Details</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Bill Number</Text>
              <Text style={styles.tableCell}>Generated On</Text>
              <Text style={styles.tableCell}>Month</Text>
              <Text style={styles.tableCell}>Room Number</Text>
              <Text style={styles.tableCell}>Tenant Name</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>ABC123</Text>
              <Text style={styles.tableCell}>June 10, 2023</Text>
              <Text style={styles.tableCell}>June 2023</Text>
              <Text style={styles.tableCell}>101</Text>
              <Text style={styles.tableCell}>John Doe</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Electricity Details</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Meter Number</Text>
              <Text style={styles.tableCell}>Per Unit Cost</Text>
              <Text style={styles.tableCell}>Old Meter Reading</Text>
              <Text style={styles.tableCell}>New Meter Reading</Text>
              <Text style={styles.tableCell}>Total Units Consumed</Text>
              <Text style={styles.tableCell}>Total Electricity Bill Cost</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>12345</Text>
              <Text style={styles.tableCell}>$0.10</Text>
              <Text style={styles.tableCell}>1000</Text>
              <Text style={styles.tableCell}>1050</Text>
              <Text style={styles.tableCell}>50</Text>
              <Text style={styles.tableCell}>$5.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Payment Details</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Total Rent</Text>
              <Text style={styles.tableCell}>Period</Text>
              <Text style={styles.tableCell}>Total Electricity Bill</Text>
              <Text style={styles.tableCell}>Old Balance</Text>
              <Text style={styles.tableCell}>Expenses Added</Text>
              <Text style={styles.tableCell}>Total Due Amount</Text>
              <Text style={styles.tableCell}>Total Amount Paid</Text>
              <Text style={styles.tableCell}>Balance Due</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>$1000.00</Text>
              <Text style={styles.tableCell}>June 1, 2023 - June 30, 2023</Text>
              <Text style={styles.tableCell}>$5.00</Text>
              <Text style={styles.tableCell}>$0.00</Text>
              <Text style={styles.tableCell}>$0.00</Text>
              <Text style={styles.tableCell}>$1005.00</Text>
              <Text style={styles.tableCell}>$1000.00</Text>
              <Text style={styles.tableCell}>$5.00</Text>
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
