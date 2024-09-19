/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let holding = 0;
    let lengthofPrices = prices.length;
    let diff = 0;
    for(let i=1; i < lengthofPrices; i++){
        diff = prices[i] - prices[i-1];
        if (diff > 0){
            holding += diff;
        }
    }
    console.log("holding", holding);
    return holding;
};
let prices = [7,1,5,3,6,4]
const profit = maxProfit(prices);

console.log("profit", profit);

//---// Thinking //---//
// i represents the day
// example: prices[1] represents the first days' price.

// Each day 
// if you have a stock
    // 1: can sell  
    // 2: can sell and buy a stock on that day
// if you don't have a stock    
    // 1: you can buy a stcok

// Find and return the maximum profit you can achieve

// The Core Idea:
// Profit from Every Increase:
// Any day where the price is higher than the previous day represents an opportunity to make a profit.
// By summing up all these positive differences, you achieve the maximum possible profit.