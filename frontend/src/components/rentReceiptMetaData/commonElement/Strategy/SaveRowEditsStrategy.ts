// SaveRowEditsStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as RentReceiptMDataModel from "../../../../models/rentReceiptMetaDataDetails";
import * as RentReceiptMDataApi from "../../../../network/rentReceiptMDataApi";

export class SaveRowEditsStrategy implements ActionStrategy {
  async handle(values: RentReceiptMDataModel.IRentReceiptMetaDataDetailsViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void> {

    if (!Object.keys(validationErrors).length) {
      //send/receive api updates here, then refetch or update local table data for re-render
      const updatedRentReceiptMDataDetails: RentReceiptMDataModel.IRentReceiptMetaDataDetailsViewModel = {
        _id: values._id,
      rentReceiptMetaDataRefNm: values.rentReceiptMetaDataRefNm,
      logo: values.logo,
      bk_details_bk_name: values.bk_details_bk_name,
      bk_details_bk_acc_number: values.bk_details_bk_acc_number,
      bk_details_bk_ifsc: values.bk_details_bk_ifsc,
      bk_details_acc_holder_name: values.bk_details_acc_holder_name,
      wallet_details_type: values.wallet_details_type,
      wallet_details_phone_number: values.wallet_details_phone_number,
      wallet_details_name: values.wallet_details_name,
      wallet_details_upi_id: values.wallet_details_upi_id,
      will_generate_direct_upi_payment_links: values.will_generate_direct_upi_payment_links,
      payment_qr_code: values.payment_qr_code,
      payment_signature: values.payment_signature,
      payment_watermark: values.payment_watermark,
      createdAt: values.createdAt,
      updatedAt: values.updatedAt,
      };

      // Send the API request to update the Rent Receipt Meta Data
      await RentReceiptMDataApi.UpdateOneRecord(
        updatedRentReceiptMDataDetails._id,
        updatedRentReceiptMDataDetails
      );

      RentReceiptMDataApi.RetrieveAllRecords().then((updatedRentReceiptMDataDetails: RentReceiptMDataModel.IRentReceiptMetaDataDetailsViewModel[]) => {
        setMessage(
          `Rent Receipt Meta Data ${row.getValue("rentReceiptMetaDataRefNm")} Updated successfully.`
        );
        setOpen(true);

      });
      exitEditingMode(); //required to exit editing mode and close modal
    }
  }
}