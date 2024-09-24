
import { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "./Receipt.css";
import { useParams } from 'react-router-dom';

function Receipt(props) {

    const {studentId,transaction_Id, date, amount, batch_Id,paymentTypeId } = props.payment;
    //alert(studentId);
  
    //const{studentid}=useParams();
    alert(studentId);
    const[student,setStudent]=useState({});
    const[payment,setPayment]=useState([]);
    

    const [loader, setLoader] = useState(false);

    useEffect(() => {
        fetch(`https://localhost:7020/api/Student/${studentId}`)
            .then(res => res.json())
            .then(data => {
                // Assuming 'name' is the property containing the student's name
                setStudent(data.value);
                console.log(data);
            });
    }, [studentId]);
    


    useEffect(()=>{
        fetch(`https://localhost:7020/api/Paymentinfo/${paymentTypeId}`)
        .then(res=>res.json())
        .then((data)=>{setPayment(data);console.log(data)})
    },[]);

    const downloadPDF = () => {
        const capture = document.querySelector('.actual-receipt');
        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoader(false);
            doc.save('receipt.pdf');
        })
    }

    return (
        <div className="wrapper">

            <div className="receipt-box">

                {/* actual receipt */}
                <div className="actual-receipt">

                    {/* organization logo */}
                    {/* <div className="receipt-organization-logo">
                        <img alt="logo" src={logo} />
                    </div> */}

                    {/* organization name */}
                    <h5>COMPUTERSEEKHO</h5>

                    {/* street address and unit number */}
                    <h6>
                        VidyNidhi Marg
                        {' '}
                        123456
                    </h6>

                    {/* city province postal code */}
                    <h6>
                        PAYMENT
                        {' '}
                        RECEIPT
                        {' '}
                    </h6>

                    {/* email-phone-and-website */}
                    <div className="phone-and-website">
                        <p>
                            <a href={`computerseekho@gamil.com`}>
                                computerseekho@gamil.com
                            </a>
                        </p>
                        <p>Best wish for your future</p>

                                

                    </div>

                    <div className="colored-row first">
                        <span>student_Id</span>
                        <span>student_name</span>
                    </div>

                    <div className="data-row">
                        <span className="font-weight">{studentId}</span>
                        <span>{student.student_name}</span>
                    </div>

                    <div className="colored-row">
                        <span>transaction_Id</span>
                        <span>Date</span>
                    </div>

                    <div className="data-row">
                        <span className="font-weight">{transaction_Id}</span>
                        <span>{date}</span>
                    </div>




                    <div className="colored-row">
                        <span>Transaction Details</span>
                        <span />
                    </div>

                    <div className="data-row border-bottom">
                        <span>
                            <span className="font-weight">
                                Amount
                                :
                            </span>
                            {' '}
                            {amount}
                        </span>
                        
                    </div>

                    <div className="data-row border-bottom">
                        <span>
                            <span className="font-weight">
                                batch_Id:
                                {' '}
                            </span>
                            {' '}
                            {batch_Id}
                        </span>
                        {/* <span>
                <span className="font-weight">
                  Created:
                </span>
                {' '}
                2023-02-14 02:21:37
              </span> */}
                    </div>
                    <div className="data-row border-bottom">
                        <span>
                            <span className="font-weight">
                                Payment Type:
                                {' '}
                            </span>
                            {' '}
                            {payment.payment_method_Description}
                        </span>
                        
                    </div>
                    <div className="data-row border-bottom">
                        <span>
                            <span className="font-weight">
                                batch_name:
                                {' '}
                            </span>
                            {' '}
                            BitExplorer
                        </span>
                        <span />
                    </div>
                    <div className="colored-row">
                        <span className="centered-text">Thank You For taking Admission</span>
                        <span />
                    </div>


                </div>
                {/* end of actual receipt */}

                {/* receipt action */}
                <div className="receipt-actions-div">
                    <div className="actions-right">
                        <button
                            className="receipt-modal-download-button"
                            onClick={downloadPDF}
                            disabled={!(loader === false)}
                        >
                            {loader ? (
                                <span>Downloading</span>
                            ) : (
                                <span>Download</span>
                            )}

                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Receipt;
