"use strict";

// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
  };
}

const counterInc = createCounter();
console.log(counterInc.increment());
console.log(counterInc.increment());

const counterDec = createCounter();
console.log(counterDec.decrement());
console.log(counterDec.decrement());

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

// Пример
let serchElement = [];
function findElementByClass(rootElem, classElem) {
    if (rootElem.hasChildNodes()){
        for (let e of rootElem.children){
            if (e.className === classElem) {
                serchElement.push(e);
                if (serchElement[0].className !== classElem){
                    serchElement = [];
                    serchElement.push(e);
                }                
            }
            findElementByClass(e, classElem)
        }
        return serchElement[0];
    }
    return findElementByClass(root - 1) * root;
}



const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
