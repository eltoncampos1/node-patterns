const { expect } = require("chai")
const { it, describe } = require("mocha")
const  producValidator = require("../src")
const ProductDataBuilder = require("./model/productDatabuild")

describe("Test Data Builder", () => {
    it("shouldn\'t return error with valid props", () => {
        const product = ProductDataBuilder.aProduct().build()
        const result = producValidator(product)

        const expected = {
            errors: [],
            result: true
        }

        expect(result).to.be.deep.equal(expected)
    })

    describe("Product validation Rules", () => {
        it("should return an object error when creating a Product with invalid id", () => {
            const product = ProductDataBuilder.aProduct().withInvalidId().build()
            const result = producValidator(product)

            const expected = {
                errors: ["[id]: invalid length, current [1] must be between 2 and 20"],
                result: false
            }

                expect(result).to.be.deep.equal(expected)
        })
        it("should return an object error when creating a Product with invalid name", () => {

            const product = ProductDataBuilder.aProduct().withInvalidName().build()
            const result = producValidator(product)

            const expected = {
                errors: ["[name]: invalid value, current [abc123] must have only words"],
                result: false
            }

            expect(result).to.be.deep.equal(expected)
        })
        it("should return an object error when creating a Product with invalid price", () => {
            const product = ProductDataBuilder.aProduct().withInvalidPrice().build()
            const result = producValidator(product)

            const expected = {
                errors: ["[price]: invalid value, current [2000] must be between 1 and a 1000"],
                result: false
            }

            expect(result).to.be.deep.equal(expected)
        })
        it("should return an object error when creating a Product with invalid category", () => {
            const product = ProductDataBuilder.aProduct().withInvalidCategory().build()
            const result = producValidator(product)

            const expected = {
                errors: ["[categry]: invalid value, current [mecanic] must be either eletronic or organic"],
                result: false
            }

            expect(result).to.be.deep.equal(expected)   
        })
    })
})
