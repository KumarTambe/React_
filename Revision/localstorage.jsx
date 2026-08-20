import react from 'react'


function SaveData() {
    const user = { name: 'Kumar', role: 'admin' }
    localStorage.setItem('user', JSON.stringify(user))

    const data = JSON.parse(localStorage.getItem('user'))
    console.log(data);

    localStorage.removeItem('user')

}