// challengeData.js

export const step2Prices = {
  "$2k": 132,
  "$5k": 265,
  "$10k": 530,
  "$20k": 1060,
  "$50k": 2650,
  "$100k": 5300,
};

export const instantFundedPrices = {
  "$2k": 1000,
  "$5k": 2000,
  "$10k": 4000,
  "$20k": 8000,
  "$50k": 20000,
  "$100k": 40000,
};

export const step2Phases = [
  {
    name: "Phase 1",
    desc: "Reach the simulated profit target while staying within the risk parameters.",
    trading: "Unlimited",
    dailyLoss: "4%",
    maxLoss: "8%",
    profitTarget: "8%",
    leverage: "1:30",
    reward: "-",
    profitSplit: "20%",
  },
  {
    name: "Phase 2",
    desc: "Hit the profit target again while following the same risk rules.",
    trading: "Unlimited",
    dailyLoss: "4%",
    maxLoss: "8%",
    profitTarget: "8%",
    leverage: "1:30",
    reward: "-",
    profitSplit: "20%",
  },
  {
    name: "Phase 3",
    desc: "Maintain consistency and meet the final profit objective under the same rules.",
    trading: "Unlimited",
    dailyLoss: "4%",
    maxLoss: "8%",
    profitTarget: "8%",
    leverage: "1:30",
    reward: "-",
    profitSplit: "20%",
  },
];

export const instantFundedPhase = [
  {
    name: "Instant Funded",
    desc: "Single phase challenge with higher price for funded account.",
    trading: "Unlimited",
    dailyLoss: "4%",
    maxLoss: "8%",
    profitTarget: "8%",
    leverage: "1:30",
    reward: "-",
    profitSplit: "20%",
  },
];

export const paymentMethods = ["Bitcoin", "Visa", "Amex", "Mastercard", "PayPal"];

export const benefits = [
  "Up-To 80% Of The Profits",
  "One-Time Payment",
  "5 Minimum Trading Days",
];
