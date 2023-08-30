import React from 'react'

function About() {
    const cardStyle = {
        width: "18rem"
    }
  return (
    <>
    <h2 className='text-center'>About TextUtils</h2>
        <div className="card my-4" style={cardStyle}>
  <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg" className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">Web Development</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  )
}

export default About
