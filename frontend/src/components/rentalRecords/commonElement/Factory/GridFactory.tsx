// GridFactory.tsx
import * as commonImports from "../../../../commonCode/CommonImports";
import React from "react";
import * as RentDetailsModel from "../../../../models/allRentDetailsModel";
import * as CommonUtils from "../../../../utils/commonUtils";
type FieldConfig = {
  header: string;
  accessorKey: string;
  editable?: boolean;
  renderCell?: (cell: any) => JSX.Element;
};

export const GridFactory = (
  getCommonEditTextFieldProps: any,
  usersArr: any[],
  validationErrors: any,
  setValidationErrors: any,
  propertiesArr:any,
  flatsArr:any,
  tenantsArr:any,
) => {
  const rentDetailsGridColumns = commonImports.useMemo<
    commonImports.MRT_ColumnDef<RentDetailsModel.IRentDetailsViewModel>[]
  >(
    () => [
      {
        header: "Rental Record ID",
        accessorKey: "_id",
        enableColumnOrdering: false, //disable column ordering on this column
        enableSorting: false,
        enableHiding: false, //disable hiding on this column
        enableEditing: false, //disable editing on this column
        // editable: "never",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(
            cell,
            validationErrors,
            setValidationErrors,
            usersArr
          ),
        }),
      },
      {
        header: "Property Name",
        accessorKey: "propertyId",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        //customize normal cell render on normal non-aggregated rows
        Cell: ({ cell }) => (
          <>{CommonUtils.formatColumnFromArr("_id",cell.getValue<string>(),propertiesArr,"propertyName")}</>
        ),
      },
      {
        header: "Flat Name",
        accessorKey: "flatId",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        //customize normal cell render on normal non-aggregated rows
        Cell: ({ cell }) => (
          <>{CommonUtils.formatColumnFromArr("_id",cell.getValue<string>(),flatsArr,"roomName")}</>
        ),
      },
      {
        header: "Tenant Name",
        accessorKey: "tenantId",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        //customize normal cell render on normal non-aggregated rows
        Cell: ({ cell }) => (
          <>{CommonUtils.formatColumnFromArr("_id",cell.getValue<string>(),tenantsArr,"Name")}</>
        ),
      },
      {
        header: "Rent Start Date",
        accessorKey: "rentStartDate",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        //customize normal cell render on normal non-aggregated rows
        Cell: ({ cell }) => (
          <>{commonImports.formatDate(cell.getValue<string>())}</>
        ),
        
      },
      {
        header: "Rent End Date",
        accessorKey: "rentEndDate",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
       //customize normal cell render on normal non-aggregated rows
       Cell: ({ cell }) => (
        <>{commonImports.formatDate(cell.getValue<string>())}</>
      ),
      },
      {
        header: "Rent Amount",
        accessorKey: "rentAmount",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Building Maintenance Amount",
        accessorKey: "buildingMaintenanceAmount",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Previous Balance",
        accessorKey: "previousBalance",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Ebill Prev Meter Reading",
        accessorKey: "ebillPreviousMeterReading",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Ebill Prev Meter Reading Date",
        accessorKey: "ebillPreviousMeterReadingDate",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
         //customize normal cell render on normal non-aggregated rows
         Cell: ({ cell }) => (
          <>{commonImports.formatDate(cell.getValue<string>())}</>
        ),
      },
      {
        header: "Ebill Current Meter Reading",
        accessorKey: "ebillNewMeterReading",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Ebill Current Meter Reading Date",
        accessorKey: "ebillNewMeterReadingDate",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
         //customize normal cell render on normal non-aggregated rows
         Cell: ({ cell }) => (
          <>{commonImports.formatDate(cell.getValue<string>())}</>
        ),
      },
      {
        header: "Ebill Multiplier",
        accessorKey: "ebillMultiplier",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Ebill Units Consumed",
        accessorKey: "ebillUnitsConsumed",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Total Ebill Amount",
        accessorKey: "ebillAmount",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Total Amount To Be Paid",
        accessorKey: "totalAmount",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Paid Amount",
        accessorKey: "paidAmount",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Current Balance",
        accessorKey: "currentBalance",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Payment Date",
        accessorKey: "paymentDate",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
         //customize normal cell render on normal non-aggregated rows
         Cell: ({ cell }) => (
          <>{commonImports.formatDate(cell.getValue<string>())}</>
        ),
      },
      {
        header: "Payment Mode",
        accessorKey: "paymentMode",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Payment Reference",
        accessorKey: "paymentReference",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Payment Remarks",
        accessorKey: "paymentRemarks",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Payment Status",
        accessorKey: "paymentStatus",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Payment Receipt",
        accessorKey: "paymentReceipt",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Payment Receipt Date",
        accessorKey: "paymentReceiptDate",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
         //customize normal cell render on normal non-aggregated rows
         Cell: ({ cell }) => (
          <>{commonImports.formatDate(cell.getValue<string>())}</>
        ),
      },
      {
        header: "Payment Receipt Remarks",
        accessorKey: "paymentReceiptRemarks",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Payment Receipt Status",
        accessorKey: "paymentReceiptStatus",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Created At",
        accessorKey: "createdAt",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        //customize normal cell render on normal non-aggregated rows
        Cell: ({ cell }) => (
          <>{commonImports.formatDate(cell.getValue<string>())}</>
        ),
      },
      {
        header: "Updated At",
        accessorKey: "updatedAt",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        //customize normal cell render on normal non-aggregated rows
        Cell: ({ cell }) => (
          <>{commonImports.formatDate(cell.getValue<string>())}</>
        ),
      },
    ],
    [getCommonEditTextFieldProps, usersArr]
  );
  return rentDetailsGridColumns;
};
