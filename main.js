// 資料內容
// const mealList = [
//     {
//         "name": "神武拉麵",
//         "category": ["noodle","lunch"],
//         "filter": false
//     },
//     {
//         "name": "鄉鄰",
//         "category": ["lunch"],
//         "filter": false
//     },
//     {
//         "name": "早安山丘",
//         "category": ["breakfast"],
//         "filter": false
//     },
//     {
//         "name": "鍋燒麵",
//         "category": ["noodle"],
//         "filter": false
//     },
//     {
//         "name": "炒飯",
//         "category": ["rice"],
//         "filter": false
//     },
//     {
//         "name": "八方雲集",
//         "category": ["others"],
//         "filter": false
//     },
//     {
//         "name": "火鍋",
//         "category": ["others"],
//         "filter": false
//     },
//     {
//         "name": "韓式料理",
//         "category": ["rice", "noodle"],
//         "filter": false
//     },
//     {
//         "name": "小飯糰大飯糰",
//         "category": ["rice"],
//         "filter": false
//     },
//     {
//         "name": "後校門滷肉飯",
//         "category": ["rice", "noodle"],
//         "filter": false
//     },
//     {
//         "name": "陳昭",
//         "category": ["lunch", "rice", "noodle"],
//         "filter": false
//     },
//     {
//         "name": "吳家鴨香飯",
//         "category": ["rice", "noodle"],
//         "filter": false
//     }
// ]

// DOM 節點
const button = document.querySelector("#button");
const result = document.querySelector("#result");

const breakfast = document.querySelector("#breakfast");
const lunch = document.querySelector("#lunch");
const noodle = document.querySelector("#noodle");
const rice = document.querySelector("#rice");
const others = document.querySelector("#others");

const checkbox = [breakfast,lunch,noodle,rice,others];

let sourceData = [];

let mealList = [];

// 非同步語法
// fetch 串接API語法或是本地資料夾檔案
fetch("meal.json")
    .then(function(response){
    // 從JSON格式轉回 Js 物件
    return response.json();
})
    .then(function(data){
        sourceData = [...data];
        console.log(sourceData);
    })

    .catch(function(error){
        // 抓資料不成功 錯誤 就會進到 catch
        console.log(error);
    })

// filter.category
function filter(){
    checkbox.forEach(function(i){
        if(i.checked){
            sourceData.forEach(function(m){
                if(m.category.includes(i.value)){
                    m.filter = true;
                }
            })
        }
    })
    mealList = mealList.filter(function(i){
        i.filter
    });    
}

// meal random
function randomMeal(){
    const random = Math.floor(Math.random() * sourceData.length); //0~12
    console.log(sourceData);
    result.innerHTML = sourceData[random].name;
}

// 監聽
button.addEventListener('click',function(){
    filter();
    randomMeal();
})



