import PropTypes from 'prop-types';
import css from '../Contact/ContactList.module.css';
import { ContactItem } from './ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.wrapper}>
      {contacts.map(({ id, name, phone }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={phone}
            id={id}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,


};
