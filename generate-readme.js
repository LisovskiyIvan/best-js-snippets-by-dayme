const fs = require('fs');
const path = require('path');

// Читаем файлы
const snippetsPath = path.join(__dirname, 'snippets', 'snippets.code-snippets');
const packagePath = path.join(__dirname, 'package.json');
const snippetsContent = fs.readFileSync(snippetsPath, 'utf8');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// Парсим JSON (удаляем комментарии)
const cleanJson = snippetsContent.replace(/\/\/.*$/gm, '').replace(/,(\s*[}\]])/g, '$1');
const snippets = JSON.parse(cleanJson);

// Группируем сниппеты по категориям (без эмодзи)
const categories = {
    'Console': ['Console Log', 'Console warn', 'Console Time', 'Console TimeEnd'],
    'Functions': ['Arrow Function', 'Async Arrow Function', 'Async Function', 'Try Catch'],
    'Loops & Arrays': ['For Loop', 'ForEach', 'ForOf', 'Map', 'Filter', 'Find', 'Some', 'Every'],
    'Objects': ['Object keys', 'Object values', 'Object entries', 'Destructuring Assignment'],
    'Async & Promises': ['Promise'],
    'Modules': ['Import', 'Export Default', 'Export Default Class'],
    'Timers': ['Set Timeout', 'Set Interval'],
    'Utilities': ['Template Literal', 'this']
};

// Функция для создания таблицы сниппетов
function createSnippetTable(categorySnippets) {
    let table = '| Префикс | Описание | Код |\n';
    table += '|---------|----------|-----|\n';

    categorySnippets.forEach(snippetName => {
        const snippet = snippets[snippetName];
        if (snippet) {
            const prefix = Array.isArray(snippet.prefix) ? snippet.prefix.join(', ') : snippet.prefix;
            const description = snippet.description;

            // Упрощаем отображение кода
            const body = Array.isArray(snippet.body) ? snippet.body : [snippet.body];
            let code = body.join(' ').replace(/\$/g, '').replace(/\t/g, '  ');

            // Обрезаем длинный код
            if (code.length > 60) {
                code = code.substring(0, 57) + '...';
            }

            table += `| \`${prefix}\` | ${description} | \`${code}\` |\n`;
        }
    });

    return table;
}

// Генерируем README
let readme = `# Best JS Snippets by Dayme

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

`;

// Добавляем категории и их сниппеты
Object.entries(categories).forEach(([categoryName, categorySnippets]) => {
    // Фильтруем только существующие сниппеты
    const existingSnippets = categorySnippets.filter(name => snippets[name]);

    if (existingSnippets.length > 0) {
        readme += `### ${categoryName}\n\n`;
        readme += createSnippetTable(existingSnippets);
        readme += '\n';
    }
});

// Добавляем сниппеты, которые не попали в категории
const categorizedSnippets = Object.values(categories).flat();
const uncategorizedSnippets = Object.keys(snippets).filter(name => !categorizedSnippets.includes(name));

if (uncategorizedSnippets.length > 0) {
    readme += `### Другие\n\n`;
    readme += createSnippetTable(uncategorizedSnippets);
    readme += '\n';
}

// Создаем полную таблицу для быстрого поиска
readme += `## Быстрый справочник

| Префикс | Описание | Категория |
|---------|----------|-----------|
`;

Object.entries(categories).forEach(([categoryName, categorySnippets]) => {
    categorySnippets.forEach(snippetName => {
        const snippet = snippets[snippetName];
        if (snippet) {
            const prefix = Array.isArray(snippet.prefix) ? snippet.prefix.join(', ') : snippet.prefix;
            readme += `| \`${prefix}\` | ${snippet.description} | ${categoryName} |\n`;
        }
    });
});

// Добавляем примеры использования
readme += `
## Примеры использования

### Быстрое логирование
\`\`\`javascript
// Наберите: cl + Tab
console.log(|); // курсор здесь
\`\`\`

### Создание функции
\`\`\`javascript
// Наберите: af + Tab
const functionName = (params) => {
    | // курсор здесь
};
\`\`\`

### Цикл по массиву
\`\`\`javascript
// Наберите: fe + Tab
array.forEach((item) => {
    | // курсор здесь
});
\`\`\`

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

### v${packageJson.version}
- Базовый набор JavaScript сниппетов
- Поддержка консольных команд
- Функции и стрелочные функции
- Циклы и методы массивов
- Асинхронные операции
- Работа с объектами
- ES6+ модули

---

[GitHub](https://github.com/LisovskiyIvan/best-js-snippets-by-dayme) | [Issues](https://github.com/LisovskiyIvan/best-js-snippets-by-dayme/issues)
`;

// Записываем README
fs.writeFileSync(path.join(__dirname, 'README.md'), readme, 'utf8');

// Выводим статистику
const totalSnippets = Object.keys(snippets).length;
const totalCategories = Object.keys(categories).length;

console.log('README.md успешно сгенерирован!');
console.log(`Статистика:`);
console.log(`  Всего сниппетов: ${totalSnippets}`);
console.log(`  Категорий: ${totalCategories}`);
console.log(`  Размер файла: ${Math.round(readme.length / 1024)} KB`);