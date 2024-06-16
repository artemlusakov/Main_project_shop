"use client" // говорим что данная деректива будет выполнятся на стороне клиента т.к effector-react это клиентская часть
import {useUnit} from "effector-react";
import {$lang} from "@/app/context/lang";
import translationsJson from '@/app/asets/translations/translations.json'

export const  useLang = () => {
  const lang = useUnit($lang) // раньше использовался usStore но с выходом новых версий теперь используется useUnit и всёравно передаём туда наш Store
  const translation = translationsJson // Преобразовываем наш перевод из файла translations.json в переменную translation

  return{ lang, translation}
};
