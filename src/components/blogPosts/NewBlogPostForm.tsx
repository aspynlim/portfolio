import { useRef } from 'react'

import Card from '../ui/Card'
import classes from './scss/newBlogPostForm.module.scss'

function NewBlogPostForm(props) {
  const titleInputRef = useRef()
  const descriptionInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault()

    const enteredTitle = titleInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const blogPostData = {
      title: enteredTitle,
      description: enteredDescription,
    }

    props.onAddBlogPost(blogPostData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="3"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add blogPost</button>
        </div>
      </form>
    </Card>
  )
}

export default NewBlogPostForm
