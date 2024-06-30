//Store - хранилище состояний вне приложения
import { configureStore } from '@reduxjs/toolkit' // Встроенная функци которая создаёт наш Store

//Опишим структуру состояния
type State = {
    counter: number;
};

//Вынесем типы данных в отдельные переменные
export type  IncrementAction = { type:'increment'}
export type  DecrementAction = { type:'decrement'}

//Опишим структуру Action Добовления и Вычитания
type Action = IncrementAction | DecrementAction

//Мы создали действие-тригер (Action) теперь можем сделать наш reducer для счётчика
const initialState: State = {   //Т.к при первой инициализации у нас нет дефолтного State мы создали базовое значение по умолчанию
    counter: 0,
};
const reducer =(state = initialState, action: Action) : State => {
    
}

export const store = configureStore({
    //reducer - функция которая говорит как должно менятся состояние в зависимости от Action
    reducer: {

    },
})