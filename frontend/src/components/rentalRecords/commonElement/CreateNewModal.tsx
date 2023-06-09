import * as commonImports from "../../../commonCode/CommonImports";
import React from "react";
import * as AllRentDetailsModel from "../../../models/allRentDetailsModel";
import * as UserModel from "../../../models/user";

import * as TenantModel from "../../../models/tenantModel";
import * as FlatsModel from "../../../models/flatModel";
import * as PropertiesModel from "../../../models/allPropertiesModel";
import { AlignHorizontalLeft } from "@mui/icons-material";

interface CreateModalProps {
  columns: commonImports.MRT_ColumnDef<AllRentDetailsModel.IRentDetailsViewModel>[];
  onClose: () => void;
  onSubmit: (values: AllRentDetailsModel.IRentDetailsViewModel) => void;
  open: boolean;
  propertiesArr:PropertiesModel.IPropertyDetailsViewModel[],
  flatsArr:FlatsModel.IFlatViewModel[],
  tenantsArr:TenantModel.ITenantViewModel[],
}

//example of creating a mui dialog modal for creating new rows
export const CreateNewModal = ({
  open,
  columns,
  onClose,
  onSubmit,
  propertiesArr,
  flatsArr,
  tenantsArr

}: CreateModalProps) => {
  const [selectedProperty, setSelectedProperty]=commonImports.useState("");
  const [selectedFlat, setSelectedFlat] = commonImports.useState("");
  const [selectedFlatModel, setSelectedFlatModel] = commonImports.useState<FlatsModel.IFlatViewModel>();
  const [selectedTenant, setSelectedTenant] = commonImports.useState<TenantModel.ITenantViewModel>();
  const [selectedRentDetail, setSelectedRentDetail] = commonImports.useState("");
  const [errors, setErrors] = commonImports.useState<{ [key: string]: string }>(
    {}
  );
  const [values, setValues] = commonImports.useState<any>(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {} as any)
  );

  

  const validate = () => {
    let tempErrors = {};
    tempErrors = {
      ...tempErrors,
      propertyId: values.propertyId ? "" : "This field is required",
      flatId: values.flatId ? "" : "This field is required",
      tenantId: values.tenantId ? "" : "This field is required",
      rentStartDate: values.rentStartDate ? "" : "This field is required",
      rentEndDate: values.rentEndDate ? "" : "This field is required",
      rentAmount: values.rentAmount ? "" : "This field is required",
      buildingMaintenanceAmount: values.buildingMaintenanceAmount ? "" : "This field is required",
      previousBalance: values.previousBalance ? "" : "This field is required",
      ebillPreviousMeterReading: values.ebillPreviousMeterReading ? "" : "This field is required",
      ebillPreviousMeterReadingDate: values.ebillPreviousMeterReadingDate ? "" : "This field is required",
      ebillNewMeterReading: values.ebillNewMeterReading ? "" : "This field is required",
      ebillNewMeterReadingDate: values.ebillNewMeterReadingDate ? "" : "This field is required",
      ebillMultiplier: values.ebillMultiplier ? "" : "This field is required",
      ebillUnitsConsumed: values.ebillUnitsConsumed ? "" : "This field is required",
      ebillAmount: values.ebillAmount ? "" : "This field is required",
      totalAmount: values.totalAmount ? "" : "This field is required",
      paidAmount: values.paidAmount ? "" : "This field is required",
      currentBalance: values.currentBalance ? "" : "This field is required",
      paymentDate: values.paymentDate ? "" : "This field is required",
      paymentMode: values.paymentMode ? "" : "This field is required",
      paymentReference: values.paymentReference ? "" : "This field is required",
      paymentRemarks: values.paymentRemarks ? "" : "This field is required",
      paymentStatus: values.paymentStatus ? "" : "This field is required",
      paymentReceipt: values.paymentReceipt ? "" : "This field is required",
      paymentReceiptDate: values.paymentReceiptDate ? "" : "This field is required",
      paymentReceiptRemarks: values.paymentReceiptRemarks ? "" : "This field is required",
      paymentReceiptStatus: values.paymentReceiptStatus ? "" : "This field is required",

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
      setSelectedProperty("");
      setSelectedFlat("");
      setValues(
        columns.reduce((acc, column) => {
          acc[column.accessorKey ?? ""] = "";
          return acc;
        }, {} as any)
      );
    }
  };

  return (
    <commonImports.Dialog open={open}
    PaperProps={{
      sx: {
        width: "100%",
        maxWidth: "85%!important",
      },
    }} 
    >
      <commonImports.DialogTitle textAlign="center">
      Create New Rent Record
      </commonImports.DialogTitle>
      <commonImports.DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <commonImports.Stack
            sx={{
              width: "85%",
              minWidth: "85%",
              gap: "1.5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            {columns
              .filter((column) => column.accessorKey === "propertyId")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="Property Id"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedProperty}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                        flatId: "", // Reset the flatId column
                      });
                      setSelectedProperty(event.target.value);
                      setSelectedFlat("");
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
                      Select a Property
                    </commonImports.MenuItem>
                    {propertiesArr.map((option) => (
                      <commonImports.MenuItem
                        key={option._id}
                        value={option._id}
                      >
                        {option.propertyName}
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

            {selectedProperty!=="" && columns
              .filter((column) => column.accessorKey === "flatId")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                  
                    label="Flat Id"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedFlat}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                        tenantId:tenantsArr.filter((tenant)=>tenant.propertyId===selectedProperty && tenant.flatId===event.target.value)[0]._id
                        
                      });
                      setSelectedFlatModel(flatsArr.filter((flat)=>flat._id===event.target.value)[0]);
                      setSelectedFlat(event.target.value);
                      setSelectedTenant(tenantsArr.filter((tenant)=>tenant.propertyId===selectedProperty && tenant.flatId===event.target.value)[0]);
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
                      Select a Room
                    </commonImports.MenuItem>
                    {flatsArr.filter((room)=>room.propertyId===selectedProperty).map((option) => (
                      <commonImports.MenuItem
                        key={option._id}
                        value={option._id}
                      >
                        {option.roomName}
                      </commonImports.MenuItem>
                    ))}
                  </commonImports.Select>
                  <commonImports.FormHelperText>
                    {column.accessorKey &&
                    errors.hasOwnProperty(column.accessorKey)
                      ? errors[column.accessorKey]
                      : "Enter "+column.header}
                  </commonImports.FormHelperText>
                </commonImports.FormControl>
              ))}
            
            {selectedTenant!==undefined && columns
              .filter((column) => column.accessorKey === "tenantId")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                  
                    label="Tenant Name"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedTenant !== undefined ? selectedTenant._id : ""}
                    disabled
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: selectedTenant !== undefined ? selectedTenant._id : "",
                      });
                    }}
                    displayEmpty
                    sx={{ minWidth: 120}}
                    MenuProps={{
                      style: {
                         maxHeight: 500,
                            },
                      }}
                  >
                    {tenantsArr.filter((tenant)=>tenant._id===selectedTenant._id).map((option) => (
                      <commonImports.MenuItem
                        key={option._id}
                        value={option._id}
                        disabled
                      >
                        {option.Name}
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
                  column.accessorKey === "rentStartDate" ||
                  column.accessorKey === "rentEndDate"
              )
              .map((column) => (
                <commonImports.TextField
                  key={column.accessorKey}
                  // label={column.header}
                  type="date"
                  name={column.accessorKey}
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                  error={column.accessorKey && !!errors[column.accessorKey]}
                  helperText={
                    column.accessorKey &&
                    errors.hasOwnProperty(column.accessorKey)
                      ? " Enter "+column.header+"[ "+errors[column.accessorKey]+" ]"
                      : "Enter "+column.header
                  }
                />
              ))}

{columns
              .filter(
                (column) =>
                  column.accessorKey === "rentAmount" ||
                  column.accessorKey === "buildingMaintenanceAmount" ||
                  column.accessorKey === "previousBalance"
              )
              .map((column) => (
                <commonImports.TextField
                  key={column.accessorKey}
                  label={column.header}
                  type="text"
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

{selectedFlatModel?.electricityBillType==="metered" && columns
              .filter(
                (column) =>
                  column.accessorKey === "ebillPreviousMeterReading"
              )
              .map((column) => (
                <commonImports.TextField
                  key={column.accessorKey}
                  label={column.header}
                  type="text"
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

{selectedFlatModel?.electricityBillType==="metered" && columns
              .filter(
                (column) =>
                  column.accessorKey === "ebillPreviousMeterReadingDate"
              )
              .map((column) => (
                <commonImports.TextField
                  key={column.accessorKey}
                  // label={column.header}
                  type="date"
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

{selectedFlatModel?.electricityBillType==="metered" && columns
              .filter(
                (column) =>
                  column.accessorKey === "ebillNewMeterReading"
              )
              .map((column) => (
                <commonImports.TextField
                  key={column.accessorKey}
                  label={column.header}
                  type="text"
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

{selectedFlatModel?.electricityBillType==="metered" && columns
              .filter(
                (column) =>
                  column.accessorKey === "ebillNewMeterReadingDate"
              )
              .map((column) => (
                <commonImports.TextField
                  key={column.accessorKey}
                  // label={column.header}
                  type="date"
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

{selectedFlatModel?.electricityBillType==="metered" && columns
              .filter(
                (column) =>
                  column.accessorKey === "ebillMultiplier" ||
                  column.accessorKey === "ebillUnitsConsumed"
              )
              .map((column) => (
                <commonImports.TextField
                  key={column.accessorKey}
                  label={column.header}
                  type="text"
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
              {(selectedFlatModel?.electricityBillType==="metered") && columns
              .filter(
                (column) =>
                  column.accessorKey === "ebillAmount"
              )
              .map((column) => (
                <commonImports.TextField
                  key={column.accessorKey}
                  label={column.header}
                  type="text"
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

{(selectedFlatModel?.electricityBillType==="fixed") && columns
              .filter(
                (column) =>
                  column.accessorKey === "ebillAmount"
              )
              .map((column) => (
                <commonImports.TextField
                  key={column.accessorKey}
                  label={column.header}
                  type="text"
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
                (column) =>
                  column.accessorKey === "totalAmount" ||
                  column.accessorKey === "paidAmount" ||
                  column.accessorKey === "currentBalance"
              )
              .map((column) => (
                <commonImports.TextField
                  key={column.accessorKey}
                  label={column.header}
                  type="text"
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
                (column) =>
                  column.accessorKey === "paymentDate"
              )
              .map((column) => (
                <commonImports.TextField
                  key={column.accessorKey}
                  label={column.header}
                  type="date"
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
                (column) =>
                  column.accessorKey === "paymentMode" ||
                  column.accessorKey === "paymentReference" ||
                  column.accessorKey === "paymentRemarks" ||
                  column.accessorKey === "paymentStatus" ||
                  column.accessorKey === "paymentReceipt"
              )
              .map((column) => (
                <commonImports.TextField
                  key={column.accessorKey}
                  label={column.header}
                  type="text"
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
                (column) =>
                  column.accessorKey === "paymentReceiptDate"
              )
              .map((column) => (
                <commonImports.TextField
                  key={column.accessorKey}
                  label={column.header}
                  type="date"
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
                (column) =>
                  column.accessorKey === "paymentReceiptRemarks" ||
                  column.accessorKey === "paymentReceiptStatus"
              )
              .map((column) => (
                <commonImports.TextField
                  key={column.accessorKey}
                  label={column.header}
                  type="text"
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

          </commonImports.Stack>
        </form>
      </commonImports.DialogContent>
      <commonImports.DialogActions sx={{ 
        p: "1.25rem",
        }}>
        <commonImports.Button onClick={onClose}>Cancel</commonImports.Button>
        <commonImports.Button
          color="secondary"
          onClick={handleSubmit}
          variant="contained"
        >
          Create New Rent Record
        </commonImports.Button>
      </commonImports.DialogActions>
    </commonImports.Dialog>
  );
};
