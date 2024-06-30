//Store - хранилище состояний вне приложения
import {configureStore} from '@reduxjs/toolkit' // Встроенная функци которая создаёт наш Store

//Опишим структуру состояния
type State = {
    counter: number;
};

//Вынесем типы данных в отдельные переменные
export type  IncrementAction = { type: 'increment' }
export type  DecrementAction = { type: 'decrement' }

//Опишим структуру Action Добовления и Вычитания
type Action = IncrementAction | DecrementAction

//Мы создали действие-тригер (Action) теперь можем сделать наш reducer для счётчика
const initialState: State = {   //Т.к при первой инициализации у нас нет дефолтного State мы создали базовое значение по умолчанию
    counter: 0,
};
const reducer = (state = initialState, action: Action): State => {
    // чтобы нам выполнить какое либо действие с состоянием нам нужно выловить тип Action в нашем случае это increment и decrement
    switch (action.type) {       //будем менять состояния по типу actions

        case "increment":
            return {
                ...state,   //сплитуем наш стэйт т.к суть в том что мы не должны его менять
                counter: state.counter + 1 //Т.к мы засплитили нашь стэйт мы можем обращатся к его состояниям в данном случае оно одно и это состояние счётчика к которому мы приравниваем старое значение + 1
            };

        case "decrement":
            return {
                ...state,   //сплитуем наш стэйт т.к суть в том что мы не должны его менять
                counter: state.counter - 1 //Т.к мы засплитили нашь стэйт мы можем обращатся к его состояниям в данном случае оно одно и это состояние счётчика к которому мы приравниваем старое значение - 1
            };

       default :
           return state;  // Всегда делайте возвращение state в качестве дефолтного значения если ни один тип даных не подходит
    }

}

export const store = configureStore({
    //reducer - функция которая говорит как должно менятся состояние в зависимости от Action
    reducer:reducer,
})