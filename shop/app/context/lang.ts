"use client" // говорим что данная деректива будет выполнятся на стороне клиента т.к effector-react это клиентская часть
import {createDomain} from "effector";
import {AllowedLangs} from "@/app/constants/lang";

const lang = createDomain() //создаю домен для смены языка

export const setLeng = lang.createEvent<AllowedLangs>() // Константа для смены языка которая создаёт ивент с входными значениями AllowedLangs которая прописанна в файле lang.ts

export const $lang = lang
  .createStore(AllowedLangs.RU) // Создание Store c дефолтным значением RU
  .on(setLeng,(_,lang)=> lang) // Онуляем состояние lang в нашем созданом сторе
