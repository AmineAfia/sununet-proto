import axios from 'axios';

export const FETCH_PROJECTS = 'FETCH_PROJECTS';

const JSON_URL = "http://localhost:3000/projects/";
// const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

export function fetchProjects() {
    console.log('fetching Projects');
    const request = axios.get(JSON_URL);

    return {
        type: FETCH_PROJECTS,
        payload: request
    };
}