console.log('"THE MISSION"\n\nPart 1:Taxes\n');
//PART 1: TAXES
//Consider this scenario: You have a shopping cart with 6 items in it.  The total  price of all the items combined is $78.50 You have a coupon that gets you 25%  off of the total price. After the coupon is applied, taxes will be applied at a  rate of 7.75% of the total cost (cost after coupon)
//declared variables
const bacon = 12.45;
const bagOfRice = 10.50;
const eggs = 10.19;
const buns = 18.32;
const oranges = 13.55;
const shampoo = 13.49;
//taxrate in Calaveras County, California
const taxRate = 0.0775;
const coupon = 0.25;

//total price
let totalPrice = bacon + bagOfRice + eggs + buns + oranges + shampoo;
//price with discount
let priceAfterDiscount = totalPrice - (totalPrice * coupon);
//tax to be charged
let taxes = (priceAfterDiscount * taxRate)
//final price
let finalPrice = priceAfterDiscount + taxes;
console.log('Subtotal:$' + totalPrice.toFixed(2));
console.log('Price after discount:$' + priceAfterDiscount.toFixed(2));
console.log('Tax Applied(7.75%):$' + taxes.toFixed(2));
console.log('Final Amount:$' + finalPrice.toFixed(2) + '\n');