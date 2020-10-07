"use strict";

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');



/* Реализуем поведение при котором мы что-то вводим в input rub и
на основании запроса от сервера и обработок получать инф-ю в USD*/

/*событие 'change' работает когда после ввода мы кликаем вне окна
ввода или нажимаем Tab*/
/* событие input - каждый раз когда что-то вводится или удаляется
в input*/

/*XMLHttpRequest (XHR) - взаимодействие с серверами. Вы можете
получать данные из URL-адреса без необходимости полного обновления
страницы. Это позволяет веб-странице обновлять только часть 
страницы, не нарушая того, что делает пользователь.*/

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    /*этот метод собирает настройки, которые в будущем помогут
    сделать запрос*/

    // request.open(method, url, async, login, pass);
    /* method (GET - получение данных от сервера. POST - отправка
    данных на сервер)
    URL -  куда посылаем запрос
    async - асинхронность (по умолчанию True), можем выставить False
    login, pass - некоторые запросы по лигин и пароль*/
    request.open('GET', "js/current.json");

    /*что именно передаем (Http заголовки) в нашем случае
    используем заголовок для передачи JSON файлов*/
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    /*отправляем запрос. Если бы отправляли данные (POST), то
    метод send может принимать какое-то тело .send(body)*/
    request.send();

    // Свойства, которые возвращает этот объект
    // status (404 и т.д.)
    // statusText (текстовое описание ответа от сервера (ОК, Not found))
    // response (ответ от бекенд разработчика)
    // readyState (текущее стостояние нашего запроса(отобр. цифрой))


    // События

    /* 1. readystatechange. Используется редко
    Это событие отслеживает статус готовности нашего запроса
    в текущий момент*/
    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 & request.status === 200) {
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = 'Что-то пошло не так';
    //     }
    // });

    /* 2. load. Используется чаще. Срабатывает один раз, когда
    запрос уже полностью готов (readyState не отслеживается*/
    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });


});