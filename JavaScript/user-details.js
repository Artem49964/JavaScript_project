const url = new URL(location.href)
const jsonParamIdUser = url.searchParams.get('id')
const idUser = JSON.parse(jsonParamIdUser)


fetch(new URL(`https://jsonplaceholder.typicode.com/users/` + idUser)).then(response => response.json())
    .then(value => {
        const userBlock = document.createElement('div')
        userBlock.classList.add('userBlock')
        document.body.appendChild(userBlock)
        // створив головний блок


        const title = document.createElement('h2')
        title.classList.add('user_title')
        title.innerText = `User ${value.id}`

        const ul = document.createElement('ul')
        ul.classList.add('userUl')

        // створив заголовок
        for (element in value) {
            const li = document.createElement('li')
            li.classList.add('user_li')
            li.innerText = `${JSON.stringify(element)} - ${JSON.stringify(value[element])}`
            ul.append(li)
        }

        const button = document.createElement('button')
        button.classList.add('redirectToPostButton')
        button.innerText = `Show all posts of user ${value.id}`

        button.addEventListener('click', function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${value.id}/posts`)
                .then(response => response.json())
                .then(post => {
                    const postInfo = document.createElement('div')
                    postInfo.classList.add('postInfo')
                    for (element of post) {

                        const postTitle = document.createElement('a')
                        postTitle.classList.add('postTitle')
                        postTitle.innerText = element.title
                        postTitle.href = `post_details.html?post_id=${element.id}`
                        postInfo.append(postTitle)
                    }
                    document.body.appendChild(postInfo)
                })
        })


        userBlock.append(title, ul)
        document.body.appendChild(button)

    })
