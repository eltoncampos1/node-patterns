import NotImplementedExcepetion from "../not-implemented-exception.mjs";

export default class TableComponent {
    render(data) {
        throw new NotImplementedExcepetion(this.render.name)
    }
}