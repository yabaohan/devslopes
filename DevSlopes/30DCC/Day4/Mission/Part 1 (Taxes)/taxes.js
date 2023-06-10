console.log('"THE MISSION"\n\nPart 1:Taxes\n');
//PART 1: TAXES
//Consider this scenario: You have a shopping cart with 6 items in it.  The total  price of all the items combined is $78.50 You have a coupon that gets you 25%  off of the total price. After the coupon is applied, taxes will be applied at a  rate of 7.75% of the total cost (cost after coupon)
//declared variables
var bacon = 12.45;
var bagOfRice = 10.50;
var eggs = 10.19;
var buns = 18.32;
var oranges = 13.55;
var shampoo = 13.49;
//taxrate in Calaveras County, California
var taxRate = 0.0775;
var taxes;
var coupon = 0.25;

//total price
totalPrice = bacon + bagOfRice + eggs + buns + oranges + shampoo;
//price with discount
priceAfterDiscount = totalPrice - (totalPrice * coupon);
//tax to be charged
taxes = (priceAfterDiscount * taxRate)
//final price
finalPrice = priceAfterDiscount + taxes;
console.log('Subtotal:$' + totalPrice.toFixed(2));
console.log('Price after discount:$' + priceAfterDiscount.toFixed(2));
console.log('Tax Applied(7.75%):$' + taxes.toFixed(2));
console.log('Final Amount:$' + finalPrice.toFixed(2) + '\n');