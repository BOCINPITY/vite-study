// let str: string = "hello world"
//
// // console.log("hello world")
//
// interface PersonField {
//     name: string;
//     age: number;
// }
//
// function demo(params: PersonField) {
//     console.log(params.name)
//     console.log(params.age)
// }
//
// console.log(str)
// // console.log("person")
// demo({name: "zhangsan", age: 18})
// console.log(import.meta.env.VITE_PROXY_TARGET)

import {forEach} from 'lodash'

const arr: number[] = [1, 2, 3, 4, 5]
forEach(arr, (item: number) => {
    console.log(item)
})