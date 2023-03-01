import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ReminderList from '../components/ReminderList.component';
import reminderService from '../services/reminder.service';
import Reminder from '../models/reminder.model'
import NewReminder from '../components/NewReminder.component';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
      const [reminders, setReminders] :[Reminder[], (reminders: Reminder[])=> void] = useState<Reminder[]>([]);

      useEffect(() => {
            getReminders()
      }, []);

      const getReminders = async () => {
            let response = await reminderService.getReminders();
            setReminders(response)
      }

      const removeReminder = (id: number) => {
            setReminders(reminders.filter(item => item.id !== id))
      }

      const addReminder = async (title: string) => {
            let response = await reminderService.addReminder(title)
            setReminders([response, ...reminders])
      }
      return (
            <div className={styles.container}>
                  <Head>
                        <title>Reminder App</title>
                        <meta name="description" content="Malltina Chanllange" />
                  </Head>
                  
                  <NewReminder onAddReminder={addReminder}/>
                  <ReminderList onRemoveReminder={removeReminder} items={reminders}/>
            </div>
      )
}

export default Home
