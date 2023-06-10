// GridFactory.tsx
import * as commonImports from "../../../../commonCode/CommonImports";
import React from "react";
import * as TenantModel from "../../../../models/tenantModel";
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
  flatsArr:any
) => {
  const ownerDetailsGridColumns = commonImports.useMemo<
    commonImports.MRT_ColumnDef<TenantModel.ITenantViewModel>[]
  >(
    () => [
      {
        header: "Tenant Id",
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
        header: "Photo",
        accessorKey: "Photo",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Salutation",
        accessorKey: "Salutation",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Name",
        accessorKey: "Name",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Profession",
        accessorKey: "Profession",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Occupants",
        accessorKey: "NoOfPeople",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Native Address",
        accessorKey: "NativeAddress",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Work Address",
        accessorKey: "WorkAddress",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Primary Ph No",
        accessorKey: "PrimaryPhNo",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Secondary Ph No",
        accessorKey: "SecondaryPhNo",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Email",
        accessorKey: "Email",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Deposit Amount",
        accessorKey: "DepositAmount",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Deposit Paid Date",
        accessorKey: "DepositPaidDate",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Balance",
        accessorKey: "Balance",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "MoveIn Date",
        accessorKey: "MoveInDate",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Start Rent From Date",
        accessorKey: "StartRentFromDate",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Lease Type",
        accessorKey: "LeaseType",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Fixed Lease Start Date",
        accessorKey: "FixedLeaseStartDate",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Fixed Lease Period",
        accessorKey: "FixedLeasePeriod",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Fixed Lease Period Type",
        accessorKey: "FixedLeasePeriodType",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Emergency Contact Name",
        accessorKey: "EmergencyContactName",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Emergency Contact No",
        accessorKey: "EmergencyContactNo",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Emergency Contact Relation",
        accessorKey: "EmergencyContactRelation",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Parking ?",
        accessorKey: "ExtraService",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Created At",
        accessorKey: "createdAt",
        //customize normal cell render on normal non-aggregated rows
        Cell: ({ cell }) => (
          <>{commonImports.formatDate(cell.getValue<string>())}</>
        ),
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Updated At",
        accessorKey: "updatedAt",
        //customize normal cell render on normal non-aggregated rows
        Cell: ({ cell }) => (
          <>{commonImports.formatDate(cell.getValue<string>())}</>
        ),
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
    ],
    [getCommonEditTextFieldProps, usersArr]
  );
  return ownerDetailsGridColumns;
};
