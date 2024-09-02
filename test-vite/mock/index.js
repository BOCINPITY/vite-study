const mockJS = require('mockjs')

const userList = mockJS.mock({
    "data|100": [{
        "id|+1": 1,
        "name": "@cname",
        "age|18-60": 1,
        "address": "@city(true)"
    }]
})

module.exports = [
    {
        method: 'post',
        url: '/api/users',
        response: ({body}) => {
            return {
                code: 200,
                message: "success",
                data: userList.data
            }
        }
    }
]