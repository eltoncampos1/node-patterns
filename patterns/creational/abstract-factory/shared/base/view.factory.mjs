import NotImplementedExcepetion from "../not-implemented-exception.mjs";

export default class ViewFactory {
    createTable() {
        throw new NotImplementedExcepetion(this.createTable.name)
    }
} 