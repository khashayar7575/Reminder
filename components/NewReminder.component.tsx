import React, {useState, useEffect} from 'react';
interface NewReminderProps {
      onAddReminder: (title: string)=> void
}

function NewReminder({onAddReminder}: NewReminderProps) {
      const [title, setTitle] : [string, (title: string) => void] = useState('');
      const addReminder = (e: React.FormEvent) => {
            e.preventDefault();
            if(!title) return
            onAddReminder(title);
            setTitle('');
      }
      return (
            <form onSubmit={addReminder}>
                  <label htmlFor="title">Reminder Title</label> 
                  <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" type="text" />  
                  <button type='submit' className="btn btn-primary my-3 rounded-pill">Add Reminder</button>
            </form>
      );
}

export default NewReminder;