// 物件
// MAP Key : Value
// 弱型別
// const divorce = {
//     "success": true,
//     "result": {
//     "resource_id": "301000000A-002072-001",
//     "limit": 2000,
//     "total": 45,
//     "fields": [
//     {
//     "type": "text",
//     "id": "statistic_yyy"
//     },
//     {
//     "type": "text",
//     "id": "according"
//     },
//     {
//     "type": "text",
//     "id": "district_code"
//     },
//     {
//     "type": "text",
//     "id": "site_id"
//     },
//     {
//     "type": "text",
//     "id": "sex"
//     },
//     {
//     "type": "text",
//     "id": "average_age"
//     }
//     ],
//     "records": [
//     {
//     "statistic_yyy": "統計年",
//     "according": "按照別",
//     "district_code": "區域別代碼",
//     "site_id": "區域別",
//     "sex": "性別",
//     "average_age": "平均年齡"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "65000000",
//     "site_id": "新北市",
//     "sex": "男",
//     "average_age": "33.0"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "65000000",
//     "site_id": "新北市",
//     "sex": "女",
//     "average_age": "31.1"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "63000000",
//     "site_id": "臺北市",
//     "sex": "男",
//     "average_age": "33.9"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "63000000",
//     "site_id": "臺北市",
//     "sex": "女",
//     "average_age": "32.3"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "68000000",
//     "site_id": "桃園市",
//     "sex": "男",
//     "average_age": "31.9"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "68000000",
//     "site_id": "桃園市",
//     "sex": "女",
//     "average_age": "30.0"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "66000000",
//     "site_id": "臺中市",
//     "sex": "男",
//     "average_age": "32.0"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "66000000",
//     "site_id": "臺中市",
//     "sex": "女",
//     "average_age": "30.2"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "67000000",
//     "site_id": "臺南市",
//     "sex": "男",
//     "average_age": "32.5"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "67000000",
//     "site_id": "臺南市",
//     "sex": "女",
//     "average_age": "30.5"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "64000000",
//     "site_id": "高雄市",
//     "sex": "男",
//     "average_age": "32.5"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "64000000",
//     "site_id": "高雄市",
//     "sex": "女",
//     "average_age": "30.5"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10002000",
//     "site_id": "宜蘭縣",
//     "sex": "男",
//     "average_age": "31.4"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10002000",
//     "site_id": "宜蘭縣",
//     "sex": "女",
//     "average_age": "29.5"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10004000",
//     "site_id": "新竹縣",
//     "sex": "男",
//     "average_age": "31.8"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10004000",
//     "site_id": "新竹縣",
//     "sex": "女",
//     "average_age": "30.0"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10005000",
//     "site_id": "苗栗縣",
//     "sex": "男",
//     "average_age": "31.6"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10005000",
//     "site_id": "苗栗縣",
//     "sex": "女",
//     "average_age": "29.8"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10007000",
//     "site_id": "彰化縣",
//     "sex": "男",
//     "average_age": "31.3"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10007000",
//     "site_id": "彰化縣",
//     "sex": "女",
//     "average_age": "29.3"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10008000",
//     "site_id": "南投縣",
//     "sex": "男",
//     "average_age": "31.0"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10008000",
//     "site_id": "南投縣",
//     "sex": "女",
//     "average_age": "29.2"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10009000",
//     "site_id": "雲林縣",
//     "sex": "男",
//     "average_age": "31.1"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10009000",
//     "site_id": "雲林縣",
//     "sex": "女",
//     "average_age": "29.1"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10010000",
//     "site_id": "嘉義縣",
//     "sex": "男",
//     "average_age": "31.2"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10010000",
//     "site_id": "嘉義縣",
//     "sex": "女",
//     "average_age": "29.3"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10013000",
//     "site_id": "屏東縣",
//     "sex": "男",
//     "average_age": "31.7"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10013000",
//     "site_id": "屏東縣",
//     "sex": "女",
//     "average_age": "29.4"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10014000",
//     "site_id": "臺東縣",
//     "sex": "男",
//     "average_age": "31.2"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10014000",
//     "site_id": "臺東縣",
//     "sex": "女",
//     "average_age": "29.5"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10015000",
//     "site_id": "花蓮縣",
//     "sex": "男",
//     "average_age": "31.3"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10015000",
//     "site_id": "花蓮縣",
//     "sex": "女",
//     "average_age": "29.3"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10016000",
//     "site_id": "澎湖縣",
//     "sex": "男",
//     "average_age": "31.2"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10016000",
//     "site_id": "澎湖縣",
//     "sex": "女",
//     "average_age": "29.3"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10017000",
//     "site_id": "基隆市",
//     "sex": "男",
//     "average_age": "32.4"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10017000",
//     "site_id": "基隆市",
//     "sex": "女",
//     "average_age": "30.6"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10018000",
//     "site_id": "新竹市",
//     "sex": "男",
//     "average_age": "32.6"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10018000",
//     "site_id": "新竹市",
//     "sex": "女",
//     "average_age": "30.7"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10020000",
//     "site_id": "嘉義市",
//     "sex": "男",
//     "average_age": "32.4"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "10020000",
//     "site_id": "嘉義市",
//     "sex": "女",
//     "average_age": "30.1"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "09020000",
//     "site_id": "金門縣",
//     "sex": "男",
//     "average_age": "31.7"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "09020000",
//     "site_id": "金門縣",
//     "sex": "女",
//     "average_age": "30.1"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "09007000",
//     "site_id": "連江縣",
//     "sex": "男",
//     "average_age": "32.0"
//     },
//     {
//     "statistic_yyy": "110",
//     "according": "按發生日期分",
//     "district_code": "09007000",
//     "site_id": "連江縣",
//     "sex": "女",
//     "average_age": "30.0"
//     }
//     ]
//     }
//     }

// console.log(divorce.result.records[1].average_age);

// divorce.result.records.forEach(function(i){
//     console.log(i.average_age);
// })





// const person = {
//     name : "John",
//     age : 23,
//     tel:[   "02-222222222",
//             "0987-654-321"
//     ],
//     email: [ "1@email.com",
//              "2@email.com"
//     ],
//     address: "asdqwezxc",
//     pet:[{
//         name:"mary",
//         age:6
//     },{
//         name:"katty",
//         age:9
//     }]
    
// }

// console.log(person.tel[0]);


// person.pet.forEach(function(i){
//     console.log(i.age);
// });


// 變數範圍
// const name1 = "全域"

// const obj = {
//     name1:"obj的name",
  
// }

// function fn(){
//     const name1 = "fn的name";
//     console.log(name1);
// }

// console.log(name1);
// console.log(obj.name1);
// fn();

// function fn2(){
//     console.log("執行fn2方法")
// }

// fn2();

// const mealList = [
//     {
//         "name": "食在一方",
//         "category": ["brunch"],
//         "filter": false
//     },
//     {
//         "name": "日十",
//         "category": ["brunch"],
//         "filter": false
//     },
//     {
//         "name": "鹽行站",
//         "category": ["buffet", "rice"],
//         "filter": false
//     },
//     {
//         "name": "鍋燒麵",
//         "category": ["noodle"],
//         "filter": false
//     },
//     {
//         "name": "炒飯",
//         "category": ["rice"],
//         "filter": false
//     },
//     {
//         "name": "八方雲集",
//         "category": ["others"],
//         "filter": false
//     },
//     {
//         "name": "火鍋",
//         "category": ["others"],
//         "filter": false
//     },
//     {
//         "name": "韓式料理",
//         "category": ["rice", "noodle"],
//         "filter": false
//     },
//     {
//         "name": "小飯糰大飯糰",
//         "category": ["rice"],
//         "filter": false
//     },
//     {
//         "name": "後校門滷肉飯",
//         "category": ["rice", "noodle"],
//         "filter": false
//     },
//     {
//         "name": "魚耶",
//         "category": ["brunch", "rice", "noodle"],
//         "filter": false
//     },
//     {
//         "name": "吳家鴨香飯",
//         "category": ["rice", "noodle"],
//         "filter": false
//     }
// ]


// const random =Math.floor(Math.random() * mealList.length); //0~12

// console.log(random);

// console.log(mealList[random].name);

// console.log(mealList[5].name);

// mealList.forEach(function(i){
//     console.log(i.name);
// })