import React from 'react';

const Category = ({ match }) => (
  <div>
    <h2>Category - {match.params.name}</h2>
  </div>
)

export default Category;