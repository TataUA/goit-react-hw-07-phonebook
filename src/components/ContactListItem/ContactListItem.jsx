import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContactThunk } from 'redux/contactsThunk';
import { ItemLi, ItemSpan, Button } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  function onDeleteContact(id) {
    dispatch(deleteContactThunk(id));
  }

  return (
    <ItemLi>
      {' '}
      {name}
      <ItemSpan>&#9990; {number}</ItemSpan>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </ItemLi>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
