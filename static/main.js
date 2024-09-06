const inputText = document.getElementById("input-text");
const clear = document.getElementById("clear");
const check = document.getElementById("check");
const results = document.getElementById("results");
const onlineText = /online/i;
const earnT = /earn/i;
const yes = /yes/i;
const reply = /reply/i;
const network = /network/i;
const comment = /comment/i;
const ent = /entrepreneur/i;
const extra = /extra/i;
const income = /income/i;
const money = /money/i;
const networking = /networking/i;
const ready = /ready/i;

const arrayList = [onlineText,earnT,yes,reply,network,comment,ent,extra,income,networking,ready];

const isFraud = (msg) => arrayList.some(regex => regex.test(msg));
check.addEventListener("click",()=>{
results.textContent = isFraud(inputText.value)?"be careful this might a scammer or ponzi scheme if you choose to continue chatting with the person proceed with caution..":"not a scam";

})
clear.addEventListener("click",()=>{
results.textContent = "Results are displayed here...";
inputText.value = '';
})
