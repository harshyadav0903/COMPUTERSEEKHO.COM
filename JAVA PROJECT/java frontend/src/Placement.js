import { useEffect, useState } from "react"

export default function Placement() {
    const [prn, setPRN] = useState([]);
    const [comp, setCompany] = useState([]);
    const [vacancy, setVacancy] = useState([])

    //for prn
    useEffect(() => {
        fetch("http://localhost:8084/api/prn/get")
            .then(res => res.json())
            .then(data => setPRN(data))
    }, [])

    //for placement vacancy
    useEffect(() => {
        fetch("http://localhost:8084/api/vacancy/get")
            .then(res => res.json())
            .then(data => setVacancy(data))

    }, []);

    //for company id
    useEffect(() => {
        fetch("http://localhost:8084/api/Company/get")
            .then(res => res.json())
            .then(data => setCompany(data))
    }, []);

    //for batch id
    useEffect(() => {
        fetch("http://localhost:8084/api/Batch/get")
            .then(res => res.json())
            .then(data => setCompany(data))
    }, []);











}