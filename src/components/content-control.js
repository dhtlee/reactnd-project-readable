import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import FaCommentO from 'react-icons/lib/fa/comment-o';
import FaEdit from 'react-icons/lib/fa/edit';
import FaTrashO from 'react-icons/lib/fa/trash-o';

import WhiteSpace from './white-space';

const ContentControl = ({ type, id, commentsCount, history, match, onDelete }) => (
  <div className='content-control'>
    { commentsCount !== undefined && 
      <div className='content-control-item'>
        <FaCommentO />
        <WhiteSpace />
        <span>{commentsCount} comments</span>
      </div>
    }
    <div className='content-control-item'>
      <FaEdit />
      <WhiteSpace />
      <Link to={`/${type}/${id}/edit`}>
        <span>Edit</span>
      </Link>
    </div>
    <div className='content-control-item'>
      <FaTrashO />
      <WhiteSpace />
      <Link to='/' onClick={(event) => {
        event.preventDefault();
        onDelete(id);
        history.push('/');
      }}>
        <span>Delete</span>
      </Link>
    </div>
  </div>
)

export default withRouter(ContentControl);