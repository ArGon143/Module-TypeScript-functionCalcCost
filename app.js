const totalPrice = ({ price, discount, isInstallment, months }) => {
    const calcDiscount = discount ? discount / 100 : 0;
    const discountPrice = discount > 0 ? price - price * calcDiscount : price;
    const result = isInstallment && months > 0 ? discountPrice / months : discountPrice;
    return Math.round(result);
};
const price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});
console.log("price", price);
