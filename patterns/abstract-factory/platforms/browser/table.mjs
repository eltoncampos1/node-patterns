import TableComponent from "../../shared/base/table.component.mjs";

export default class TableBrowserComponent extends TableComponent {
    render(data) {
        const template = this.prepareData(data)
        document.body.insertAdjacentHTML("afterBegin", template)
    }
    prepareData(data) {
        const [firstItem] = data
        const theaders = Object.keys(firstItem)
                        .map(text => `<th scope="col">${text}</th>`)

        const joinLists = list => list.join("")

        const tbodyValues = data
                                .map(item => Object.values(item))
                                .map(item => item.map(value => `<td>${value}</td>`))
                                .map(tds => `<tr>${joinLists(tds)}</tr>`)

        const template = `
            <table class="table">
                <thread>
                    <tr>${joinLists(theaders)}</tr>
                </thread>
                <tbbody>
                    ${joinLists(tbodyValues)}
                </tbbody>
            </table>
        `
        return template
    }

}