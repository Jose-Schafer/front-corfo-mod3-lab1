import '../scss/styles.scss';
import useState from './hooks/use-state'
import { loadDoctorCards } from './components/doctors';
import { changeSortDirection } from './utils/sorter';

// variables
const [sortAscending, setSortAscending] = useState(true);


// events
document.addEventListener('DOMContentLoaded', () => loadDoctorCards(sortAscending()));
document.getElementById("doctorFilter").addEventListener("change", () => loadDoctorCards(sortAscending()));
document.getElementById("sortButton").addEventListener("click", () => changeSortDirection(loadDoctorCards, sortAscending(), setSortAscending, "sortButton"))

