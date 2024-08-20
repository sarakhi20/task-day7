var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
  var res = JSON.parse(req.response);
  var currency = res.filter((element) => {
return element.currencies && element.currencies.USD
  });
  console.log(currency);
};