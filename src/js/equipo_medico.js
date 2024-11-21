import '../scss/styles.scss'
import { loadDoctorCards, changeSortDirection } from './components/doctors'

document.addEventListener('DOMContentLoaded', loadDoctorCards);
document.getElementById("doctorFilter").addEventListener("change", loadDoctorCards);
document.getElementById("sortButton").addEventListener("click", changeSortDirection)

