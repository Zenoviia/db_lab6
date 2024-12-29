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

![Successful Read for all users 1](https://github.com/user-attachments/assets/5d96233a-d020-4b5f-8f56-eff4d2f66758)


![Successful Read for all users 2](https://github.com/user-attachments/assets/454d0e4e-b686-482e-9be8-252d7d5d0d34)


### Коректне зчитування даних одного User'а

![Successful Read for one user](https://github.com/user-attachments/assets/b0316c75-91de-453d-8755-d2b060ad35e8)


### Зчитування даних одного User'а з неіснуючим ID

![Unsuccessful Read for one user](https://github.com/user-attachments/assets/7cd287ed-b0ae-454a-91f5-b859245e52b4)


---

## **Update**

### До оновлення даних User'а

![Before Update](https://github.com/user-attachments/assets/d81354f3-6585-490f-b019-de2030a5a107)


### Коректне оновлення даних User'а

![Successful Update](https://github.com/user-attachments/assets/c2826469-034c-40a1-9223-cc8ea1e0b042)



### Після оновлення даних User'а

![After Update](https://github.com/user-attachments/assets/12b64391-16e0-4fee-a361-a128d32bc5e0)


### Помилка оновлення даних User'а, через вказаний ID в тілі запиту (request body)

![Unsuccessful Update](https://github.com/user-attachments/assets/649ab817-a7f4-4763-b38c-a50d5bdf7317)


---

## **Delete**

### До видалення

![Before Delete](https://github.com/user-attachments/assets/54d0afcb-ad3c-4c49-8ec6-deee93e33a41)


### Коректне видалення даних User'а

![Successful Delete](https://github.com/user-attachments/assets/5b84e68f-8093-4e1f-b35a-dbc8a3b497e1)


### Після видалення

![After Delete](https://github.com/user-attachments/assets/3a52f2af-627f-4610-b763-71df4c3a8295)


### Помилка видалення даних User'а через відсутність вказаного ID

![Unsuccessful Delete 1](https://github.com/user-attachments/assets/c6568289-b139-40c8-9eae-b3e7066b5e36)


### Помилка видалення даних User'а через неправильно вказаний ID

![Unsuccessful Delete 2](https://github.com/user-attachments/assets/89602ebf-908d-47fe-8112-20fd2a3445e7)

