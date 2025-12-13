// challengeData.js

export const step2Prices = {
  "$10k": 150,
  "$25k": 250,
  "$50k": 100,
  "$100k": 600,
  "$200k": 1250,
};

export const instantFundedPrices = {
  "$200k": 1500,
  "$500k": 3000,
 
};

export const step2Phases = [
  {
    name: "Phase 1",
    desc: "Reach the simulated profit target while staying within the risk parameters.",
    trading: "360 Days",
    dailyLoss: "5%",
    maxLoss: "10%",
    profitTarget: "10%",
    leverage: "100",
    profitSplit: "--",
  },
  {
    name: "Phase 2",
    desc: "Hit the profit target again while following the same risk rules.",
    trading: "360 Days",
    dailyLoss: "5%",
    maxLoss: "10%",
    profitTarget: "10%",
    leverage: "100",
   
    profitSplit: "--",
  },
  {
    name: "Funded",
    desc: "Maintain consistency and meet the final profit objective under the same rules.",
    trading: "Unlimited",
    dailyLoss: "5%",
    maxLoss: "10%",
    profitTarget: "--",
    leverage: "100",
    profitSplit: "--",
  },
];

export const instantFundedPhase = [
  {
    name: "Instant Funded",
    desc: "Single phase challenge with higher price for funded account.",
    trading: "Unlimited",
    dailyLoss: "3",
    maxLoss: "7",
    profitTarget: "5",
    leverage: "100",
    reward: "-",
    profitSplit: "80/20",
  },
];

export const paymentMethods = ["Bitcoin", "Visa", "Amex", "Mastercard", "PayPal"];

export const benefits = [
  "Up-To 80% Of The Profits",
  "One-Time Payment",
  "5 Minimum Trading Days",
];
