function class_11(){
    document.location.href = '11_class.html';
  }
  function go_to_chess(){
    document.location.href = 'chess_club.html';
  }
  function go_to_theatre(){
    document.location.href = 'theatre.html';
  }
  function go_to_school(){
    document.location.href = 'http://sckola45.spb.ru';
  }
  function go_to_games(){
    document.location.href = 'game_club.html';
  }
  function go_to_debates(){
    document.location.href = 'debates.html';
  }
  function go_to_history(){
    document.location.href = 'history_dive.html';
  }
  function go_to_thematic_week(){
    document.location.href = 'thematic_week.html';
  }
  function go_to_projects(){
    document.location.href = 'projects.html';
  }
  function go_to_quests(){
    document.location.href = 'Сайт/quests.html';
  }
  function go_home(){
    document.location.href = 'togetherany_home.html';
  }
  
  function go_to_universities(){
    document.location.href = 'universities.html';
  }

  function go_to_events(){
    document.location.href = 'events.html';
  }

  function go_to_archive(){
    document.location.href = 'archive.html';
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
  
