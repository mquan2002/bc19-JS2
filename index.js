let address ="Hoàng Triệu Minh Quân, BC19-Javascript2"

console.log(address);
// Bai 1
// Bước 1 : tạo biến số thứ tự tăng dần
// Bước 2 : gán giá trị cho 3 số nguyên
// Bước 3 : Sử dụng phương thức sort để sắp xếp các số thứ tự tăng dần
// Bước 4 : in số thự tự tăng dần ra console

const Bai_1 ="Bai 1"
console.log(Bai_1);


const x=5;
const y=6;
const z=4;
let Sothutu =  [x,y,z];
console.log("Nhap vao 3 so nguyen:",x,y,z);
let Sapxepsothutu = (x,y) => x - y;
Sothutu.sort(Sapxepsothutu);
console.log("So thu tu tang dan:",Sothutu);


// Bai 2
/*
Bước 1 : tạo biến B,M,A, người sử dụng
Bước 2 : gán giá trị cho B,M,A lần lượt là bố, mẹ và anh
Bước 3 : Nhập vào người sử dụng
Bước 4 : sử dụng hàm if để xác định ai sử dụng
Bước 5 : In kết quả chào hỏi người sử dụng ra console*/
const Bai_2 ="Bai 2"
console.log(Bai_2);

let B,M,A;
B="Bo";
M="Me";
A="Anh";
var nguoisudung = A;
console.log("Ai la nguoi su dung may:",nguoisudung );
if (nguoisudung === B)  {
    console.log("Xin chao bo");
} else if (nguoisudung === M) {
    console.log("Xin chao me");
} else {
    console.log("Xin chao anh");
}



//Bai 3
/* 
Bước 1 : tạo biến 3 số nguyên, số lẻ, số chẳn
Bước 2 : gán giá trị cho 3 số nguyên
Bước 3 : Sử dụng if else để check chẳn lẻ
Bước 4 : xuất số chẳn và lẻ ra console*/
const Bai_3 ="Bai 3"
console.log(Bai_3);

const X = 7;
const Y = 8;
const Z = 10;
let songuyen = ([X,Y,Z]);
console.log("Cho 3 so nguyen:",X,Y,Z);
let countOdd, countEven;

if (songuyen%2)
{
    countOdd++;
}    
else 
{
    countEven;
}
console.log("So chan la:",countEven);
console.log("So le la:",countOdd);





 

//Bai 4
/*
Bước 1 : tạo biến và gán giá trị cho 3 cạnh hình tam giác
Bước 2 : xét điều kiện của một hình tam giác là tổng hai cạnh bất kì luôn lớn hơn cạnh còn lại 
Bước 3 : nếu đúng thì ta tiếp túc xét hình tam giác gì, còn không thì nhập lại các cạnh 
Bước 4 : xét tam giác vuông là tam giác có bình phương một cạnh bằng tổng bình phương hai cạnh còn lại
bước 5 : xét tam giác đều là tam giác có ba cạnh bằng nhau
bước 6 : xét tam giác cân là tam giác có hai cạnh bằng nhau
bước 7 : in kết quả hình tam giác là gì hình gì ra console*/
const Bai_4 ="Bai 4"
console.log(Bai_4);

const a = 3;
const b = 4;
const c = 5;
console.log("Ba canh hinh tam giac lan luot la:",a,b,c);
if (a+b <= c || a + c  <= b || b + c <= a)
{
    console.log("Tam giac khong hop le.Xin kiem tra lai.");
}
else 
{
    console.log("Day la tam giac");
    if ((a == b) && (b == c))
    {
        console.log("Deu");
    }
    else
    {
        if(a * a + b * b == c * c || a * c + c * c == b * b || b * b + c * c == a * c)
        {
            console.log("Vuong");
        }
        if(a == b || a == c || b == c)
        {
            console.log("Can");
        }
        else
        {
            console.log("Thuong");
        }
    }
}


