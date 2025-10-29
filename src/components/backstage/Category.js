import React from 'react';
import { Title, Chip, Link } from 'components';

const Category = ({ item, basePath }) => {
  const { category } = item;
  if (!category) return null;
  return (
    <div className="p-6 bg-gray-100 rounded-lg mb-6">
      <div className="mb-4">
        <Title>Category</Title>
      </div>
      <Link to={`${basePath}/?category=${category.searchParam}`} className="inline-block">
        <Chip label={category.name} title={category.description} />
      </Link>
    </div>
  );
};

export default Category;
