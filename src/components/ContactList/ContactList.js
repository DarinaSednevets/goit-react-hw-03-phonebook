import PropTypes from 'prop-types';
import styles from "./ContactList.module.css"

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul className={styles.list}>
            {
                contacts.map(({ id, name, number }) =>
                (
                    <li className={styles.item} key={id} >
                        {name}:{number}
                        <button className={styles.btn} type="button"
                            onClick={() => { deleteContact(id) }}
                        >Delete
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}


export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    deleteContact: PropTypes.func.isRequired
}