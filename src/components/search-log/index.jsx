import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


const SearchLog = (props) => {

    const navigate = useNavigate();

    const [people, setPeople] = useState();
    const [films, setFilms] = useState();
    const [starships, setStarships] = useState();
    const [vehicles, setVehicles] = useState();
    const [species, setSpecies] = useState();
    const [planets, setPlanets] = useState();
    const [isLogged, setIsLogged] = useState(false)
    const [searchLog, setSearchLog] = useState();

    useEffect(() => {
        const peopleLog = localStorage.getItem('people');
        const filmsLog = localStorage.getItem('films');
        const starshipsLog = localStorage.getItem('starships');
        const vehiclesLog = localStorage.getItem('vehicles');
        const speciesLog = localStorage.getItem('species');
        const planetsLog = localStorage.getItem('planets');

        setPeople(JSON.parse(peopleLog));
        setFilms(JSON.parse(filmsLog));
        setStarships(JSON.parse(starshipsLog));
        setVehicles(JSON.parse(vehiclesLog));
        setSpecies(JSON.parse(speciesLog));
        setPlanets(JSON.parse(planetsLog))

        setIsLogged(true);

    }, []);

    useEffect(() => {
        let auxArr = [];
        if (people) auxArr.push(people[people.length - 1]);
        if (films) auxArr.push(films[films.length - 1])
        if (starships) auxArr.push(starships[starships.length - 1])
        if (vehicles) auxArr.push(vehicles[vehicles.length - 1])
        if (species) auxArr.push(species[species.length - 1])
        if (planets) auxArr.push(planets[planets.length - 1])

        auxArr.sort((a, b) => {
            return b.date - a.date;
        })
        setSearchLog(auxArr);
    }, [isLogged])


    function loadPastSearch(e) {
        props.closeModal();
        navigate(`/home/${e.target.textContent.split('//')[1]}`)
    }

    return (
        <div>
            <h2>Click a log to load information</h2>
            {isLogged ? searchLog.map((e, i) => <p onClick={loadPastSearch} key={i}>{new Date(e.date) + ' //' + e.name}</p>) : ''}
        </div>

    )
}

export default SearchLog;

