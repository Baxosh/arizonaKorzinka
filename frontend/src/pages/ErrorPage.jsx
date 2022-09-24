import React from 'react'

export default function ErrorPage() {
  return (
    <div className="container">
      <div className="number-box">
        <h1 className='number-box-four'>4</h1>
        <div className='round-circle'>
          <img className='gif-error-page ' src="https://korzinka.uz/_nuxt/img/banana.c6da2ee.png" alt="" />
        </div>
        <h1 className='number-box-four'>4</h1>
      </div>
      <div className="title-box">
        <h1 className='title word-error-page'>Страница не найдена</h1>
        <p className=' small-word'>Но мы можем кое-что вам предложить</p>
      </div>
    </div>
  )
}
