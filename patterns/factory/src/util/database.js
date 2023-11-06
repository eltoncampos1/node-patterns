class Database {
    constructor({connString}) {
        this.connString = connString
    }

    async sleep(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    }

    async connect(){
        await this.sleep(100)
        return this
    }

    async find(query) {
        await this.sleep(100)
        return [{name: "Eltoncampos1"}]
    }
}

module.exports = Database