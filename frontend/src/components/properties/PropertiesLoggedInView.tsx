//------------------------------------Imports Section------------------------
import * as AllPropertiesApi from "../../network/allPropertiesApi";
import * as OwnersApi from "./../../network/ownerDetailsApi";
import * as RentReceiptMetaDataApi from "./../../network/rentReceiptMDataApi";
import * as UsersApi from "../../network/users_api";
import * as UserModel from "../../models/user";
import * as AllPropertiesModel from "../../models/allPropertiesModel";
import PropertyPageStyles from "../../styles/PropertyPage.module.css";
import * as commonImports from "../../commonCode/CommonImports";
import {CreateNewModal} from "./commonElement/CreateNewModal";

import ownerDetailsPageStyle from "../../styles/OwnerDetailsPage.module.css";

import {IOwnerDetailsViewModel} from "../../models/ownerDetails";
import {IRentReceiptMetaDataDetailsViewModel} from "../../models/rentReceiptMetaDataDetails";


//Strategy DesignPattern Used for the Create, Update and Delete Operations
import { CreateNewRowStrategy } from "./commonElement/Strategy/CreateNewRowStrategy";
import { SaveRowEditsStrategy } from './commonElement/Strategy/SaveRowEditsStrategy';
import { DeleteRowStrategy } from './commonElement/Strategy/DeleteRowStrategy';

import  getEditTextFieldProps  from './commonElement/GetEditTextFieldProps'; // Adjust the path to your GetEditTextFieldProps file

//Factory DesignPattern Used for the Main Grid View
import { GridFactory } from './commonElement/Factory/GridFactory'; // Adjust the path to your GridFactory file
//-------------------------------End of Imports Section---------------------


let usersArr: UserModel.User[] = []; //This stores all the users retrieved from the database
let ownersArr: IOwnerDetailsViewModel[] = []; //
let rentReceiptMetaDataArr: IRentReceiptMetaDataDetailsViewModel[] = []; //

const PropertyLoggedInView = () => {
  const [propertyArr, setPropertyArr] = commonImports.useState<
  AllPropertiesModel.IPropertyDetailsViewModel[]
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
    values: AllPropertiesModel.IPropertyDetailsViewModel
  ) => {
    propertyArr.push(values);
    createNewRowStrategy.handle(values, {}, null, setMessage, setOpen).then(() => {
      AllPropertiesApi.RetrieveAllRecords().then((allProperties: AllPropertiesModel.IPropertyDetailsViewModel[]) => {
        setPropertyArr(allProperties);
      });
    }).catch((error) => { }).finally(() => { });
  };

  //This function is called when the user clicks on the UPDATE button
  const handleSaveRowEdits: commonImports.MaterialReactTableProps<AllPropertiesModel.IPropertyDetailsViewModel>["onEditingRowSave"] =
    async ({ exitEditingMode, row, values }) => {
      propertyArr[row.index] = values;
      await saveRowEditsStrategy.handle(values, validationErrors, row, setMessage, setOpen, exitEditingMode);

    };

  //This function is called when the user clicks on the CANCEL button
  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  //This function is called when the user clicks on the DELETE button
  const handleDeleteRow = commonImports.useCallback(
    async (row: commonImports.MRT_Row<AllPropertiesModel.IPropertyDetailsViewModel>) => {
      if (
        !window.confirm(
          `Are you sure you want to delete ${row.getValue("propertyName")}`
        )
      ) {
        return;
      }
      propertyArr.splice(row.index, 1);
      setPropertyArr([...propertyArr]);
      await deleteRowStrategy.handle(null, null, row, setMessage, setOpen, null);
    },
    [propertyArr]
  );

  //This function is called when the user clicks on the EDIT button to set the Edit Modal Properties of The Columns.
  // const getCommonEditTextFieldProps = getEditTextFieldProps(setValidationErrors, usersArr); 

  //-----------------All the Function Declarations Ends Here-----------------


  //This useEffect is called when the page is loaded for the first time
  commonImports.useEffect(() => {
    UsersApi.fetchUsers().then((response) => {
      usersArr = response;
    });
    OwnersApi.RetrieveAllRecords().then((response) => {
      ownersArr = response;
    });
    RentReceiptMetaDataApi.RetrieveAllRecords().then((response) => {
      rentReceiptMetaDataArr = response;
    });
    AllPropertiesApi.RetrieveAllRecords().then((response) => {
      setPropertyArr(response);
    });
  }, []);

  //This is Used to set the columns of the table
  const propertiesDetailsGridColumns = GridFactory(
    getEditTextFieldProps, 
    usersArr,
    validationErrors,
    setValidationErrors,
    rentReceiptMetaDataArr,
    ownersArr
    );

  const handleOk = () => {
    // Perform the operation you want when the OK button is clicked
    console.log("OK button has been clicked!");
    AllPropertiesApi.RetrieveAllRecords().then((allProperties) => {
      setPropertyArr(allProperties);

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
      <h1 className={ownerDetailsPageStyle.headerStyle}>Property Records</h1>
        <commonImports.MaterialReactTable
          displayColumnDefOptions={{
            "mrt-row-actions": {
              muiTableHeadCellProps: {
                align: "left",
              },
              size: 30,
            },
          }}
          columns={propertiesDetailsGridColumns}
          data={propertyArr}
        
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
            <commonImports.Box sx={{ display: "flex"}}>
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
              Create New Property
            </commonImports.Button>
          )}
        />
        <CreateNewModal
          columns={propertiesDetailsGridColumns}
          open={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
          onSubmit={handleCreateNewRow}
          ownersArr={ownersArr}
          rentReceiptMetaDataArr={rentReceiptMetaDataArr}
        />
      </commonImports.Container>
    </>
  );
};




export default PropertyLoggedInView;

