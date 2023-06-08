// GridFactory.tsx
import * as commonImports from "../../../../commonCode/CommonImports";
import React from "react";
import * as PropertiesModel from "../../../../models/allPropertiesModel";

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
  rentReceiptMetaDataArr:any,
  ownersArr:any,
) => {
  const ownerDetailsGridColumns = commonImports.useMemo<
    commonImports.MRT_ColumnDef<PropertiesModel.IPropertyDetailsViewModel>[]
  >(
    () => [
      {
        header: "Property Id",
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
            usersArr,
            ownersArr,
            rentReceiptMetaDataArr
          ),
        }),
      },
      {
        header: "Name",
        accessorKey: "propertyName",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(
            cell,
            validationErrors,
            setValidationErrors,
            usersArr,
            ownersArr,
            rentReceiptMetaDataArr
          ),
        }),
      },
      {
        header: "Owned By",
        accessorKey: "ownerId",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(
            cell,
            validationErrors,
            setValidationErrors,
            usersArr,
            ownersArr,
            rentReceiptMetaDataArr
          ),
        }),
        Cell: ({ cell }) => {
          const ownerId = cell.getValue<string>();
          const ownedBy = ownersArr.find((ownedBy:any) => ownedBy._id === ownerId);

          if (ownedBy) {
            return <>{ownedBy.ownerName}</>;
          }
          return <>{"None"}</>;
        },
      },
      {
        header: "Rent Receipt Meta Data",
        accessorKey: "rentReceiptMetaDataId",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(
            cell,
            validationErrors,
            setValidationErrors,
            usersArr,
            ownersArr,
            rentReceiptMetaDataArr
          ),
        }),
        Cell: ({ cell }) => {
          const rentReceiptMetaDataId = cell.getValue<string>();
          const rentReceiptMetaData = rentReceiptMetaDataArr.find((rentReceiptMetaData:any) => rentReceiptMetaData._id === rentReceiptMetaDataId);

          if (rentReceiptMetaData) {
            return <>{rentReceiptMetaData.rentReceiptMetaDataRefNm}</>;
          }
          return <>{"None"}</>;
        },
      },
      {
        header: "Type",
        accessorKey: "propertyType",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(
            cell,
            validationErrors,
            setValidationErrors,
            usersArr,
            ownersArr,
            rentReceiptMetaDataArr
          ),
        }),
      },
      {
        header: "Address",
        accessorKey: "propertyAddress",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(
            cell,
            validationErrors,
            setValidationErrors,
            usersArr,
            ownersArr,
            rentReceiptMetaDataArr
          ),
        }),
      },
      {
        header: "Take Rent Of",
        accessorKey: "propertyTakeRentOf",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(
            cell,
            validationErrors,
            setValidationErrors,
            usersArr,
            ownersArr,
            rentReceiptMetaDataArr
          ),
        }),
      },
      {
        header: "Created Date",
        accessorKey: "createdAt",
        //customize normal cell render on normal non-aggregated rows
        Cell: ({ cell }) => (
          <>{commonImports.formatDate(cell.getValue<string>())}</>
        ),
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(
            cell,
            validationErrors,
            setValidationErrors,
            usersArr,
            ownersArr,
            rentReceiptMetaDataArr
          ),
        }),
      },
      {
        header: "Updated Date",
        accessorKey: "updatedAt",
        //customize normal cell render on normal non-aggregated rows
        Cell: ({ cell }) => (
          <>{commonImports.formatDate(cell.getValue<string>())}</>
        ),
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(
            cell,
            validationErrors,
            setValidationErrors,
            usersArr,
            ownersArr,
            rentReceiptMetaDataArr
          ),
        }),
      },
    ],
    [getCommonEditTextFieldProps, usersArr,ownersArr,rentReceiptMetaDataArr]
  );
  return ownerDetailsGridColumns;
};
