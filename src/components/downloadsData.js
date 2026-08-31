// Import KYC PDFs
import kycCompletePdf from '../assets/Downloads/KYC_Complete_Form.pdf';
import kycSamplePdf from '../assets/Downloads/KYC_Sample(Individual)_and_Required_form.pdf';
import corporatePdf from '../assets/Downloads/Corporate_Client_Registration_Form.pdf';
import corporateSamplePdf from '../assets/Downloads/TMS_Corporate_Sample_Form.pdf';
import buySellPdf from '../assets/Downloads/Buy_Sell_Order.pdf';
import tmsClosingPdf from '../assets/Downloads/TMS_Closing_Form.pdf';
import tmsMinorPdf from '../assets/Downloads/TMS_Minor_to_Major.pdf';
import tmsUpdatePdf from '../assets/Downloads/TMS_Update_Form.pdf';
import tmsAgreementPdf from '../assets/Downloads/TMS_Agreement.pdf';

// Import Demat PDFs
import dematCompletePdf from '../assets/Downloads/1.Demat_Form_Complete_Individual.pdf';
import dematSamplePdf from '../assets/Downloads/Demat_Sample_form_and_required_document.pdf';
import dpCorporatePdf from '../assets/Downloads/DP_corporate_Form_2000.pdf';
import dpCorporateSamplePdf from '../assets/Downloads/Dp_Corporate_form_Sample.pdf';
import dematAgreementPdf from '../assets/Downloads/Demat_Agreement.pdf';
import dematMinorPdf from '../assets/Downloads/DEMAT_Minor_to_Major.pdf';
import waccPdf from '../assets/Downloads/WACC_Manual_entry_form.pdf';
import drnPdf from '../assets/Downloads/4.DRN_Form.pdf';
import debitSlipPdf from '../assets/Downloads/9.Debit_Instruction_Slip.pdf';

export const kycFiles = [
  { 
    id: 'kyc-1',
    title: "Individual Client Registration Form", 
    url: kycCompletePdf, 
    sampleUrl: kycSamplePdf 
  },
  { 
    id: 'kyc-2',
    title: "Corporate Client Registration Form", 
    url: corporatePdf, 
    sampleUrl: corporateSamplePdf 
  },
  { id: 'kyc-3', title: "Buy Sell Order", url: buySellPdf },
  { id: 'kyc-4', title: "TMS Closing Form", url: tmsClosingPdf },
  { id: 'kyc-5', title: "TMS Minor to Major Form", url: tmsMinorPdf },
  { id: 'kyc-6', title: "TMS Update Form", url: tmsUpdatePdf },
  { id: 'kyc-7', title: "Agreement Form", url: tmsAgreementPdf }
];

export const dematFiles = [
  { 
    id: 'demat-1',
    title: "Demat Form Complete Individual", 
    url: dematCompletePdf, 
    sampleUrl: dematSamplePdf 
  },
  { 
    id: 'demat-2',
    title: "DP Corporate Form 2000", 
    url: dpCorporatePdf, 
    sampleUrl: dpCorporateSamplePdf 
  },
  { id: 'demat-3', title: "Demat Agreement", url: dematAgreementPdf },
  { id: 'demat-4', title: "Demat Minor to Major Form", url: dematMinorPdf },
  { id: 'demat-5', title: "WACC Manual Entry Form", url: waccPdf },
  { id: 'demat-6', title: "DRN Form", url: drnPdf },
  { id: 'demat-7', title: "Debit Instruction Slip", url: debitSlipPdf }
];