import React from 'react';
import PropTypes from 'prop-types';

export const ResultsItem = ({ item, active, setSelected, setHovered }) => {
  const { name, url, details, itemType } = item;

  return (
    <a href={url} target='_blank'>
      <div
        style={{ backgroundColor: `${active ? 'red' : 'blue'}` }}
        className={`item ${active ? 'active' : ''}`}
        onClick={() => setSelected(item)}
        onMouseEnter={() => setHovered(item)}
        onMouseLeave={() => setHovered(undefined)}
      >
        <h3>{name}</h3>
        <div>{url}</div>
      </div>
    </a>
  );
};

ResultsItem.propTypes = {
  item: PropTypes.object.isRequired
};

{
  /* <img
        src={itemType === 'user' ? details:avatarrl}
        alt=''
        style={{ width: '60px' }}
      /> */
}
