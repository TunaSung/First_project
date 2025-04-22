import { PaymentProvider, PaymentWay } from "@/model/order"
import { ECPayAdapter } from "../ecpay";
import dayjs from 'dayjs';

interface OrderDetail {
    price: string;
    name: string;
    amount: number;
}

export interface PaymentPayload {
    billId: string;
    totalPrice: number;
    desc: string;
    details: OrderDetail[];
    returnURL: string;
  }

//建立發派function
export const paymentDispatcher = async ({
   paymentProvider,
   paymentWay,
   payload
}: {
  paymentProvider: any;
  paymentWay: PaymentWay;
  payload: PaymentPayload;
}) => {

    const  ecpay = new ECPayAdapter();

    if (paymentProvider === PaymentProvider.ECPAY) {
        if (paymentWay === PaymentWay.CVS) {
          const html = ecpay.createCVS({
            cvsPrams: {
              MerchantTradeNo: payload.billId,
              MerchantTradeDate: dayjs(new Date()).format("YYYY/MM/DD HH:mm:ss"),
              TotalAmount: String(payload.totalPrice),
              TradeDesc: payload.desc,
              ItemName: payload.details.map(content => 
              `${content.name} x ${content.price}`).join("#"),
              ReturnURL: payload.returnURL,
    
            },
    
          });
          return html;
        } else throw new Error('No suitable payment way.');
    }
}

