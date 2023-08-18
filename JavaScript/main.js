// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули


fetch(new URL('https://jsonplaceholder.typicode.com/users'))
    .then(response => response.json())
    .then(users => {
        for (let user of users) {
            const userBlock = document.createElement('div')
            userBlock.classList.add('userBlock')
            document.body.appendChild(userBlock)
            // створив головний блок та додав до нього класс


            const userTitle = document.createElement('h2')
            userTitle.classList.add('userTitle')
            userTitle.innerText = `User ${user.id}`


            const userList = document.createElement('ul')
            userList.classList.add('userList')
            for (let field in user) {


                const userElementsOfList = document.createElement('li')
                userElementsOfList.classList.add('allUserLi')
                userElementsOfList.innerText = `${field} - ${JSON.stringify(user[field])}`

                userList.append(userElementsOfList)
            }


            const button = document.createElement('button')
            button.classList.add('redirectToUserButton')

            button.innerText = `Redirect to user ${user.id}`

            button.addEventListener('click', function () {
                location.href = 'user-details.html?id=' + JSON.stringify(user.id)
            })


            userBlock.append(userTitle, userList, button)


        }
    })