// ==========================================
// EXPENSE TRACKER JS
// ==========================================

// Part 1 – Store Sample Expenses
// Each expense is stored as a number.

let rent = 300;
let food = 80;
let transport = 60;
let internet = 120;
let entertainment = 50;
let utilities = 90;


// Part 2 – Flag High Spending
// An expense above $100 is considered High Spending.

if (rent > 100) {
    console.log("Rent: High Spending");
} else if (rent > 0) {
    console.log("Rent: Normal Spending");
} else {
    console.log("Rent: No Spending");
}

if (food > 100) {
    console.log("Food: High Spending");
} else if (food > 0) {
    console.log("Food: Normal Spending");
} else {
    console.log("Food: No Spending");
}

if (transport > 100) {
    console.log("Transport: High Spending");
} else if (transport > 0) {
    console.log("Transport: Normal Spending");
} else {
    console.log("Transport: No Spending");
}

if (internet > 100) {
    console.log("Internet: High Spending");
} else if (internet > 0) {
    console.log("Internet: Normal Spending");
} else {
    console.log("Internet: No Spending");
}

if (entertainment > 100) {
    console.log("Entertainment: High Spending");
} else if (entertainment > 0) {
    console.log("Entertainment: Normal Spending");
} else {
    console.log("Entertainment: No Spending");
}

if (utilities > 100) {
    console.log("Utilities: High Spending");
} else if (utilities > 0) {
    console.log("Utilities: Normal Spending");
} else {
    console.log("Utilities: No Spending");
}


// Part 3 – Calculate Total Expenses
// Store all six expenses inside an array.

let expenses = [
    rent,
    food,
    transport,
    internet,
    entertainment,
    utilities
];

// Calculate the total using a loop.
// Do NOT manually add the expenses.

let totalExpenses = 0;

for (let expense of expenses) {
    totalExpenses += expense;
}

console.log("Total Expenses: $" + totalExpenses);


// Part 4 – Budget Check

let monthlyIncome = 800;

console.log("Monthly Income: $" + monthlyIncome);

if (totalExpenses <= monthlyIncome) {
    console.log("Status: Within Budget");
} else {
    console.log("Status: Over Budget");
}
