//------------------------------------Imports Section------------------------
import * as FlatApi from "../../network/flatDetailsApi";
import * as PropertiesApi from "../../network/allPropertiesApi";
import * as UserModel from "../../models/user";
import * as FlatModel from "./../../models/flatModel";
import * as PropertyModel from "./../../models/allPropertiesModel";
import PropertyPageStyles from "../../styles/PropertyPage.module.css";
import * as commonImports from "../../commonCode/CommonImports";
import {CreateNewModal} from "./commonElement/CreateNewModal";

import ownerDetailsPageStyle from "./../../styles/OwnerDetailsPage.module.css"

//Strategy DesignPattern Used for the Create, Update and Delete Operations
import { CreateNewRowStrategy } from "./commonElement/Strategy/CreateNewRowStrategy";
import { SaveRowEditsStrategy } from './commonElement/Strategy/SaveRowEditsStrategy';
import { DeleteRowStrategy } from './commonElement/Strategy/DeleteRowStrategy';

import  getEditTextFieldProps  from './commonElement/GetEditTextFieldProps'; // Adjust the path to your GetEditTextFieldProps file

//Factory DesignPattern Used for the Main Grid View
import { GridFactory } from './commonElement/Factory/GridFactory'; // Adjust the path to your GridFactory file
//-------------------------------End of Imports Section---------------------


let propertiesArr: PropertyModel.IPropertyDetailsViewModel[] = []; //This stores all the users retrieved from the database

const FlatsLoggedInView = () => {
  const [flatsArr, setFlatsArr] = commonImports.useState<
  FlatModel.IFlatViewModel[]
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
    values: FlatModel.IFlatViewModel
  ) => {
    flatsArr.push(values);
    createNewRowStrategy.handle(values, {}, null, setMessage, setOpen).then(() => {
      FlatApi.RetrieveAllRecords().then((allFlats: FlatModel.IFlatViewModel[]) => {
        setFlatsArr(allFlats);
      });
    }).catch((error) => { }).finally(() => { });
  };

  //This function is called when the user clicks on the UPDATE button
  const handleSaveRowEdits: commonImports.MaterialReactTableProps<FlatModel.IFlatViewModel>["onEditingRowSave"] =
    async ({ exitEditingMode, row, values }) => {
      flatsArr[row.index] = values;
      await saveRowEditsStrategy.handle(values, validationErrors, row, setMessage, setOpen, exitEditingMode);

    };

  //This function is called when the user clicks on the CANCEL button
  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  //This function is called when the user clicks on the DELETE button
  const handleDeleteRow = commonImports.useCallback(
    async (row: commonImports.MRT_Row<FlatModel.IFlatViewModel>) => {
      if (
        !window.confirm(
          `Are you sure you want to delete ${row.getValue("roomName")}`
        )
      ) {
        return;
      }
      flatsArr.splice(row.index, 1);
      setFlatsArr([...flatsArr]);
      await deleteRowStrategy.handle(null, null, row, setMessage, setOpen, null);
    },
    [flatsArr]
  );

  //This function is called when the user clicks on the EDIT button to set the Edit Modal Properties of The Columns.
  // const getCommonEditTextFieldProps = getEditTextFieldProps(setValidationErrors, usersArr); 

  //-----------------All the Function Declarations Ends Here-----------------


  //This useEffect is called when the page is loaded for the first time
  commonImports.useEffect(() => {
    PropertiesApi.RetrieveAllRecords().then((response) => {
      propertiesArr = response;
    });

    FlatApi.RetrieveAllRecords().then((response) => {
      setFlatsArr(response);
    });
  }, []);

  //This is Used to set the columns of the table
  const flatsGridColumns = GridFactory(
    getEditTextFieldProps, 
    propertiesArr,
    validationErrors,
    setValidationErrors,
    flatsArr    
    );

  const handleOk = () => {
    // Perform the operation you want when the OK button is clicked
    console.log("OK button has been clicked!");
    FlatApi.RetrieveAllRecords().then((allFlats) => {
      setFlatsArr(allFlats);

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
      <h1 className={ownerDetailsPageStyle.headerStyle}>Flats Details Logged In View</h1>
        <commonImports.MaterialReactTable
          displayColumnDefOptions={{
            "mrt-row-actions": {
              muiTableHeadCellProps: {
                align: "center",
              },
              size: 30,
            },
          }}
          columns={flatsGridColumns}
          data={flatsArr}
        
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
              Create New Flat
            </commonImports.Button>
          )}
        />
        <CreateNewModal
          columns={flatsGridColumns}
          open={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
          onSubmit={handleCreateNewRow}
          propertiesArr={propertiesArr}
        />
      </commonImports.Container>
    </>
  );
};




export default FlatsLoggedInView;

