import type { weeklyStats, paymentGateway } from "@/types/dashboard/Ecommerce";
import icon1 from "@/assets/images/svgs/icon-paypal.svg";
import icon2 from "@/assets/images/svgs/icon-office-bag.svg";
import icon3 from "@/assets/images/svgs/icon-master-card.svg";
import icon4 from "@/assets/images/svgs/icon-pie.svg";

/*--Weeekly Stas--*/
const weeklyStatsData: weeklyStats[] = [
    {
        title: "Top Sales",
        subtitle: "Johnathan Doe",
        rank: "+68",
        bgcolor: "primary",
        textcolor: "primary",
    },
    {
        title: "Best Seller",
        subtitle: "Footware",
        rank: "+45",
        bgcolor: "success",
        textcolor: "success",
    },
    {
        title: "Most Commented",
        subtitle: "Fashionware",
        rank: "+14",
        bgcolor: "error",
        textcolor: "error",
    },
];

/*--Payment gateways--*/
const paymentGateways : paymentGateway[] = [
    {
        img: icon1,
        title:'Paypal',
        subtitle:'Big Brands',
        rank:'+$6,235',
        disable:'',
        bgcolor:"primary",
      },
      {
        img: icon2,
        title:'Wallet',
        subtitle:'Bill payment',
        rank:'-$345',
        disable:'emphasis',
        bgcolor:"success",
      },
      {
        img: icon3,
        title:'Credit Card',
        subtitle:'Money reversed',
        rank:'+$2,235',
        disable:'',
        bgcolor:"warning",
      },
      {
        img: icon4,
        title:'Refund',
        subtitle:'Bill Payment',
        rank:'-$32',
        disable:'emphasis',
        bgcolor:"error",
      },
];

export { weeklyStatsData, paymentGateways }