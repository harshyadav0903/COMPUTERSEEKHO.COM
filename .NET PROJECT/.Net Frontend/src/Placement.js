import { useEffect, useState } from "react"

export default function Placement() {
    const [prn, setPRN] = useState([]);
    const [comp, setCompany] = useState([]);
    const [vacancy, setVacancy] = useState([])

    //for prn
    useEffect(() => {
        fetch("https://localhost:7020/api/Prn")
            .then(res => res.json())
            .then(data => setPRN(data))
    }, [])

    //for placement vacancy
    useEffect(() => {
        fetch("https://localhost:7020/api/PlacementVacancy")
            .then(res => res.json())
            .then(data => setVacancy(data))

    }, []);

    //for company id
    useEffect(() => {
        fetch("https://localhost:7020/api/Course")
            .then(res => res.json())
            .then(data => setCompany(data))
    }, []);

    //for batch id
    useEffect(() => {
        fetch("https://localhost:7020/api/Batch")
            .then(res => res.json())
            .then(data => setCompany(data))
    }, []);











}