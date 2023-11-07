const rewiremock = require("rewiremock/node.js")
const { deepStrictEqual } = require("assert")
const dbData = [ {name: "Jhon doe"}, {name: "FooBar"}]

class MockDatabase {
    connect = () => this
    find = async (query) => dbData
}

rewiremock(() => require("../src/util/database.js")).with(MockDatabase)
;(async () => {
    {
        const expected = [{name: "JHON DOE"}, {name: "FOOBAR"}]
        rewiremock.enable()
        const UserFactory = require("../src/factory/user.factory.js")
        const userFactory = await UserFactory.createInstance()
        const result = await userFactory.find("")
        deepStrictEqual(result, expected)
        rewiremock.disable()
    }

    {
        const expected = [{name: "ELTONCAMPOS1"}]
        const UserFactory = require("../src/factory/user.factory.js")
        const userFactory = await UserFactory.createInstance()
        const result = await userFactory.find("")
        deepStrictEqual(result, expected)
    }
})()