ga("create", "UA-XXXXX-Y");
ga("require", "ec");
ga("ec:addProduct", {
  id: "b55da",
  name: "Flexigen T-Shirt",
  price: "16.00",
  brand: "Flexigen",
  category: "T-Shirts",
  variant: "red",
  dimension1: "M",
  position: 0,
  quantity: 1
});
ga("ec:addProduct", {
  id: "57b9d",
  name: "Kiosk T-Shirt",
  price: "55.00",
  brand: "Kiosk",
  category: "T-Shirts",
  variant: "red",
  dimension1: "M",
  position: 1,
  quantity: 1
});
ga("ec:setAction", "checkout", {
  step: 2
});
ga("send", "pageview");
