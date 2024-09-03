import {cloneDeep} from 'lodash'

const arr: number[] = [1, 2, 3, 4, 5]


const newArr = cloneDeep(arr)

console.log(newArr)