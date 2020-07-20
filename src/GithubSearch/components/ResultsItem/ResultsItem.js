import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';

export const ResultsItem = ({ item, active, setSelected, setHovered }) => {
  const { name, url, itemType } = item;

  return (
    <ListGroupItem
      onClick={() => setSelected(item)}
      onMouseEnter={() => setHovered(item)}
      onMouseLeave={() => setHovered(undefined)}
      href={url}
      active={active}
      color='info'
      tag='a'
      target='_blank'
      action
    >
      <ListGroupItemHeading>
        {name} ({itemType})
      </ListGroupItemHeading>
      <ListGroupItemText>{url}</ListGroupItemText>
    </ListGroupItem>
  );
};

ResultsItem.propTypes = {
  item: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  setSelected: PropTypes.func.isRequired,
  setHovered: PropTypes.func.isRequired
};
