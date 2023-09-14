const PriceFormat = ({price}) => {
  return (
    Intl.NumberFormat("en-IN",{
        style: "currency",
        currency: "INR",
        maximumFractionDigits:2,
      }).format(price*40)
  );
}

export default PriceFormat;