const fs = require('fs');
const path = require('path');

// Читаем файл сниппетов
const snippetsPath = path.join(__dirname, 'snippets', 'snippets.code-snippets');
const snippetsContent = fs.readFileSync(snippetsPath, 'utf8');

// Парсим JSON (удаляем комментарии)
const cleanJson = snippetsContent.replace(/\/\/.*$/gm, '').replace(/,(\s*[}\]])/g, '$1');
const snippets = JSON.parse(cleanJson);

// Группируем сниппеты по категориям
const categories = {
    '🖥️ Console': ['Console Log', 'Console warn', 'Console Time', 'Console TimeEnd'],
    '⚡ Functions': ['Arrow Function', 'Async Arrow Function', 'Async Function', 'Try Catch'],
    '🔄 Loops & Arrays': ['For Loop', 'ForEach', 'ForOf', 'Map', 'Filter', 'Find', 'Some', 'Every'],
    '📦 Objects': ['Object keys', 'Object values', 'Object entries', 'Destructuring Assignment'],
    '🔮 Async & Promises': ['Promise'],
    '📋 Modules': ['Import', 'Export Default', 'Export Default Class'],
    '⏰ Timers': ['Set Timeout', 'Set Interval'],
    '🛠️ Utilities': ['Template Literal', 'this']
};

// Функция для создания красивого отображения кода
function formatSnippetCode(snippet) {
    const body = Array.isArray(snippet.body) ? snippet.body : [snippet.body];

    // Если код короткий (одна строка без табов), показываем inline
    if (body.length === 1 && !body[0].includes('\t') && body[0].length < 50) {
        return `\`${body[0].replace(/\$/g, '\\$')}\``;
    }

    // Для многострочного кода создаем блок
    const formattedCode = body
        .map(line => line.replace(/\t/g, '  ').replace(/\$/g, '\\$'))
        .join('\n');

    return '```javascript\n' + formattedCode + '\n```';
}

// Функция для создания секции сниппетов
function createSnippetSection(categorySnippets) {
    let section = '';

    categorySnippets.forEach(snippetName => {
        const snippet = snippets[snippetName];
        if (snippet) {
            const prefix = Array.isArray(snippet.prefix) ? snippet.prefix.join(', ') : snippet.prefix;
            const description = snippet.description;
            const code = formatSnippetCode(snippet);

            section += `#### \`${prefix}\` - ${description}\n\n`;
            section += code + '\n\n';
        }
    });

    return section;
}

// Генерируем README
let readme = `# 🚀 Best JS Snippets by Dayme

> Коллекция самых полезных JavaScript сниппетов для ежедневной разработки

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/LisovskiyIvan/best-js-snippets-by-dayme)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-LisovskiyIvan-black.svg)](https://github.com/LisovskiyIvan)

Ускорьте свой workflow с помощью этих готовых фрагментов кода! Каждый сниппет тщательно продуман для максимальной эффективности.

**Автор:** [Ivan Lisovskiy](https://github.com/LisovskiyIvan)

## 📦 Установка

1. Откройте VS Code
2. Перейдите в Extensions (\`Ctrl+Shift+X\`)
3. Найдите "**best js snippets by dayme**"
4. Нажмите **Install**

## 🎯 Как использовать

1. Откройте JavaScript файл (\`.js\`, \`.jsx\`, \`.ts\`, \`.tsx\`)
2. Начните набирать **префикс** сниппета
3. Нажмите \`Tab\` для вставки кода
4. Используйте \`Tab\` для перехода между параметрами

## 📚 Сниппеты

`;

// Добавляем категории и их сниппеты
Object.entries(categories).forEach(([categoryName, categorySnippets]) => {
    // Фильтруем только существующие сниппеты
    const existingSnippets = categorySnippets.filter(name => snippets[name]);

    if (existingSnippets.length > 0) {
        readme += `### ${categoryName}\n\n`;
        readme += createSnippetSection(existingSnippets);
    }
});

// Добавляем сниппеты, которые не попали в категории
const categorizedSnippets = Object.values(categories).flat();
const uncategorizedSnippets = Object.keys(snippets).filter(name => !categorizedSnippets.includes(name));

if (uncategorizedSnippets.length > 0) {
    readme += `### 🔧 Другие\n\n`;
    readme += createSnippetSection(uncategorizedSnippets);
}

// Создаем таблицу быстрого доступа
readme += `## 🚀 Быстрый справочник

| Префикс | Описание | Категория |
|---------|----------|-----------|
`;

Object.entries(categories).forEach(([categoryName, categorySnippets]) => {
    categorySnippets.forEach(snippetName => {
        const snippet = snippets[snippetName];
        if (snippet) {
            const prefix = Array.isArray(snippet.prefix) ? snippet.prefix.join(', ') : snippet.prefix;
            const cleanCategoryName = categoryName.replace(/[🖥️⚡🔄📦🔮📋⏰🛠️]\s*/, '');
            readme += `| \`${prefix}\` | ${snippet.description} | ${cleanCategoryName} |\n`;
        }
    });
});

// Добавляем дополнительную информацию
readme += `
## ✨ Особенности

- 🎯 **Быстрые префиксы** - короткие и запоминающиеся триггеры
- 📍 **Умные курсоры** - автоматическое позиционирование в нужных местах  
- 🔄 **Навигация по Tab** - переход между параметрами
- 💡 **IntelliSense** - подсказки и автодополнение
- 🎨 **Современный синтаксис** - ES6+ и лучшие практики

## 🎮 Примеры использования

### Быстрое логирование
\`\`\`javascript
// Наберите: cl + Tab
console.log(cursor_here);
\`\`\`

### Создание стрелочной функции  
\`\`\`javascript
// Наберите: af + Tab
const functionName = (params) => {
    cursor_here
};
\`\`\`

### Асинхронная функция
\`\`\`javascript
// Наберите: aaf + Tab  
const functionName = async (params) => {
    cursor_here
};
\`\`\`

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
`;

// Записываем README
fs.writeFileSync(path.join(__dirname, 'README.md'), readme, 'utf8');

// Выводим статистику
const totalSnippets = Object.keys(snippets).length;
const totalCategories = Object.keys(categories).length;

console.log('✅ README.md успешно сгенерирован!');
console.log(`📊 Статистика:`);
console.log(`   • Всего сниппетов: ${totalSnippets}`);
console.log(`   • Категорий: ${totalCategories}`);
console.log(`   • Размер файла: ${Math.round(readme.length / 1024)} KB`);