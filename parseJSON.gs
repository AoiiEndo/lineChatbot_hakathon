// jsonParseする関数
function parseJSON(jsonString) {
  var data = JSON.parse(jsonString);
  var shops = data.results.shop;
  console.log("shops: ", shops);
  var parsedShops = [];
  
  shops.forEach(function(shop) {
    var parsedShop = {};
    parsedShop.id = shop.id;
    parsedShop.name = shop.name;
    parsedShop.thumb = shop.logo_image;
    parsedShop.address = shop.address;
    parsedShop.urls = shop.urls.pc;
    parsedShops.push(parsedShop);
  });
  return parsedShops;
}