import TableComponent from "../../shared/base/table.component.mjs"

export default class TableConsoleComponent extends TableComponent {
    render(data) {
        console.log("DATA", data)
    }
}