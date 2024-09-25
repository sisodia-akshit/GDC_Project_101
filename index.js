const retriveEntries = () => {
    let entries = localStorage.getItem('userEntries')
    if (entries) {
        return JSON.parse(entries);
    } else {
        return [];
    }
}
let userEntries = retriveEntries();

const displayEntry = () => {
    const entries = retriveEntries();

    const tableEntries = entries.map((entry) => {
        const nameCell = `<td class='border px-4 py-2'>${entry.name}</td>`
        const emailCell = `<td class='border px-4 py-2'>${entry.email}</td>`
        const passCell = `<td class='border px-4 py-2'>${entry.pass}</td>`
        const dobCell = `<td class='border px-4 py-2'>${entry.dob}</td>`
        const termsCell = `<td class='border px-4 py-2'>${entry.acceptTerms}</td>`

        let newEntry = `<tr> ${nameCell} ${emailCell} ${passCell} ${dobCell} ${termsCell} </tr>`
        return newEntry
    }).join('\n')

    const table = `
        <table class="table-auto w-full">
          <tr>
            <th class="px-4 py-2" >Name</th>
            <th class="px-4 py-2" >Email</th>
            <th class="px-4 py-2" >Password</th>
            <th class="px-4 py-2" >D.O.B</th>
            <th class="px-4 py-2" >acctpted terms?</th>
          </tr>
          ${tableEntries}
        </table>
    `;
    console.log(tableEntries)
    document.getElementById('user-entries').innerHTML = table;

}

const userFormEventHandler = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;

    const acceptTerms = document.getElementById('acceptTerms').checked;

    const userInfo = {
        name,
        email,
        pass,
        dob,
        acceptTerms
    }
    userEntries.push(userInfo);

    console.log(userEntries)

    localStorage.setItem('userEntries', JSON.stringify(userEntries));
    displayEntry();
}
document.getElementById('userForm').addEventListener('submit', userFormEventHandler);

displayEntry();