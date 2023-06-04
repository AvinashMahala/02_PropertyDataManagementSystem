import * as commonImports from "./../../../commonCode/importMRTRelated";
import * as FlatModel from "./../../../models/flatModel";
import * as UserModel from "../../../models/user";

const getEditTextFieldProps = (
    cell: commonImports.MRT_Cell<FlatModel.IFlatViewModel>,
  validationErrors: { [key: string]: string},
  setValidationErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string}>>,
  options: UserModel.User[]
) =>{
    commonImports.useCallback(
        (
            cell: commonImports.MRT_Cell<FlatModel.IFlatViewModel>,
            validationErrors: { [key: string]: string},
          options: UserModel.User[]
        ): commonImports.MRT_ColumnDef<FlatModel.IFlatViewModel>["muiTableBodyCellEditTextFieldProps"] => {
          if (cell.column.id === "userId") {
            return {
              select: true,
              label: "User Name",
              children: options.map(
                (option: UserModel.User) =>
                  `
                       <commonImports.MenuItem key={option._id} value={option._id}>
                        {option.username}-{option.role}
                        </commonImports.MenuItem>
                       `
              ),
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
                //cell.setEditingCellValue(value);
              },
            };
          }
        },
        []
        );
}
export default getEditTextFieldProps;
