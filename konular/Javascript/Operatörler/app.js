
const a=17;
const b="17"
const c=15;
let isim="burak";
let soyad="akkoç";
let e=14;
e++;
let d=15;

console.log(a===b);//değerler eşit olsada veri tipi eşit olmadığundan false değeri çıktı
console.log(a==b);//a ile b değişkenlerinin değeri eşit olduğundan eşittir veri tipibakılmaksızın 
console.log(a==c);//eşit olmayan iki değer 
console.log(a+b);//sayı ve yazı tipinde sayı olduğundan değerleri toplamadan yanyana yazdı
console.log(a+c);//matamematiksel toplama
console.log(isim+soyad);//yazı tipindeki iki değeri yanyana topladı
console.log ((a<18 && c>10)||(a%5<1 && a>=17));//........
console.log (!(a<18 && c>10)||(a%5<1 && a>=17));//aynısının değili
console.log(a!=14);//eşit değil
console.log(e);//e değeri artırılmış
document.write(a);//documant kısmınada değeriler aynı şekil yazılabilir

//d=d-2;
d+=5;//yukarıdaki ile aynı işlevde daha kısa halidir artırıp atama yapar
console.log(d);
