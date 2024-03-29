//------------------------------------Imports Section------------------------
import * as MaintenanceApi from "../../network/maintenanceApi";
import * as UsersApi from "../../network/users_api";
import * as UserModel from "../../models/user";
import * as MaintenanceRequestsModel from "../../models/maintenanceRequestModel";
import PropertyPageStyles from "../../styles/PropertyPage.module.css";
import * as commonImports from "../../commonCode/CommonImports";
import {CreateNewModal} from "./commonElement/CreateNewModal";

//Strategy DesignPattern Used for the Create, Update and Delete Operations
import { CreateNewRowStrategy } from "./commonElement/Strategy/CreateNewRowStrategy";
import { SaveRowEditsStrategy } from './commonElement/Strategy/SaveRowEditsStrategy';
import { DeleteRowStrategy } from './commonElement/Strategy/DeleteRowStrategy';

import  getEditTextFieldProps  from './commonElement/GetEditTextFieldProps'; // Adjust the path to your GetEditTextFieldProps file

//Factory DesignPattern Used for the Main Grid View
import { GridFactory } from './commonElement/Factory/GridFactory'; // Adjust the path to your GridFactory file
//-------------------------------End of Imports Section---------------------


let usersArr: UserModel.User[] = []; //This stores all the users retrieved from the database

const MaintenanceRequestsLoggedInView = () => {
  const [maintenanceRequestsArr, setmaintenanceRequestsArr] = commonImports.useState<
  MaintenanceRequestsModel.IMaintenanceRequestViewModel[]
  >([]);
  const [createModalOpen, setCreateModalOpen] = commonImports.useState(false);
  const [validationErrors, setValidationErrors] = commonImports.useState<{
    [cellId: string]: string;
  }>({});
  const [open, setOpen] = commonImports.useState(false);
  const [message, setMessage] = commonImports.useState("");

  const createNewRowStrategy = new CreateNewRowStrategy();
  const saveRowEditsStrategy = new SaveRowEditsStrategy();
  const deleteRowStrategy = new DeleteRowStrategy();

  const handleCreateNewRow = async (
    values: MaintenanceRequestsModel.IMaintenanceRequestViewModel
  ) => {
    maintenanceRequestsArr.push(values);
    createNewRowStrategy.handle(values, {}, null, setMessage, setOpen).then(() => {
      MaintenanceApi.RetrieveAllRecords().then((allMaintenanceRequests: MaintenanceRequestsModel.IMaintenanceRequestViewModel[]) => {
        setmaintenanceRequestsArr(allMaintenanceRequests);
      });
    }).catch((error) => { }).finally(() => { });
  };

  //This function is called when the user clicks on the UPDATE button
  const handleSaveRowEdits: commonImports.MaterialReactTableProps<MaintenanceRequestsModel.IMaintenanceRequestViewModel>["onEditingRowSave"] =
    async ({ exitEditingMode, row, values }) => {
      maintenanceRequestsArr[row.index] = values;
      await saveRowEditsStrategy.handle(values, validationErrors, row, setMessage, setOpen, exitEditingMode);

    };

  //This function is called when the user clicks on the CANCEL button
  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  //This function is called when the user clicks on the DELETE button
  const handleDeleteRow = commonImports.useCallback(
    async (row: commonImports.MRT_Row<MaintenanceRequestsModel.IMaintenanceRequestViewModel>) => {
      if (
        !window.confirm(
          `Are you sure you want to delete ${row.getValue("_id")}`
        )
      ) {
        return;
      }
      maintenanceRequestsArr.splice(row.index, 1);
      setmaintenanceRequestsArr([...maintenanceRequestsArr]);
      await deleteRowStrategy.handle(null, null, row, setMessage, setOpen, null);
    },
    [maintenanceRequestsArr]
  );

  //This function is called when the user clicks on the EDIT button to set the Edit Modal Properties of The Columns.
  // const getCommonEditTextFieldProps = getEditTextFieldProps(setValidationErrors, usersArr); 

  //-----------------All the Function Declarations Ends Here-----------------


  //This useEffect is called when the page is loaded for the first time
  commonImports.useEffect(() => {
    UsersApi.fetchUsers().then((response) => {
      usersArr = response;
    });

    MaintenanceApi.RetrieveAllRecords().then((response) => {
      setmaintenanceRequestsArr(response);
    });
  }, []);

  //This is Used to set the columns of the table
  const maintenanceRequestsDetailsGridColumns = GridFactory(getEditTextFieldProps, usersArr,validationErrors,setValidationErrors);

  const handleOk = () => {
    // Perform the operation you want when the OK button is clicked
    console.log("OK button has been clicked!");
    MaintenanceApi.RetrieveAllRecords().then((allMaintenanceRequests) => {
      setmaintenanceRequestsArr(allMaintenanceRequests);

    });
    setOpen(false); // Close the dialog
  };

  return (
    <>
      <commonImports.SuccessDialog
        open={open}
        handleClose={() => setOpen(false)}
        handleOk={handleOk}
        message={message}
      />
      
      <commonImports.Container className={PropertyPageStyles.pageContainer}>
      <h1 className={PropertyPageStyles.headerStyle}>Maintenance Records</h1>
        <commonImports.MaterialReactTable
          displayColumnDefOptions={{
            "mrt-row-actions": {
              muiTableHeadCellProps: {
                align: "center",
              },
              size: 30,
            },
          }}
          columns={maintenanceRequestsDetailsGridColumns}
          data={maintenanceRequestsArr}
        
          enableColumnOrdering
          initialState={{
            columnVisibility: {
              _id: false, //hide firstName column by default
            },
            density: "compact",
          }}
          editingMode="modal" //default
          enableEditing
          onEditingRowSave={handleSaveRowEdits}
          onEditingRowCancel={handleCancelRowEdits}
          renderRowActions={({ row, table }) => (
            <commonImports.Box sx={{ display: "flex", gap: "1rem" }}>
              <commonImports.Tooltip arrow placement="left" title="Edit">
                <commonImports.IconButton
                  onClick={() => table.setEditingRow(row)}
                >
                  <commonImports.Edit />
                </commonImports.IconButton>
              </commonImports.Tooltip>
              <commonImports.Tooltip arrow placement="right" title="Delete">
                <commonImports.IconButton
                  color="error"
                  onClick={() => handleDeleteRow(row)}
                >
                  <commonImports.Delete />
                </commonImports.IconButton>
              </commonImports.Tooltip>
            </commonImports.Box>
          )}
          renderTopToolbarCustomActions={() => (
            <commonImports.Button
              color="secondary"
              onClick={() => setCreateModalOpen(true)}
              variant="contained"
            >
              Create New Maintenance Request
            </commonImports.Button>
          )}
        />
        <CreateNewModal
          columns={maintenanceRequestsDetailsGridColumns}
          open={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
          onSubmit={handleCreateNewRow}
          usersArr={usersArr}
        />
      </commonImports.Container>
    </>
  );
};




export default MaintenanceRequestsLoggedInView;

