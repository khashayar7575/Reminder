import Reminder from '../models/reminder.model';

interface ReminderListProps {
      items: Reminder[],
      onRemoveReminder: (id: number) => void;
}

function ReminderList({items, onRemoveReminder}: ReminderListProps) {
      return (
            <ul className='list-group'>
                  {items.map(i => <li className='list-group-item' key={i.id}>
                        {i.title}
                        <button onClick={() => onRemoveReminder(i.id)} className='btn btn-outline-danger mx-3 rounded-pill'>Delete</button>
                  </li>)}
            </ul>
      );
}

export default ReminderList;