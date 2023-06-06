import * as commonImports from "../../../commonCode/importMRTRelated";
import * as PropertiesModel from "../../../models/allPropertiesModel";
import * as UserModel from "../../../models/user";
import { KeyboardDatePicker } from "@material-ui/pickers";

const getEditTextFieldProps = (
  cell: commonImports.MRT_Cell<PropertiesModel.IPropertyDetailsViewModel>,
  validationErrors: { [key: string]: string },
  setValidationErrors: React.Dispatch<
    React.SetStateAction<{ [key: string]: string }>
  >,
  options: UserModel.User[],
  ownersArr: any,
  renReceiptMetaDataArr: any
): commonImports.MRT_ColumnDef<PropertiesModel.IPropertyDetailsViewModel>["muiTableBodyCellEditTextFieldProps"] => {
  if (cell.column.id === "ownerId") {
    return {
      select: true,
      label: "Owned By",
      children: ownersArr.map((option: any) => (
        <commonImports.MenuItem key={option._id} value={option._id}>
          {option.ownerName}
        </commonImports.MenuItem>
      )),
      error: !!validationErrors[cell.id],
      helperText: validationErrors[cell.id],
      onChange: (e) => {
        const value = e.target.value;
        if (!value) {
          setValidationErrors((prev) => ({
            ...prev,
            [cell.id]: "Required",
          }));
        } else {
          setValidationErrors((prev) => {
            const next = { ...prev };
            delete next[cell.id];
            return next;
          });
        }
        // cell.setEditingCellValue(value);
      },
    };
  }
  if (cell.column.id === "rentReceiptMetaDataId") {
    return {
      select: true,
      label: "Rent Receipt Meta Data Ref",
      children: renReceiptMetaDataArr.map((option: any) => (
        <commonImports.MenuItem key={option._id} value={option._id}>
          {option.rentReceiptMetaDataRefNm}
        </commonImports.MenuItem>
      )),
      error: !!validationErrors[cell.id],
      helperText: validationErrors[cell.id],
      onChange: (e) => {
        const value = e.target.value;
        if (!value) {
          setValidationErrors((prev) => ({
            ...prev,
            [cell.id]: "Required",
          }));
        } else {
          setValidationErrors((prev) => {
            const next = { ...prev };
            delete next[cell.id];
            return next;
          });
        }
        // cell.setEditingCellValue(value);
      },
    };
  }
  if (cell.column.id === "createdAt") {
    const rawDate: string = String(cell.getValue());
    const dt:Date=new Date(rawDate);
    const formattedDate = rawDate ? dt.toLocaleDateString()+" "+dt.toLocaleTimeString() : "";
    return {
      label: "Created At",
      type:"text",
      value: formattedDate,
      error: !!validationErrors[cell.id],
      helperText: validationErrors[cell.id],
      onChange: (e) => {
        const value = e.target.value;
        if (!value) {
          setValidationErrors((prev) => ({
            ...prev,
            [cell.id]: "Required",
          }));
        } else {
          setValidationErrors((prev) => {
            const next = { ...prev };
            delete next[cell.id];
            return next;
          });
        }
        // cell.setEditingCellValue(value);
      }
    }
  }
  if (cell.column.id === "updatedAt") {
    const rawDate: string = String(cell.getValue());
    const dt:Date=new Date(rawDate);
    const formattedDate = rawDate ? dt.toLocaleDateString()+" "+dt.toLocaleTimeString() : "";
    return {
      label: "Updated At",
      type:"text",
      value: formattedDate,
      error: !!validationErrors[cell.id],
      helperText: validationErrors[cell.id],
      onChange: (e) => {
        const value = e.target.value;
        if (!value) {
          setValidationErrors((prev) => ({
            ...prev,
            [cell.id]: "Required",
          }));
        } else {
          setValidationErrors((prev) => {
            const next = { ...prev };
            delete next[cell.id];
            return next;
          });
        }
        // cell.setEditingCellValue(value);
      }
    }
  }
};

export default getEditTextFieldProps;
