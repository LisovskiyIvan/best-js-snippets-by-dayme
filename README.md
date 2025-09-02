# 🚀 Best JS Snippets by Dayme

> Коллекция самых полезных JavaScript сниппетов для ежедневной разработки

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/LisovskiyIvan/best-js-snippets-by-dayme)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-LisovskiyIvan-black.svg)](https://github.com/LisovskiyIvan)

Ускорьте свой workflow с помощью этих готовых фрагментов кода! Каждый сниппет тщательно продуман для максимальной эффективности.

**Автор:** [Ivan Lisovskiy](https://github.com/LisovskiyIvan)

## 📦 Установка

1. Откройте VS Code
2. Перейдите в Extensions (`Ctrl+Shift+X`)
3. Найдите "**best js snippets by dayme**"
4. Нажмите **Install**

## 🎯 Как использовать

1. Откройте JavaScript файл (`.js`, `.jsx`, `.ts`, `.tsx`)
2. Начните набирать **префикс** сниппета
3. Нажмите `Tab` для вставки кода
4. Используйте `Tab` для перехода между параметрами

## 📚 Сниппеты

### 🖥️ Console

#### `cl` - Быстрый console.log

`console.log(\$1);`

#### `cw` - Быстрый console.warn

`console.warn(\$1);`

#### `ct` - Быстрый console.time

`console.time('\${1:label}');`

#### `cte` - Быстрый console.timeEnd

`console.timeEnd('\${1:label}');`

### ⚡ Functions

#### `af` - Стрелочная функция

```javascript
const \${1:functionName} = (\${2:params}) => {
  \$0
};
```

#### `aaf` - Асинхронная стрелочная функция

```javascript
const \${1:functionName} = async (\${2:params}) => {
  \$0
};
```

#### `async` - Асинхронная функция

```javascript
async function \${1:functionName}(\${2:params}) {
  \$0
}
```

#### `tc` - Блок try-catch

```javascript
try {
  \$0
} catch (error) {
  console.error(error);
}
```

### 🔄 Loops & Arrays

#### `for` - Цикл for

```javascript
for (let \${1:i} = 0; \$1 < \${2:array}.length; \$1++) {
  \$0
}
```

#### `fe` - Метод forEach

```javascript
\${1:array}.forEach((\${2:item}) => {
  \$0
});
```

#### `fof` - Цикл for...of

```javascript
for (const \${1:item} of \${2:array}) {
  \$0
}
```

#### `map` - Метод map

`\${1:array}.map((\${2:item}) => \${2:item}\$0);`

#### `fil` - Метод filter

`\${1:array}.filter((\${2:item}) => \${2:item}\$0);`

#### `find` - Метод find

`\${1:array}.find((\${2:item}) => \${2:item}\$0);`

#### `some` - Метод some

`\${1:array}.some((\${2:item}) => \${2:item}\$0);`

#### `every` - Метод every

`\${1:array}.every((\${2:item}) => \${2:item}\$0);`

### 📦 Objects

#### `ok` - Метод Object.keys

```javascript
Object.keys(\${1:object}).forEach((\${2:key}) => {
  \$0
});
```

#### `ov` - Метод Object.values

```javascript
Object.values(\${1:object}).forEach((\${2:value}) => {
  \$0
});
```

#### `oe` - Метод Object.entries

```javascript
Object.entries(\${1:object}).forEach(([\${2:key}, \${3:value}]) => {
  \$0
});
```

#### `dest` - Деструктуризация объекта

`const { \${1:property} } = \${2:object};`

### 🔮 Async & Promises

#### `pr` - Создание Promise

```javascript
new Promise((resolve, reject) => {
  \$0
});
```

### 📋 Modules

#### `imp` - ES6 импорт

`import \${1:module} from '\${2:path}';`

#### `ed` - Экспорт по умолчанию

`export default \${1:name};`

#### `edc` - Экспорт класса по умолчанию

```javascript
export default class \${1:ClassName} {
  constructor() {}
}
```

### ⏰ Timers

#### `st` - setTimeout функция

```javascript
setTimeout(() => {
  \$0
}, \${1:1000});
```

#### `si` - setInterval функция

```javascript
setInterval(() => {
  \$0
}, \${1:1000});
```

### 🛠️ Utilities

#### `tl` - Шаблонная строка

``\${\${1:expression}}``

#### `th, thi, thin` - this

`this.\$0`

## 🚀 Быстрый справочник

| Префикс | Описание | Категория |
|---------|----------|-----------|
| `cl` | Быстрый console.log | �️ Console |
| `cw` | Быстрый console.warn | �️ Console |
| `ct` | Быстрый console.time | �️ Console |
| `cte` | Быстрый console.timeEnd | �️ Console |
| `af` | Стрелочная функция | Functions |
| `aaf` | Асинхронная стрелочная функция | Functions |
| `async` | Асинхронная функция | Functions |
| `tc` | Блок try-catch | Functions |
| `for` | Цикл for | � Loops & Arrays |
| `fe` | Метод forEach | � Loops & Arrays |
| `fof` | Цикл for...of | � Loops & Arrays |
| `map` | Метод map | � Loops & Arrays |
| `fil` | Метод filter | � Loops & Arrays |
| `find` | Метод find | � Loops & Arrays |
| `some` | Метод some | � Loops & Arrays |
| `every` | Метод every | � Loops & Arrays |
| `ok` | Метод Object.keys | � Objects |
| `ov` | Метод Object.values | � Objects |
| `oe` | Метод Object.entries | � Objects |
| `dest` | Деструктуризация объекта | � Objects |
| `pr` | Создание Promise | � Async & Promises |
| `imp` | ES6 импорт | � Modules |
| `ed` | Экспорт по умолчанию | � Modules |
| `edc` | Экспорт класса по умолчанию | � Modules |
| `st` | setTimeout функция | Timers |
| `si` | setInterval функция | Timers |
| `tl` | Шаблонная строка | �️ Utilities |
| `th, thi, thin` | this | �️ Utilities |

## ✨ Особенности

- 🎯 **Быстрые префиксы** - короткие и запоминающиеся триггеры
- 📍 **Умные курсоры** - автоматическое позиционирование в нужных местах  
- 🔄 **Навигация по Tab** - переход между параметрами
- 💡 **IntelliSense** - подсказки и автодополнение
- 🎨 **Современный синтаксис** - ES6+ и лучшие практики

## 🎮 Примеры использования

### Быстрое логирование
```javascript
// Наберите: cl + Tab
console.log(cursor_here);
```

### Создание стрелочной функции  
```javascript
// Наберите: af + Tab
const functionName = (params) => {
    cursor_here
};
```

### Асинхронная функция
```javascript
// Наберите: aaf + Tab  
const functionName = async (params) => {
    cursor_here
};
```

## 🤝 Вклад в проект

Есть идеи для новых сниппетов? 
- Создайте [Issue](https://github.com/LisovskiyIvan/best-js-snippets-by-dayme/issues)
- Отправьте [Pull Request](https://github.com/LisovskiyIvan/best-js-snippets-by-dayme/pulls)

## 📄 Лицензия

MIT License - используйте свободно!

## 🔄 История изменений

### v0.0.1 (Текущая версия)
- ✅ Базовый набор JavaScript сниппетов
- ✅ Консольные команды и отладка
- ✅ Функции и стрелочные функции  
- ✅ Циклы и методы массивов
- ✅ Асинхронные операции и промисы
- ✅ Работа с объектами
- ✅ ES6+ модули и синтаксис

---

<div align="center">

**Сделано с ❤️ для разработчиков**

[⭐ Поставьте звезду](https://github.com/LisovskiyIvan/best-js-snippets-by-dayme) • [🐛 Сообщить об ошибке](https://github.com/LisovskiyIvan/best-js-snippets-by-dayme/issues) • [💡 Предложить идею](https://github.com/LisovskiyIvan/best-js-snippets-by-dayme/discussions)

</div>
