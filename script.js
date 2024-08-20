document.getElementById("myButton").addEventListener("click", function() {
    alert("ボタンがクリックされました！");
});

//基本文法
//変数＝箱
//let: 値を後から変更できる変数を宣言します。
//const: 値を変更できない（定数）変数を宣言します。
//var: 古い書き方ですが、まだ使われることがあります。
let name = "Alice";  // nameという変数に"alice"を代入
const age = 25;      // ageという定数に25を代入

//演算子
//算術演算子: +, -, *, /, %
//比較演算子: ==, ===, !=, !==, <, >, <=, >=
//論理演算子: &&（AND）, ||（OR）, !（NOT）
let x = 10;
let y = 5;
let sum = x + y;  // sumは15
let isEqual = (x === y);  // isEqualはfalse

//条件分岐
let score = 85;

if (score >= 90) {
    console.log("Excellent!");
} else if (score >= 70) {
    console.log("Good job!");
} else {
    console.log("Keep trying!");
}

//. 繰り返し処理（ループ）
for (let i = 0; i < 5; i++) {
    console.log("This is loop iteration: " + i);
}




//関数



//DOM操作
//要素の取得
let element = document.getElementById("myElement");
//要素の変更
element.textContent = "新しいテキスト";
element.style.color = "blue";