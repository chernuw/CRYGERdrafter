window.onload=function (){
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
var map = maps[Math.floor(Math.random() * maps.length)];
for (i = 0; i < 5; i++){
  	number = Math.floor(Math.random() * heroes.length);
  	team1.push(heroes.splice(number,1));  
	
  	number = Math.floor(Math.random() * heroes.length);
  	team2.push(heroes.splice(number,1));
}
if(team1[4]=="Чо’Галл"){
	team1.shift();
}
if(team2[4]=="Чо’Галл"){
	team2.shift();
}
document.write("<h2>Team 1:</h2>" + team1 + "\n");
document.write("<h2>Team 2:</h2>" + team2 + "\n");
document.write("<h2>Map:</h2>" + map);
}
