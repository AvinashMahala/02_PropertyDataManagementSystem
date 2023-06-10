import * as commonImports from "../../../commonCode/CommonImports";
import React from "react";
import * as PropertiesModel from "../../../models/allPropertiesModel";
import * as UserModel from "../../../models/user";
import * as OwnerModel from "../../../models/ownerDetails";
import * as RentReceiptMetaDataModel from "../../../models/rentReceiptMetaDataDetails";

import {propertyTypeOptions,propertyTakeRentOfOptions} from "./../../../models/allPropertiesModel";

interface CreateModalProps {
  columns: commonImports.MRT_ColumnDef<PropertiesModel.IPropertyDetailsViewModel>[];
  onClose: () => void;
  onSubmit: (values: PropertiesModel.IPropertyDetailsViewModel) => void;
  open: boolean;
  ownersArr: OwnerModel.IOwnerDetailsViewModel[];
  rentReceiptMetaDataArr: RentReceiptMetaDataModel.IRentReceiptMetaDataDetailsViewModel[];
}

//example of creating a mui dialog modal for creating new rows
export const CreateNewModal = ({
  open,
  columns,
  onClose,
  onSubmit,
  ownersArr,
  rentReceiptMetaDataArr,
}: CreateModalProps) => {
  const [values, setValues] = commonImports.useState<any>(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {} as any)
  );

  const [selectedOwner, setSelectedOwner] = commonImports.useState("");
  const [selectedRentReceiptMData, setSelectedRentReceiptMData] = commonImports.useState("");
  const [selectedPropertyType, setSelectedPropertyType] = commonImports.useState("");
  const [selectedPropertyTakeRentOf, setSelectedPropertyTakeRentOf] = commonImports.useState("");
  const [errors, setErrors] = commonImports.useState<{ [key: string]: string }>(
    {}
  );

  const validate = () => {
    let tempErrors = {};
    tempErrors = {
      ...tempErrors,
      ownerId: values.ownerId ? "" : "This field is required",
      rentReceiptMetaDataId: values.rentReceiptMetaDataId
        ? ""
        : "This field is required",
      propertyName: values.propertyName ? "" : "This field is required",
      propertyType: values.propertyType ? "" : "This field is required",
      propertyAddress: values.propertyAddress ? "" : "This field is required",
      propertyTakeRentOf: values.propertyTakeRentOf
        ? ""
        : "This field is required",
    };
    setErrors({
      ...tempErrors,
    });

    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = () => {
    //put your validation logic here
    if (validate()) {
      onSubmit(values);
      onClose();
      setSelectedOwner("");
      setSelectedRentReceiptMData("");
      setSelectedPropertyType("");
      setSelectedPropertyTakeRentOf("");
      setValues(columns.reduce((acc, column) => {
        acc[column.accessorKey ?? ""] = "";
        return acc;
      }, {} as any));
    }
  };

  return (
    <commonImports.Dialog open={open}>
      <commonImports.DialogTitle textAlign="center">
        Create New Property
      </commonImports.DialogTitle>
      <commonImports.DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <commonImports.Stack
            sx={{
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1.5rem",
            }}
          >
            {columns
              .filter((column) => column.accessorKey === "ownerId")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                  
                    label="Owner Id"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedOwner}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                      setSelectedOwner(event.target.value);
                    }}
                    displayEmpty
                    sx={{ minWidth: 120}}
                    MenuProps={{
                      style: {
                         maxHeight: 500,
                            },
                      }}
                  >
                    <commonImports.MenuItem value="" disabled>
                      Select a Owner
                    </commonImports.MenuItem>
                    {ownersArr.map((option) => (
                      <commonImports.MenuItem
                        key={option._id}
                        value={option._id}
                      >
                        {option.ownerName}
                      </commonImports.MenuItem>
                    ))}
                  </commonImports.Select>
                  <commonImports.FormHelperText>
                    {column.accessorKey &&
                    errors.hasOwnProperty(column.accessorKey)
                      ? errors[column.accessorKey]
                      : ""}
                  </commonImports.FormHelperText>
                </commonImports.FormControl>
              ))}

            {columns
              .filter(
                (column) => column.accessorKey === "rentReceiptMetaDataId"
              )
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="rentReceiptMetaDataId"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedRentReceiptMData}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                      setSelectedRentReceiptMData(event.target.value);
                    }}
                    displayEmpty
                    sx={{ minWidth: 120 }}
                    MenuProps={{
                      style: {
                         maxHeight: 500,
                            },
                      }}
                  >
                    <commonImports.MenuItem value="" disabled>
                      Select a Rent Receipt MetaData
                    </commonImports.MenuItem>
                    {rentReceiptMetaDataArr.map((option) => (
                      <commonImports.MenuItem
                        key={option._id}
                        value={option._id}
                      >
                        {option.rentReceiptMetaDataRefNm}
                      </commonImports.MenuItem>
                    ))}
                  </commonImports.Select>
                  <commonImports.FormHelperText>
                    {column.accessorKey &&
                    errors.hasOwnProperty(column.accessorKey)
                      ? errors[column.accessorKey]
                      : ""}
                  </commonImports.FormHelperText>
                </commonImports.FormControl>
              ))}
  {columns
              .filter(
                (column) => column.accessorKey === "propertyType"
              )
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="propertyType"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedPropertyType}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                      setSelectedPropertyType(event.target.value);
                    }}
                    displayEmpty
                    sx={{ minWidth: 120 }}
                    MenuProps={{
                      style: {
                         maxHeight: 500,
                            },
                      }}
                  >
                    <commonImports.MenuItem value="" disabled>
                      Select a Property Type
                    </commonImports.MenuItem>
                    {propertyTypeOptions.map((option) => (
                      <commonImports.MenuItem
                        key={option._id}
                        value={option._id}
                      >
                        {option.name}
                      </commonImports.MenuItem>
                    ))}
                  </commonImports.Select>
                  <commonImports.FormHelperText>
                    {column.accessorKey &&
                    errors.hasOwnProperty(column.accessorKey)
                      ? errors[column.accessorKey]
                      : ""}
                  </commonImports.FormHelperText>
                </commonImports.FormControl>
              ))}
            {columns
              .filter(
                (column) =>
                  column.accessorKey !== "_id" &&
                  column.accessorKey !== "ownerId" &&
                  column.accessorKey !== "rentReceiptMetaDataId" &&
                  column.accessorKey !== "propertyType" &&
                  column.accessorKey !== "propertyTakeRentOf" &&
                  column.accessorKey !== "createdAt" &&
                  column.accessorKey !== "updatedAt"
              )
              .map((column) => (
                <commonImports.TextField
                  key={column.accessorKey}
                  label={column.header}
                  name={column.accessorKey}
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                  error={column.accessorKey && !!errors[column.accessorKey]}
                  helperText={
                    column.accessorKey &&
                    errors.hasOwnProperty(column.accessorKey)
                      ? errors[column.accessorKey]
                      : ""
                  }
                />
              ))}
              {columns
              .filter(
                (column) => column.accessorKey === "propertyTakeRentOf"
              )
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="propertyTakeRentOf"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedPropertyTakeRentOf}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                      setSelectedPropertyTakeRentOf(event.target.value);
                    }}
                    displayEmpty
                    sx={{ minWidth: 120 }}
                    MenuProps={{
                      style: {
                         maxHeight: 500,
                            },
                      }}
                  >
                    <commonImports.MenuItem value="" disabled>
                      Select a Property Take Rent Of
                    </commonImports.MenuItem>
                    {propertyTakeRentOfOptions.map((option) => (
                      <commonImports.MenuItem
                        key={option._id}
                        value={option._id}
                      >
                        {option.name}
                      </commonImports.MenuItem>
                    ))}
                  </commonImports.Select>
                  <commonImports.FormHelperText>
                    {column.accessorKey &&
                    errors.hasOwnProperty(column.accessorKey)
                      ? errors[column.accessorKey]
                      : ""}
                  </commonImports.FormHelperText>
                </commonImports.FormControl>
              ))}
          </commonImports.Stack>
        </form>
      </commonImports.DialogContent>
      <commonImports.DialogActions sx={{ p: "1.25rem" }}>
        <commonImports.Button onClick={onClose}>Cancel</commonImports.Button>
        <commonImports.Button
          color="secondary"
          onClick={handleSubmit}
          variant="contained"
        >
          Create New Property
        </commonImports.Button>
      </commonImports.DialogActions>
    </commonImports.Dialog>
  );
};
