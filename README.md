# Best JS Snippets by Dayme

Коллекция полезных JavaScript сниппетов для ежедневной разработки.

**Автор:** [Ivan Lisovskiy](https://github.com/LisovskiyIvan)

## Установка

1. Откройте VS Code
2. Перейдите в Extensions (Ctrl+Shift+X)
3. Найдите "best js snippets by dayme"
4. Нажмите Install

## Как использовать

1. Откройте JavaScript/TypeScript файл
2. Наберите префикс сниппета
3. Нажмите Tab для вставки кода
4. Используйте Tab для перехода между параметрами

## Список сниппетов

### Console

| Префикс | Описание | Код |
|---------|----------|-----|
| `cl` | Быстрый console.log | `console.log(1);` |
| `cw` | Быстрый console.warn | `console.warn(1);` |
| `ct` | Быстрый console.time | `console.time('{1:label}');` |
| `cte` | Быстрый console.timeEnd | `console.timeEnd('{1:label}');` |

### Functions

| Префикс | Описание | Код |
|---------|----------|-----|
| `af` | Стрелочная функция | `const {1:functionName} = ({2:params}) => {   0 };` |
| `aaf` | Асинхронная стрелочная функция | `const {1:functionName} = async ({2:params}) => {   0 };` |
| `async` | Асинхронная функция | `async function {1:functionName}({2:params}) {   0 }` |
| `tc` | Блок try-catch | `try {   0 } catch (error) {   console.error(error); }` |

### Loops & Arrays

| Префикс | Описание | Код |
|---------|----------|-----|
| `for` | Цикл for | `for (let {1:i} = 0; 1 < {2:array}.length; 1++) {   0 }` |
| `fe` | Метод forEach | `{1:array}.forEach(({2:item}) => {   0 });` |
| `fof` | Цикл for...of | `for (const {1:item} of {2:array}) {   0 }` |
| `map` | Метод map | `{1:array}.map(({2:item}) => {2:item}0);` |
| `fil` | Метод filter | `{1:array}.filter(({2:item}) => {2:item}0);` |
| `find` | Метод find | `{1:array}.find(({2:item}) => {2:item}0);` |
| `some` | Метод some | `{1:array}.some(({2:item}) => {2:item}0);` |
| `every` | Метод every | `{1:array}.every(({2:item}) => {2:item}0);` |

### Objects

| Префикс | Описание | Код |
|---------|----------|-----|
| `ok` | Метод Object.keys | `Object.keys({1:object}).forEach(({2:key}) => {   0 });` |
| `ov` | Метод Object.values | `Object.values({1:object}).forEach(({2:value}) => {   0 });` |
| `oe` | Метод Object.entries | `Object.entries({1:object}).forEach(([{2:key}, {3:value}])...` |
| `dest` | Деструктуризация объекта | `const { {1:property} } = {2:object};` |

### Async & Promises

| Префикс | Описание | Код |
|---------|----------|-----|
| `pr` | Создание Promise | `new Promise((resolve, reject) => {   0 });` |

### Modules

| Префикс | Описание | Код |
|---------|----------|-----|
| `imp` | ES6 импорт | `import {1:module} from '{2:path}';` |
| `ed` | Экспорт по умолчанию | `export default {1:name};` |
| `edc` | Экспорт класса по умолчанию | `export default class {1:ClassName} {   constructor() {} }` |

### Timers

| Префикс | Описание | Код |
|---------|----------|-----|
| `st` | setTimeout функция | `setTimeout(() => {   0 }, {1:1000});` |
| `si` | setInterval функция | `setInterval(() => {   0 }, {1:1000});` |

### Utilities

| Префикс | Описание | Код |
|---------|----------|-----|
| `tl` | Шаблонная строка | ``{{1:expression}}`` |
| `t, tg, tf, th, thi, thin` | this | `this.0` |

## Быстрый справочник

| Префикс | Описание | Категория |
|---------|----------|-----------|
| `cl` | Быстрый console.log | Console |
| `cw` | Быстрый console.warn | Console |
| `ct` | Быстрый console.time | Console |
| `cte` | Быстрый console.timeEnd | Console |
| `af` | Стрелочная функция | Functions |
| `aaf` | Асинхронная стрелочная функция | Functions |
| `async` | Асинхронная функция | Functions |
| `tc` | Блок try-catch | Functions |
| `for` | Цикл for | Loops & Arrays |
| `fe` | Метод forEach | Loops & Arrays |
| `fof` | Цикл for...of | Loops & Arrays |
| `map` | Метод map | Loops & Arrays |
| `fil` | Метод filter | Loops & Arrays |
| `find` | Метод find | Loops & Arrays |
| `some` | Метод some | Loops & Arrays |
| `every` | Метод every | Loops & Arrays |
| `ok` | Метод Object.keys | Objects |
| `ov` | Метод Object.values | Objects |
| `oe` | Метод Object.entries | Objects |
| `dest` | Деструктуризация объекта | Objects |
| `pr` | Создание Promise | Async & Promises |
| `imp` | ES6 импорт | Modules |
| `ed` | Экспорт по умолчанию | Modules |
| `edc` | Экспорт класса по умолчанию | Modules |
| `st` | setTimeout функция | Timers |
| `si` | setInterval функция | Timers |
| `tl` | Шаблонная строка | Utilities |
| `t, tg, tf, th, thi, thin` | this | Utilities |

## Примеры использования

### Быстрое логирование
```javascript
// Наберите: cl + Tab
console.log(|); // курсор здесь
```

### Создание функции
```javascript
// Наберите: af + Tab
const functionName = (params) => {
    | // курсор здесь
};
```

### Цикл по массиву
```javascript
// Наберите: fe + Tab
array.forEach((item) => {
    | // курсор здесь
});
```

## Поддерживаемые языки

- JavaScript (.js)
- TypeScript (.ts)
- JavaScript React (.jsx)
- TypeScript React (.tsx)

## Особенности

- Короткие и запоминающиеся префиксы
- Автоматическое позиционирование курсора
- Переход между параметрами с помощью Tab
- Современный ES6+ синтаксис
- Поддержка всех JS/TS файлов

## Вклад в проект

Есть идеи для новых сниппетов?
- [Создать Issue](https://github.com/LisovskiyIvan/best-js-snippets-by-dayme/issues)
- [Отправить Pull Request](https://github.com/LisovskiyIvan/best-js-snippets-by-dayme/pulls)

## Лицензия

MIT License

## История версий

### v0.0.1
- Базовый набор JavaScript сниппетов
- Поддержка консольных команд
- Функции и стрелочные функции
- Циклы и методы массивов
- Асинхронные операции
- Работа с объектами
- ES6+ модули

---

[GitHub](https://github.com/LisovskiyIvan/best-js-snippets-by-dayme) | [Issues](https://github.com/LisovskiyIvan/best-js-snippets-by-dayme/issues)
