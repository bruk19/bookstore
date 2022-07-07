import React from 'react'

function Book({ title, author }) {
    return (
      <>
      <div>
        <div>
            <span>Action</span>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <div>
                <button type='button'>comments</button>
                <button type='button'>Remove</button>
                <button type='button'>Edit</button>
            </div>
        </div>
        <div>
            <span>64%</span>
            <h5>Completed</h5>
        </div>
        <div>
            <h5>CURRENT CHAPTER</h5>
            <h4>Chapter 17</h4>
            <button type='button'>UPDATE PROGRESS</button>
        </div>

      </div>
      </>
    );
  }
export default Book;