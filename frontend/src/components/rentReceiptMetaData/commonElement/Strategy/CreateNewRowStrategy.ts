// CreateNewRowStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as RentReceiptMDataModel from "../../../../models/rentReceiptMetaDataDetails";
import * as RentReceiptMDataApi from "../../../../network/rentReceiptMDataApi";

export class CreateNewRowStrategy implements ActionStrategy {

  async handle(values: RentReceiptMDataModel.IRentReceiptMetaDataDetailsViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any): Promise<void> {
    const insertRentReceiptMDataDetailsInput: RentReceiptMDataModel.IRentReceiptMetaDataDetailsViewModel = {
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


    // Send the API request to update the Owner
    RentReceiptMDataApi.createRentReceiptMetaDataDetails(insertRentReceiptMDataDetailsInput).then(() => {
      setMessage(
        `Rent Receipt Meta Data ${insertRentReceiptMDataDetailsInput.rentReceiptMetaDataRefNm} Added successfully.`
      );
      setOpen(true);
    });

  }
}