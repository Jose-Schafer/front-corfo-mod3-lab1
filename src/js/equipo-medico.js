import '../scss/styles.scss';
import useState from './hooks/use-state'
import { loadDoctorCards } from './components/doctors';
import { changeSortDirection } from './utils/sorter';

// variables
const [getSortAscending, setSortAscending] = useState(true);

// events
document.addEventListener('DOMContentLoaded', () => loadDoctorCards(getSortAscending));
document.getElementById("doctorFilter").addEventListener("change", () => loadDoctorCards(getSortAscending));
document.getElementById("sortButton").addEventListener("click", () => changeSortDirection(loadDoctorCards, getSortAscending, setSortAscending, "sortButton"))

