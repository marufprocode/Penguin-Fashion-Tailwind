let discount = true; 
document.getElementById('coupon-Btn').addEventListener('click', function(){
    if(discount){
        const couponFld = document.getElementById('coupon-filed');
    const jacketPrice = document.querySelectorAll('.text-jacketprice');
    if(couponFld.value === 'DOM'){
        for(let i = 0; i <jacketPrice.length; i++){
            const discountPrice = parseInt(jacketPrice[i].innerText)*0.30;
            jacketPrice[i].innerText= parseInt(jacketPrice[i].innerText) - discountPrice;
        }
    }
    else{
        alert ("Sorry Coupon Code doesn't macth");
    }
    discount = false;
    }
    
}) ; 