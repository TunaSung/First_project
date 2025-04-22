import ECPAY from './ECPAY_Payment_node_js/lib/ecpay_payment'

// 定義了有關 CVS（便利商店）相關資訊的結構，包括商店過期日期、描述和支付訊息網址等。
interface CVS_INFO {
  StoreExpireDate: string; // 商店過期日期
  Desc_1: string; // 描述1
  Desc_2: string; // 描述2
  Desc_3: string; // 描述3
  Desc_4: string; // 描述4
  PaymentInfoURL: string; // 支付訊息的網址
}

// 定義了與 CVS 交易相關的參數，包括商戶交易號、交易日期、總金額、交易描述、商品名稱和回傳網址等
interface CVS_PARAMS {
  MerchantTradeNo: string; // 商戶交易號
  MerchantTradeDate: string; // 商戶交易日期
  TotalAmount: string; // 總金額
  TradeDesc: string; // 交易描述
  ItemName: string; // 商品名稱
  ReturnURL: string; // 回傳網址
}

// 定義了用於創建帳單所需的參數結構，包含 CVS_INFO 和 CVS_PARAMS 兩個主要部分，以及可選的發票參數和客戶重定向網址。
// 在 cvsInfo 屬性後加上問號，表示這個屬性是可選的（optional）。
interface CreateBillParams {
  cvsInfo?: CVS_INFO; // CVS 信息
  cvsPrams: CVS_PARAMS; // CVS 參數
  inv_param?: {}; // 可選的發票參數
  client_redirect_url?: string; // 可選的客戶重定向網址
}

// 定義optionsc後再依據 IECPayAdapterOptions 創建的一個具體變數或物件。
interface IECPayAdapterOptions {
  OperationMode: "Test" | "Production", //Test or Production
  MercProfile: {
    MerchantID: string;
    HashKey: string;
    HashIV: string;
  },
  IgnorePayment: [];
  IsProjectContractor: boolean;
}

// 定義了預設的選項，這些選項將用於初始化 ECPay 的適配器。
const defaultOptions: IECPayAdapterOptions = {
  OperationMode: "Test", //Test or Production
  MercProfile: {
    MerchantID: "2000132",
    HashKey: "5294y06JbISpM5x9",
    HashIV: "v77hoKGq4kWxNNIS"
  },
  "IgnorePayment": [
    //    "Credit",
    //    "WebATM",
    //    "ATM",
    //    "CVS",
    //    "BARCODE",
    //    "AndroidPay"
  ],
  "IsProjectContractor": false
}

// 定義了一個用於適配 ECPay 的接口，包括一個名為 createCVS 的方法。這個方法接受 CreateBullParams 類型的參數，並返回一個字串。
export interface IECPayAdapter {
  createCVS(createBillParams: CreateBillParams): string; // 用於創建 CVS 的方法
}

// 讓ECPayAdapter使用 ECPay 提供的 API 來執行支付相關的操作
export class ECPayAdapter implements IECPayAdapter {
  private ecpayInstance;
  constructor(options: IECPayAdapterOptions = defaultOptions) {
  this.ecpayInstance = new ECPAY(options);
  }
  createCVS = (createParams: CreateBillParams) => {
    const { cvsInfo = {
      StoreExpireDate: '',
      Desc_1: '',
      Desc_2: '',
      Desc_3: '',
      Desc_4: '',
      PaymentInfoURL: ''},
      cvsPrams, inv_param = {}, client_redirect_url = '' } = createParams;

      const html = this.ecpayInstance.payment_client.aio_check_out_cvs(cvsInfo, cvsPrams, inv_param, client_redirect_url)
      return html;
    
  }
}
