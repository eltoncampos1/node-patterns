function productValidator(product) {
    const errors = []

    if(!(product.id.length >= 2 && product.id.length <= 20)) {
        errors.push(`[id]: invalid length, current [${product.id}] must be between 2 and 20`)
    }

    if(/(\W|\d)/.test(product.name)) {
        errors.push(`[name]: invalid value, current [${product.name}] must have only words`)
    }

    if(!(product.price >= 1 && product.price <= 1000)) {
        errors.push(`[price]: invalid value, current [${product.price}] must be between 1 and a 1000`)
    }

    if(!(["eletronic", "organic"].includes(product.category))) {
        errors.push(`[categry]: invalid value, current [${product.category}] must be either eletronic or organic`)
    }

    return {
        result: errors.length === 0,
        errors
    }
}

module.exports = productValidator