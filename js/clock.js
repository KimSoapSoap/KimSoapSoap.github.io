const clock1 = document.querySelector("#clock1");
const clock2 = document.querySelector("#clock2");

function getClock1() {
  const date1 = new Date();
  const year = date1.getFullYear();
  const month = date1.getMonth();
  const date = date1.getDate();
  const day = date1.getDay();
  const dayOftheWeek = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  clock1.innerText = `${year}년 ${month + 1}월 ${date}일 ${dayOftheWeek[day]}`;
}

function getClock2() {
  const date2 = new Date();
  const hours = String(date2.getHours()).padStart(2, "0");
  const minutes = String(date2.getMinutes()).padStart(2, "0");
  const seconds = String(date2.getSeconds()).padStart(2, "0");
  clock2.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock1();
getClock2();
setInterval(getClock1, 1000);
setInterval(getClock2, 1000);
