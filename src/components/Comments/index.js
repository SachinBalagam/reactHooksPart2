import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem/index'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentsList, setCommentsList] = useState([])

  const onNameChange = event => setName(event.target.value)
  const onCommentChange = event => setCommentText(event.target.value)

  const onFormSubmit = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setName('')
    setCommentText('')
    setCommentsList(prevCommentsList => [...prevCommentsList, newComment])
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onFormSubmit}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onNameChange}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          onChange={onCommentChange}
          value={commentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentsList.map(eachComment => (
          <CommentItem commentDetails={eachComment} key={eachComment.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
