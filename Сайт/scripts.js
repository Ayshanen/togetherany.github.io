function go_to_ecology(){
  document.location.href = 'G:/Мой диск/Сайт/ecology.html';
}
function go_to_chess(){
  document.location.href = 'G:/Мой диск/Сайт/chess.html';
}
function go_to_theatre(){
  document.location.href = 'G:/Мой диск/Сайт/theatre.html';
}
function go_to_school(){
  document.location.href = 'http://sckola45.spb.ru';
}
function go_to_games(){
  document.location.href = 'G:/Мой диск/Сайт/games.html';
}
function go_to_contacts(){
  document.location.href = 'G:/Мой диск/Сайт/contacts.html';
}
function go_to_contests(){
  document.location.href = 'G:/Мой диск/Сайт/contests.html';
}
function go_to_problems(){
  document.location.href = 'G:/Мой диск/Сайт/problems.html';
}
function go_to_art(){
  document.location.href = 'G:/Мой диск/Сайт/art.html';
}
function go_to_quests(){
  document.location.href = 'G:/Мой диск/Сайт/quests.html';
}
function go_home(){
  document.location.href = 'G:/Мой диск/Сайт/togetherany_new.html';
}

function trans_to_en(){
  document.body.classList.remove('ru');
  document.body.classList.add('en');
  save_lang();
}

function trans_to_ru(){
  document.body.classList.remove('en');
  document.body.classList.add('ru');
  save_lang();
}

function save_lang(){
  lang = document.body.classList;
  window.localStorage.setItem('language', lang);
}

function set_lang(){
  document.body.classList.remove('en');
  document.body.classList.remove('ru');
  lang = window.localStorage.getItem('language');
  document.body.classList.add(lang);
}
function go_to_tg(){
  document.location.href = 'https://telegram.me/share/url?url=<URL>&text=<TEXT>">Telegram';
}
