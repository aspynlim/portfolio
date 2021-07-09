import { useRef } from 'react'

import Card from '../ui/Card'
import classes from './scss/newBlogPostForm.module.scss'

function NewBlogPostForm(props) {
  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const descriptionInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault()

    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const blogPostData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
    }

    props.onAddBlogPost(blogPostData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image URL</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewBlogPostForm
