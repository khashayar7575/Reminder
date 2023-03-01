import axios from 'axios';
import Reminder from '../models/reminder.model';

class ReminderService {
      http = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com/'
      })

      async getReminders() {
            let response = await this.http.get<Reminder[]>('/todos');
            return response.data
      }

      async addReminder(title: string) {
            let response = await this.http.post<Reminder>('/todos', {title});
            return response.data
      }
}

export default new ReminderService();