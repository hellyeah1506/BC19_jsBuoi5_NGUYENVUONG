document.getElementById("ketQuaXt").onclick = function(){
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const number3 = document.getElementById("number3").value;
    const khuVuc = document.getElementById("KhuVuc").value;
    const doiTuong = document.getElementById("doiTuong").value;
    const diemChuan = document.getElementById("diemChuan").value;
    const tongDiem = (parseInt(number1) + parseInt(number2) + parseInt(number3) + parseInt(khuVuc) + parseInt(doiTuong));
    

    if(tongDiem >= diemChuan){
        document.getElementById("showketqua").innerHTML = `Số Điểm của bạn là: ${tongDiem} Điểm
        <br>
        Bạn Đã Đậu
        `;
    }else{
        document.getElementById("showketqua").innerHTML = `Số Điểm của bạn là: ${tongDiem} Điểm
        <br>
        chúc bạn may mắn lần sau
        `;
    }
}



































const KW_50 = 500;
const KW_50_100 = 650;
const KW_150 = 850;
const KW_200 = 1100;
const KW_200_NEXT = 1300;




document.getElementById("ketqua").onclick = function(){
    const kwUseEL = document.getElementById("KWtieuthu").value;
    let price = 0

    if(kwUseEL <= 50){
        price += kwUseEL * KW_50;
        displayPrice(price)
    }
    else if(kwUseEL <= 100){
        price += 50 *KW_50 + ((kwUseEL-50)*KW_50_100);
        displayPrice(price)
    }
    else if(kwUseEL <= 150){
        price += 50 *KW_50 + (50 * KW_50_100) + ((kwUseEL-100) * KW_150);
        displayPrice(price)
    } else if(kwUseEL <= 200){
        price += 50 *KW_50 + (50 * KW_50_100) +(50 * KW_150)+((kwUseEL-150) * KW_200);
        displayPrice(price)
    }
    else{
        price += 50 *KW_50 + (50 * KW_50_100) +(50 * KW_150)+(50 * KW_200)+((kwUseEL-200) * KW_200_NEXT);
        displayPrice(price)
    }
}


function displayPrice(price){

    const wrapperEl = document.getElementById("divThanhTien");
    const resultEl = document.getElementById("xuatTien");


    wrapperEl.style.display = "block";
    resultEl.innerHTML = "Số tiền điện của: " +  document.getElementById("userNameEl").value +  " <br> Là: "  + price.toLocaleString()+ " VND";
}
