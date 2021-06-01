let number= prompt('Nhập năm dương lịch:')
number1= number%10
number2= number%12
switch (number1){
        case 0: kq1 = "Canh";
                        break;
        case 1: kq1 = "Tân";
                        break;
        case 2: kq1 = "Nhâm";
                        break;
        case 3: kq1 = "Qúy";
                        break;
        case 4: kq1 = "Giáp";
                        break;
        case 5: kq1 = "Ất";
                        break;
        case 6: kq1 = "Bính";
                        break;
        case 7: kq1 = "Đinh";
                        break;
        case 8: kq1 = "Mậu";
                        break;
        case 9: kq1 = "Kỷ";
                        break;
        default: kq1 = "ko có"  
      }
switch(number2){
        case 0: kq2 = "Thân";
                        break;
        case 1: kq2 = "Dậu";
                        break;
        case 2: kq2 = "Tuất";
                        break;
        case 3: kq2 = "Hợi";
                        break;
        case 4: kq2 = "Tý";
                        break;
        case 5: kq2 = "Sửu";
                        break;
        case 6: kq2 = "Dần";
                        break;
        case 7: kq2 = "Mẹo";
                        break;
        case 8: kq2 = "Thìn";
                        break;
        case 9: kq2 = "Tỵ";
                        break;
        case 10: kq2 = "Ngọ";
                        break;
        case 11: kq2 = "Mùi";
                        break;
        default: kq2 = "kết quả" 
}                
alert('Năm nay là:'+ kq1+kq2 )