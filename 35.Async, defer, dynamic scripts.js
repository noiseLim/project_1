//<script defer scr="js/script.js"></script>
/*defer - атрибут сообщает браузеру, что он должен продолжать 
обрабатывать страницу и загружать этот скрипт в фоновом режиме, а затем 
запустить этот скрипт, когда он загрузится
Скрипты с defer никогда не блокируют страницу
Скрипты с defer всегда выполняются когда наше DOM дерево уже готово
Если у нас несколько defer скриптов, то они будут загружаться 
последовательно*/


//<script async scr="js/script.js"></script>
/* 1. Страница не ждет асинхронных скриптов, содержимое просто обрабатывается
и отображается
2. События в DOMContentLoaded И асинхронные скрипты не ждут друг друга

async загружается в фоновом режиме и запускается как только будет загружен
ОН НИКОГО НЕ ЖДЕТ*/


//созаем тег скрипт прямо на странице
const script = document.createElement('script'); //создаем тег script
script.src = "js/script";  //редактируем атрибут (прописываем путь)
script.async = false;
document.body.append(script); // помещаем на страницу (в конец body)
/* этот скрипт по умолчанию ведет себя как async, но мы можем отменить это
обратившись к атрибуту async и установив ему параметр false*/

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("js/rest.js");
loadScript("js/some.js");