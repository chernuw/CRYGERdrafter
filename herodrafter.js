-window.onload=function (){
var maps = ["Башни рока", "Бойня на браксисе", "Вечная битва", "Гробница королевы пауков", "Драконий край", "Завод Вольской", 
	   "Небесный храм", "Осквернённое святилище", "Призрачные копи", "Проклятая лощина", "Сад ужасов", "Ядерный полигон"];
var heroes = ["D.Va","E.T.C.","Абатур","Азмодан","Аларак","Алекстраза","Ана","Ануб’арак","Артанис","Артас","Ауриэль","Блэйз",
	      "Валира","Валла","Вариан","Газлоу","Гаррош","Гул’дан","Гэндзи","Дехака","Джайна","Джим Рейнор","Джоанна","Диабло",
	      "Загара","Заря","Зератул","Зул","Иллидан","Каразим","Кассия","Кел'Тузад","Кель’тас","Керриган","Крысавчик",
	      "Лейтенант Моралес","Леорик","Ли Ли","Ли-Мин","Лунара","Лусио","Майев","Малтаэль","Малфурион","Медив","Мурадин","Мурчаль",
	      "Мясник","Назибо","Нова","Потерявшиеся викинги","Пробиус","Рагнарос","Регар","Рексар","Самуро","Светик","Седогрив",
	      "Сержант Кувалда","Сильвана","Соня","Стежок","Стуков","Тайкус","Тассадар","Тиранда","Тираэль","Тралл","Трейсер","Утер",
	      "Фалстад","Феникс","Хандзо","Хроми","Чо’Галл","Чэнь"];
var team1 = [];
var team2 = [];
var number;
for (i = 0; i < 5; i++){
  	number = Math.floor(Math.random() * heroes.length);
  	team1.push(heroes.splice(number,1));  
	
  	number = Math.floor(Math.random() * heroes.length);
  	team2.push(heroes.splice(number,1));
}
if(team1.includes("Чо’Галл")){
	if(team1[0]=="Чо’Галл"){
		team1.pop();
	}else{
		team1.shift();
	}
}
if(team2.includes("Чо’Галл")){
	if(team2[0]=="Чо’Галл"){
		team2.pop();
	}else{
		team2.shift();
	}
}	
	
/*if(team1[4]=="Чо’Галл"){
	team1.shift();
}
if(team2[4]=="Чо’Галл"){
	team2.shift();
}*/
var olTeam1 = document.getElementById("team1");
var olTeam2 = document.getElementById("team2");
var ulMap = document.getElementById("map");
team1.forEach(function(item, i, arr) {
  var li = document.createElement('li');
  li.innerHTML = item;
	olTeam1.appendChild(li);
  
});
	   
team2.forEach(function(item, i, arr) {
  var li = document.createElement('li');
  li.innerHTML = item;
	olTeam2.appendChild(li);
  
});

var li = document.createElement('li');
li.innerHTML = maps[Math.floor(Math.random() * maps.length)];;
ulMap.appendChild(li);
}
