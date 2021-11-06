import { useEffect, useState } from "react";


const SearchLog = () => {

    const [people, setPeople] = useState();
    const [films, setFilms] = useState();
    const [starships, setStarships] = useState();
    const [vehicles, setVehicles] = useState();
    const [species, setSpecies] = useState();
    const [planets, setPlanets] = useState();

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
    }, []);


    return (
        <h1>people</h1>
    )
}

export default SearchLog;