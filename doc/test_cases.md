## Тест-кейс 1
**Номер: 1**

**Название: Регистрация**

**Предусловие: открыта страница регистрации**

| Шаг |	Ожидаемый результат | 
|--|--|
| Заполнить поле user name латинскими буквами |	Отображается введенные данные в строке ввода | 
| Заполнить поле user name русскими буквами |	Предупреждение об ошибке, имя может быть задано только латинскими буквами, цифрами и знаками |
| Заполнить поле user name данными, которые уже существуют в системе	| Сообщение, что данное имя уже зарегистрировано в системе | 
| Заполнить поле email корректной записью почты, которая не зарегистрирована в системе	| Отображаются введенные данные в строке ввода | 
| Заполнить поле email русскими буквами	| Предупреждение об ошибке, почта может быть задана только латинскими буквами, цифрами и знаками | 
| Заполнить поле email, которая зарегистрирована в системе |	Сообщение, что данная почта уже зарегистрирована в системе | 
| Заполнить поле password корректно |	Отображаются введенные данные в строке ввода, замененные на звездочки |
| Заполнить поле password русскими буквами |	Предупреждение об ошибке, пароль может быть задан только латинскими буквами, цифрами и знаками |
| Корректно заполнены все данные, которые не зарегистрированы в системе |	Переход на страницу профиля при нажатии на кнопку «Join» |


*Таблица 1. Тест-кейс 1*


## Тест-кейс 2
**Номер: 2**

**Название: Авторизация**

**Предусловие: открыта страница авторизации**

| Шаг |	Ожидаемый результат | 
|--|--|
| Заполнить поле username/email латинскими буквами |	Отображается введенные данные в строке ввода |
| Заполнить поле username/email русскими буквами | 	Предупреждение об ошибке, имя может быть задано только латинскими буквами, цифрами и знаками |
| Заполнить поле password корректно |	Отображаются введенные данные в строке ввода, замененные на звездочки |
| Заполнить поле password русскими буквами |	Предупреждение об ошибке, пароль может быть задан только латинскими буквами, цифрами и знаками |
| Корректно заполнены все данные, которые зарегистрированы в системе |	Переход на страницу профиля при нажатии на кнопку «Log in» |
| Допущена ошибка при заполнении данных |	Вывод сообщения, допущена ошибка при вводе username/email или password |

*Таблица 2. Тест-кейс 2*


## Тест-кейс 3

**Номер: 3**

**Название: Прохождение курса**

**Предусловие: открыта страница курсов**

| Шаг |	Ожидаемый результат | 
|--|--|
| Нажимается кнопка «Next» (следующий слайд) |	Открывается следующий слайд курса |
| Нажимается кнопка «Back» (предыдущий слайд) |	Открывается предыдущий слайд курса |
| Нажимается кнопка "Go back" (вернуться) |	Открывается список глав в данном курсе |
| Нажимается кнопка курса |	Открывается страница с первым слайдом выбранного курса |
| Нажимается кнопка слайда |	Открывается страница выбранного слайда |

*Таблица 3. Тест-кейс 3*


## Тест-кейс 4
**Номер: 4**

**Название: Финансовая песочница**

**Предусловие: открыта страница песочницы**

| Шаг |	Ожидаемый результат | 
|--|--|
| Вводится число и нажимается кнопка «Buy» (покупка) |	Совершается транзакция покупки |
| Вводится число и нажимается кнопка «Sell» (продажа) |	Совершается транзакция продажи |
| Вводится число, превышающее сумму кошелька и нажимается кнопка «Buy» (покупка) |	Вывод ошибки транзакции |
| Вводится число, превышающее сумму акций и нажимается кнопка «Sell» (продажа) |	Вывод ошибки транзакции |

*Таблица 4. Тест-кейс 4*


## Тест-кейс 5
**Номер: 5**

**Название: Обратная связь**

**Предусловие: открыта страница обратной связи**

| Шаг |	Ожидаемый результат | 
|--|--|
| Заполнены все поля корректно и нажимается кнопка "Send" (отправить заявку) |	Вывод сообщения об успешной отправке |
| Неверно заполнено поле email |	Сообщение об ошибки при заполнении полей |
| Заполнены не все поля и нажимается кнопка "Send" (отправить заявку) |	Сообщение с просьбой заполнить все поля |

*Таблица 5. Тест-кейс 5*
