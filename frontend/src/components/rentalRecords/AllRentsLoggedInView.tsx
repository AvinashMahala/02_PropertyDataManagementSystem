//------------------------------------Imports Section------------------------
import * as AllRentDetailsApi from "../../network/allRentDetailsApi";
import * as UsersApi from "../../network/users_api";
import * as FlatsApi from "../../network/flatDetailsApi";
import * as PropertiesApi from "../../network/allPropertiesApi";
import * as TenantsApi from "../../network/tenantApi";
import * as UserModel from "../../models/user";
import * as TenantModel from "../../models/tenantModel";
import * as FlatsModel from "../../models/flatModel";
import * as PropertiesModel from "../../models/allPropertiesModel";
import * as AllRentDetailsModel from "../../models/allRentDetailsModel";
import PropertyPageStyles from "../../styles/PropertyPage.module.css";
import * as commonImports from "../../commonCode/CommonImports";
import { CreateNewModal } from "./commonElement/CreateNewModal";

import { generateRentReceipt } from "./ReceiptGenerationLogic";

import { ReceiptOutlined } from "@mui/icons-material";

import PdfModal from "./PdfModal";

//Strategy DesignPattern Used for the Create, Update and Delete Operations
import { CreateNewRowStrategy } from "./commonElement/Strategy/CreateNewRowStrategy";
import { SaveRowEditsStrategy } from "./commonElement/Strategy/SaveRowEditsStrategy";
import { DeleteRowStrategy } from "./commonElement/Strategy/DeleteRowStrategy";

import getEditTextFieldProps from "./commonElement/GetEditTextFieldProps"; // Adjust the path to your GetEditTextFieldProps file

//Factory DesignPattern Used for the Main Grid View
import { GridFactory } from "./commonElement/Factory/GridFactory"; // Adjust the path to your GridFactory file
//-------------------------------End of Imports Section---------------------



let usersArr: UserModel.User[] = []; //This stores all the users retrieved from the database
let flatsArr: FlatsModel.IFlatViewModel[] = [];
let propertiesArr: PropertiesModel.IPropertyDetailsViewModel[] = [];
let tenantsArr: TenantModel.ITenantViewModel[] = [];

const AllRentsLoggedInView = () => {
  const [rentDetailsArr, setRentDetailsArr] = commonImports.useState<
    AllRentDetailsModel.IRentDetailsViewModel[]
  >([]);
  const [createModalOpen, setCreateModalOpen] = commonImports.useState(false);
  const [validationErrors, setValidationErrors] = commonImports.useState<{
    [cellId: string]: string;
  }>({});
  const [open, setOpen] = commonImports.useState(false);
  const [message, setMessage] = commonImports.useState("");

  const [pdfModalVisible, setPdfModalVisible] = commonImports.useState(false);

  const createNewRowStrategy = new CreateNewRowStrategy();
  const saveRowEditsStrategy = new SaveRowEditsStrategy();
  const deleteRowStrategy = new DeleteRowStrategy();

  const togglePdfModal = () => {
    setPdfModalVisible(!pdfModalVisible);
  };

  const handleCreateNewRow = async (
    values: AllRentDetailsModel.IRentDetailsViewModel
  ) => {
    rentDetailsArr.push(values);
    createNewRowStrategy
      .handle(values, {}, null, setMessage, setOpen)
      .then(() => {
        AllRentDetailsApi.RetrieveAllRecords().then(
          (allRentDetails: AllRentDetailsModel.IRentDetailsViewModel[]) => {
            setRentDetailsArr(allRentDetails);
          }
        );
      })
      .catch((error) => {})
      .finally(() => {});
  };

  //This function is called when the user clicks on the UPDATE button
  const handleSaveRowEdits: commonImports.MaterialReactTableProps<AllRentDetailsModel.IRentDetailsViewModel>["onEditingRowSave"] =
    async ({ exitEditingMode, row, values }) => {
      rentDetailsArr[row.index] = values;
      await saveRowEditsStrategy.handle(
        values,
        validationErrors,
        row,
        setMessage,
        setOpen,
        exitEditingMode
      );
    };

  //This function is called when the user clicks on the CANCEL button
  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  //This function is called when the user clicks on the DELETE button
  const handleDeleteRow = commonImports.useCallback(
    async (
      row: commonImports.MRT_Row<AllRentDetailsModel.IRentDetailsViewModel>
    ) => {
      if (
        !window.confirm(
          `Are you sure you want to delete ${row.getValue("propertyName")}`
        )
      ) {
        return;
      }
      rentDetailsArr.splice(row.index, 1);
      setRentDetailsArr([...rentDetailsArr]);
      await deleteRowStrategy.handle(
        null,
        null,
        row,
        setMessage,
        setOpen,
        null
      );
    },
    [rentDetailsArr]
  );

  //This function is called when the user clicks on the EDIT button to set the Edit Modal Properties of The Columns.
  // const getCommonEditTextFieldProps = getEditTextFieldProps(setValidationErrors, usersArr);

  //-----------------All the Function Declarations Ends Here-----------------

  //This useEffect is called when the page is loaded for the first time
  commonImports.useEffect(() => {
    UsersApi.fetchUsers().then((response) => {
      usersArr = response;
    });
    PropertiesApi.RetrieveAllRecords().then((response) => {
      propertiesArr = response;
    });
    FlatsApi.RetrieveAllRecords().then((response) => {
      flatsArr = response;
    });
    TenantsApi.RetrieveAllRecords().then((response) => {
      tenantsArr = response;
    });

    AllRentDetailsApi.RetrieveAllRecords().then((response) => {
      setRentDetailsArr(response);
    });
  }, []);

  //This is Used to set the columns of the table
  const rentDetailsDetailsGridColumns = GridFactory(
    getEditTextFieldProps,
    usersArr,
    validationErrors,
    setValidationErrors,
    propertiesArr,
    flatsArr,
    tenantsArr
  );

  const handleOk = () => {
    // Perform the operation you want when the OK button is clicked
    console.log("OK button has been clicked!");
    AllRentDetailsApi.RetrieveAllRecords().then((allRentDetails) => {
      setRentDetailsArr(allRentDetails);
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
        <h1 className={PropertyPageStyles.headerStyle}>Rental Records</h1>
        <commonImports.MaterialReactTable
          displayColumnDefOptions={{
            "mrt-row-actions": {
              muiTableHeadCellProps: {
                align: "center",
              },
              size: 30,
            },
          }}
          columns={rentDetailsDetailsGridColumns}
          data={rentDetailsArr}
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
              <commonImports.Tooltip arrow placement="right" title="Receipt">
                <commonImports.IconButton
                  color="primary"
                  onClick={togglePdfModal}
                >
                  <ReceiptOutlined />
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
              Create New Rent Record
            </commonImports.Button>
          )}
        />
        <PdfModal
          isOpen={pdfModalVisible}
          onClose={togglePdfModal}
          propertyDetails="Property ABC"
          billNumber="123"
          generatedOn="2023-06-30"
          rentDetails="Rent details..."
          tenantDetails="Tenant details..."
          paymentOptions={["Option 1", "Option 2"]}
        />

        <CreateNewModal
          columns={rentDetailsDetailsGridColumns}
          open={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
          onSubmit={handleCreateNewRow}
          propertiesArr={propertiesArr}
          flatsArr={flatsArr}
          tenantsArr={tenantsArr}
        />
      </commonImports.Container>
    </>
  );
};

export default AllRentsLoggedInView;
