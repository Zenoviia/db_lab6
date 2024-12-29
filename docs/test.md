# Тестування працездатності системи

Для перевірки роботи API використовувався інструмент Postman. Нижче представлені зразки запитів та отриманих відповідей для ключових операцій.

---

## **Create**

### Коректне додавання User'а

![Successful Create](https://github.com/user-attachments/assets/1e9b7d6b-40a1-4c5c-bfc2-5ff8e4001553)


### Додавання вже існуючого User'а

![Unsuccessful Create](https://github.com/user-attachments/assets/420de5ed-0d43-4ed7-8bf6-4ef58aa40eaf)


---

## **Read**

### Зчитування даних усіх User'ів

![img_5.png](img_5.png)

![img_6.png](img_6.png)

### Коректне зчитування даних одного User'а

![img_7.png](img_7.png)

### Зчитування даних одного User'а з неіснуючим ID

![img_8.png](img_8.png)

---

## **Update**

### До оновлення даних User'а

![img_13.png](img_13.png)

### Коректне оновлення даних User'а

![img_15.png](img_15.png)

### Після оновлення даних User'а

![img_14.png](img_14.png)

### Помилка оновлення даних User'а, через вказаний ID в тілі запиту (request body)

![img_9.png](img_9.png)

---

## **Delete**

### До видалення

![img_16.png](img_16.png)

### Коректне видалення даних User'а

![img_17.png](img_17.png)

### Після видалення

![img_18.png](img_18.png)

### Помилка видалення даних User'а через відсутність вказаного ID

![img_11.png](img_11.png)

### Помилка видалення даних User'а через неправильно вказаний ID

![img_12.png](img_12.png)