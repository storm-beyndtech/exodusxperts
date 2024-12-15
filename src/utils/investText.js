import invest from "../assets/sec3.svg"


export const investment = {
  title: 'INVESTMENT',
  subtitle: 'Invest in the future of the world',
  title2: "PRICING",
  subtitle2: "EXODUS EXPERTS PACKAGES",
  image: invest,
  link: '#',
  plans: [
  {
    id: 1,
    percent: 1.5,
    min: 300,
    max: 500,
    title: "STANDARD PLAN",
    falsepoints: [],
    truepoints: ["Duration - 30 days", "Daily Interest - 1.5%"],
    background: "#4E6E81", 
  },
  {
    id: 2,
    percent: 2.5,
    title: "MEDIUM PLAN",
    min: 500,
    max: 999,
    falsepoints: [],
    truepoints: ["Duration - 2 months", "Daily Interest - 2.5%"],
    background: "#F9DBBB",   
  },
  {
    id: 3,
    percent: 3.5,
    min: 1000,
    max: 9999,
    title: "EXECUTIVE PLAN",
    falsepoints: [],
    truepoints: ["Duration - 3 months", "Daily Interest - 3.5%"],
    background: "#b4ff3b",   
  },
  {
    id: 4,
    percent: 10,
    min: 10000,
    max: "Unlimited",
    title: "PROFESSIONAL PLAN",
    falsepoints: [],
    truepoints: ["Duration - 6 months", "Daily Interest - 10%"],
    background: "#FF0303",    
  },
]};