import { useEffect, useState } from "react"

export default function PlacementVacancy() {

    const [pvacancy, setpvacancy] = useState([]);
    const [comp, setCompany] = useState([]);
    const[prn,setPRN]=useState([]);
    const[batch,setBatch]=useState([]);
    const[student,setstudent]=useState([]);

    const handleonchange = (event) => {
        const name = event.target.name;
        const value = event.target.value
        setpvacancy((vac) => ({ ...vac, [name]: value }))

    }

    //for company 
    useEffect(() => {
        fetch("http://localhost:8084/api/Company/ListAll")
            .then(res => res.json())
            .then(data => setCompany(data))
    }, []);

    //for PRN
    useEffect(() => {
        fetch("http://localhost:8086/api/prn/get").then(res => res.json()).then(data=>setPRN(data));
    },[])

    //for batch
    useEffect(() => {
        fetch("http://localhost:8084/api/Batch/ListAll").then(res => res.json()).then(data=>setBatch(data))
    },[])

    //for student 
    useEffect(() => {
        fetch("http://localhost:8084/api/students/allStudents").then(res => res.json()).then(data=>setstudent(data));
    },[])


    return (
        <div>
            <form>

                <label>Company_Id:
                    <select name="Company_Id" value={formData.Company_Id} onChange={handleonChange}>
                        <option value="">Select a company</option>
                        {comp.map((company) => (
                            <option key={company.id} value={company.id}>
                                {company.name}
                            </option>
                        ))}
                    </select>
                </label>
                <br />

                <label>Vacancy:
                    <input type="text" name="Vacancy" value={formData.Vacancy} onChange={handleonChange} />
                </label>
                <br />

                <label>Location:
                    <input type="text" name="Location" value={formData.Location} onChange={handleonoChange} />
                </label>
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>

    )
}