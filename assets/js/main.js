function calculateVAT() {
    const price = document.getElementById("price").value;
    const vatRate = document.getElementById("vatRate").value;
    const calculationType = document.getElementById("calculationType").value;

    if (calculationType === "netToGross") {
        vat = price * (vatRate / 100);
        result = parseFloat(price) + parseFloat(vat);
        netPrice = price
    } else {
        vat = price * (vatRate / 100);
        result = parseFloat(price) - parseFloat(vat);
        netPrice = parseFloat(price) - parseFloat(vat);
    }
    document.getElementById("result").innerHTML = result;
    document.getElementById("vat").innerHTML = vat;
    document.getElementById("netPrice").innerHTML = netPrice;
}
