import { useState, useEffect } from "react";
export default function Company() {

    const [comp, setCompany] = useState({
        Company_Name: '',
        Logo: '',
        Location: '',
        Total_Placement: ''
    });

   

    const handleOnChange = (event) => {
        setCompany((prev) => ({ ...prev, [event.target.name]: event.target.value }));
        console.log(comp);
    }

    //add a new company
    const handleSubmit = (event) => {

        event.preventDefault();

        console.log(JSON.stringify(comp));

        fetch("https://localhost:7020/api/Company", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comp)
        })
            .then((data) => {
                console.log(data);
                alert("Inserted");
                // navigate('/home');
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });

    }


    return (
        <div>
            
            <form onSubmit={handleSubmit}>

                <label>
                    Company_Name:
                    <input type="text" name="company_Name" onChange={handleOnChange} />
                </label>
                <br />

                <label>
                    Logo:
                    <input type="text" name="logo" onChange={handleOnChange} />
                </label>
                <br />

                <label>
                    Location:
                    <input type="text" name="location" onChange={handleOnChange} />
                </label>
                <br />

                <label>
                    Total_Placement:
                    <input type="text" name="total_Placement" onChange={handleOnChange} />
                </label>
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}