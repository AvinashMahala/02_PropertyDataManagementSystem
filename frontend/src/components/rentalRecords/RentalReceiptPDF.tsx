import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 40,
  },
  header: {
    marginBottom: 20,
    borderBottom: '1pt solid black',
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
  <Document>
    <Page style={styles.page}>
      <View style={styles.header}>
        <Text>Property Details: {propertyDetails}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Rent Receipt for {tenantDetails}</Text>
        <Text>Bill Number: {billNumber}</Text>
        <Text>Generated On: {generatedOn}</Text>
        <Text>Rent Details: {rentDetails}</Text>
        <Text>Tenant Details: {tenantDetails}</Text>
      </View>
      <View style={styles.footer}>
        <Text>Payment Options:</Text>
        {paymentOptions.map((option, index) => (
          <Text key={index}>{option}</Text>
        ))}
      </View>
    </Page>
    <Page style={styles.page}>
      <View style={styles.header}>
        <Text>Property Details: {propertyDetails}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Rent Receipt</Text>
        <Text>Bill Number: {billNumber}</Text>
        <Text>Generated On: {generatedOn}</Text>
        <Text>Rent Details: {rentDetails}</Text>
        <Text>Tenant Details: {tenantDetails}</Text>
      </View>
      <View style={styles.footer}>
        <Text>Payment Options:</Text>
        {paymentOptions.map((option, index) => (
          <Text key={index}>{option}</Text>
        ))}
      </View>
    </Page>
    {/* Add more Page components if needed */}
  </Document>
);

export default RentReceipt;
