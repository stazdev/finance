import {
  MoneyBill,
  BriefCase,
  Savings,
  Expense,
  Investment,
  Emergency,
} from "../assets/icons";

import { COLORS } from "./theme/";

const accounts = [
  {
    id: 1,
    icon: <MoneyBill />,
    description: "Main Balance",
    balance: 10000,
    back: COLORS.main,
  },
  {
    id: 2,
    icon: <BriefCase />,
    description: "Business Wallet",
    balance: 20000,
    back: COLORS.linear2,
  },
  {
    id: 3,
    icon: <Savings />,
    description: "Savings Wallet",
    balance: 10000,
    back: COLORS.savings,
  },
  {
    id: 4,
    icon: <Expense />,
    description: "Expense Wallet",
    balance: 10000,
    back: COLORS.expense,
  },
  {
    id: 5,
    icon: <Investment />,
    description: "Investment Wallet",
    balance: 10000,
    back: COLORS.investment2,
  },
  {
    id: 6,
    icon: <Emergency />,
    description: "Emergency Wallet",
    balance: 10000,
    back: COLORS.emergency,
  },
];

export default accounts;
