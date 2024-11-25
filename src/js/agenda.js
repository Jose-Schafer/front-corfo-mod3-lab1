import '../scss/styles.scss'
import { AppointmentStack, createAppointmentListItemHTML } from './components/appointments';

const appointmentStack = new AppointmentStack('appointment-list', createAppointmentListItemHTML);
