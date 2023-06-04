import * as commonImports from "../../../commonCode/importMRTRelated";
import * as FlatModel from "./../../../models/flatModel";
import * as UserModel from "../../../models/user";

interface CreateModalProps {
  columns: commonImports.MRT_ColumnDef<FlatModel.IFlatViewModel>[];
  onClose: () => void;
  onSubmit: (values: FlatModel.IFlatViewModel) => void;
  open: boolean;
  usersArr:UserModel.User[];
}

//example of creating a mui dialog modal for creating new rows
export const CreateNewModal = ({
  open,
  columns,
  onClose,
  onSubmit,
  usersArr

}: CreateModalProps) => {
  const [values, setValues] = commonImports.useState<any>(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {} as any)
  );

  const [selectedFlat, setSelectedFlat] = commonImports.useState("");
  const [errors, setErrors] = commonImports.useState<{ [key: string]: string }>(
    {}
  );

  const validate = () => {
    let tempErrors = {};
    tempErrors = {
      ...tempErrors,
      propertyId: values.propertyId ? "" : "This field is required",
      roomName: values.roomName ? "" : "This field is required",
      roomRent: values.roomRent ? "" : "This field is required",
      roomColorSeparator: values.roomColorSeparator ? "" : "This field is required",
      roomType: values.roomType ? "" : "This field is required",
      roomRemarks: values.roomRemarks ? "" : "This field is required",
      rentCalcMethod: values.rentCalcMethod ? "" : "This field is required",
      electricityBillType: values.electricityBillType ? "" : "This field is required",
      electricityBillMeterName: values.electricityBillMeterName ? "" : "This field is required",
      electricityBillPerUnitCost: values.electricityBillPerUnitCost ? "" : "This field is required",
      electricityBillMeterReading: values.electricityBillMeterReading ? "" : "This field is required",
      electricityBillFixedAmtCost: values.electricityBillFixedAmtCost ? "" : "This field is required",
      waterBillType: values.waterBillType ? "" : "This field is required",
      waterBillMeterName: values.waterBillMeterName ? "" : "This field is required",
      waterBillPerUnitCost: values.waterBillPerUnitCost ? "" : "This field is required",
      waterBillMeterReading: values.waterBillMeterReading ? "" : "This field is required",
      waterBillFixedAmtCost: values.waterBillFixedAmtCost ? "" : "This field is required",
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
    }
  };

  return (
    <commonImports.Dialog open={open}>
      <commonImports.DialogTitle textAlign="center">
        Create New Flat
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
            {/* {columns
              .filter((column) => column.accessorKey === "userId")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="User Id"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedOwnerType}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                      setSelectedOwnerType(event.target.value);
                    }}
                    displayEmpty
                    sx={{ minWidth: 120 }}
                  >
                    <commonImports.MenuItem value="" disabled>
                      Select a User
                    </commonImports.MenuItem>
                    {usersArr.map((option) => (
                      <commonImports.MenuItem
                        key={option._id}
                        value={option._id}
                      >
                        {option.username + " - " + option.role}
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
              ))} */}

            {columns
              .filter(
                (column) =>
                  column.accessorKey !== "_id" &&
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
          Create New Flat
        </commonImports.Button>
      </commonImports.DialogActions>
    </commonImports.Dialog>
  );
};
