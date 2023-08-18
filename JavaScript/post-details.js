const url = new URL(location.href)
const post_id = JSON.parse(url.searchParams.get('post_id'))


fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    .then(response => response.json())
    .then(user => {
        const postInfoBlock = document.createElement('div')
        postInfoBlock.classList.add('postInfoBlock')

        const postTitle = document.createElement('p')
        postTitle.innerText = `Post ${user.id} by user ${user.userId}`


        const postList = document.createElement('ul')
        postList.classList.add('postList')

        for (let field in user) {


            const postElementsOfList = document.createElement('li')
            postElementsOfList.classList.add('postElementsOfList')
            postElementsOfList.innerText = `${field} - ${JSON.stringify(user[field])}`

            postList.append(postElementsOfList)
        }
        document.body.append(postInfoBlock)


        postInfoBlock.append(postTitle, postList)
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`)
    .then(response => response.json())
    .then(comments => {

        const comment_block = document.createElement('div')
        comment_block.classList.add('commentBlock')

        const comment_list = document.createElement('ol')
        comment_list.classList.add('commentList')

        for (const comment of comments) {
            const comment_li = document.createElement('li')
            comment_li.classList.add('commentLi')
            comment_li.innerText = comment.body
            comment_li.style.marginBottom = '2vh'
            comment_list.appendChild(comment_li)
        }

        document.body.appendChild(comment_block)
        comment_block.appendChild(comment_list)

    })

