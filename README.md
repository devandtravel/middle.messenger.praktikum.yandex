Важно. Комментарий для ревьювера.

Я уже отправлял задание на проверку и получал замечания. Их можно посмотреть в этом пулл реквесте:
https://github.com/devandtravel/middle.messenger.praktikum.yandex/pull/1

Мне пришлось создать новый пулл реквест и старых замечаний в нем не видно, вот почему.

Дело в том, что я по ошибке замерджил пулл реквест с замечаниями, потом пытался отменить этот мердж, запутался, потом обнаружил,
что не могу открыть новый пулл реквест из sprint_1 в main, видимо, у них пропала общая история.
В итоге я из локальной ветки sprint_1 сделал git reset --soft main, чтобы синхронизировать истории веток, затем сделал один большой коммит и пуш со всеми локальными изменениями.
Поэтому получается, что я делаю полностью новый пулл реквест в main, вот он:

https://github.com/devandtravel/middle.messenger.praktikum.yandex/pull/5

Все замечания я исправил. Извините за неудобства при проверке.

## Description

Messenger application.  
Supports creating groups, adding and deleting users, search, unread message counter, profile editing, sending photos, videos, files, geolocation, stickers.

## Commands

`npm run dev` - run application on development server  
`npm run build` - build the application, the resulting code will be placed in the dist folder  
`npm run start` - run the built application using Express server

## UI

https://www.figma.com/file/6Ac5bFtsSu1Yc4teMW40uI/Untitled?node-id=0%3A1

## Link to pull request

https://github.com/devandtravel/middle.messenger.praktikum.yandex/pull/5

## Link to Netlify deployment

https://devandtravel-chat.netlify.app/
