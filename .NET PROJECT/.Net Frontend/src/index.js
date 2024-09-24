import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListCourses from './ListCourses';
import Coursedel from './courseDel';
import CreateCourse from './CreateCourse';
import EnquiryForm from './Enquiry';
import ShowStaff from './Staff';
import Login from './login';
import PgdacPage from './PgdacPage';
import PgdbdaPage from './PgdbdaPage';
import PreCat from './PreCat';
import MscitPage from './MscitPage';


import ListFollowUp from './ListFollowUp';
import FolowUpAction from './FollowUpAction';
import Logout from './Logout';
import GetInTouch from './ContactUs';
import Home from './Home';
import UpdateStaff from './UpdateStaff';
import UpdateCourse from './UpdateCourse';
import ListCompany from './ListCompany';
import ListAllStudents from './ListAllStudents'
import AddStudent from "./AddStudents"
import StudentUp from "./StudentUp"
import Delstudent from "./delete_student"
import AddCompany from "./Addcompany"
import Deletecompany from "./DeleteCompany"
import Feespendingstudent from "./feespendingstudent"
import StudentFindById from "./Studentfindbyid"
import Studentfindbyname from "./Studentfindbyname"
import PRNIDGenerator from './PRNGenerator';
import ShowCompany from './ShowCompany';
import OurRecruitersPage from './OurRecruitersPage';
import PlacementData from './PlacementData';
import ShowPlacement from './ShowPlacement';
import ShowBatchWisePlacement from './ShowBatchWisePlacement';
import Company from './Company';
import CreatePlacementRecord from './CreatePlacementRecord'
import MyNavbar from './MyNavBar';
import Dashboard from './StaffDashboard';
import CampusLife from './CampusLife';
import AdminDashboard from './AdminDashboard';
import AddStaff from './AddStaff';
import CompanyTab from './CompanyTab';
import StaffTab from './StaffTab';
import Listpayment from './Listpayment';
import Paymentup from './paymentup';
import StudentTab from './StudentTab';
import PlacementTab from './PlacementTab';
import Footer from './Footer';
import FacultyPage from './FacultyPage';
import VerticalScrollingNotifications from './VerticalScrollingNotifications'
import Student from './student'
import BatchTab from './BatchTab';
import Receipt from './receipt';
import Maintain from './Maintain';
import NotificationTab from './NotificationTab';
import NotificationForm from './AddNotification';
import NotificationList from './ShowNotification';
import UpdateNotificationForm from './UpdateNotification';
import ListAllFUP from './ListAllFollowup';
import Studentfindbyphoneno from './Studentfindbyphoneno';
import Addpayment from './Addpayment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MyNavbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="ListCourses" element={<ListCourses />} />
      <Route path="delete/:id" element={<Coursedel />} />
      <Route path="create" element={<CreateCourse />} />
      <Route path="enquiry/:name/:staffId" element={<EnquiryForm />} />
      <Route path="Staff" element={<StaffTab />} />
      <Route path="AddStaff" element={<AddStaff />} />
      <Route path="Maintain" element={<Maintain />} />

      <Route path="OurRecruitersPage" element={<OurRecruitersPage />} />
      <Route path="Student" element={<Student />} />
      <Route path="ListFollowUp" element={<ListFollowUp />} />
      <Route path="/Action/:id/:name" element={<FolowUpAction />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/logout" element={<Logout />} />
      <Route path='/ContactUs' element={<GetInTouch />} />
      <Route path='/UpdateStaff/:id' element={<UpdateStaff />} />
      <Route path='/UpdateCourse/:id' element={<UpdateCourse />} />
      <Route path="ListAllStudents" element={<ListAllStudents />} />

      <Route path="addStudent" element={<AddStudent />} />
      <Route path="studentup/:id" element={<StudentUp />} />
      <Route path="delstud/:id" element={<Delstudent />} />
      <Route path="CompaniesDetails" element={<ListCompany />} />
      <Route path="CompanyTab" element={<CompanyTab />} />

      <Route path="NotificationTab" element={<NotificationTab />} />
      <Route path="/addnotification" element={<NotificationForm />}></Route>
      <Route path="/shownotification" element={<NotificationList />}></Route>
      <Route path="/UpdateNotification/:notificationId" element={<UpdateNotificationForm />}></Route>

      <Route path="addcompany" element={<AddCompany />} />
      <Route path="PlacementData" element={<PlacementData />} />
      <Route path="/AdminDashboard" element={<AdminDashboard />} />
      <Route path="ListAllFUP" element={<ListAllFUP />} />
      {/* <Route path="/AdminDashboard/:name" element={<AdminDashboard/>}></Route>
      <Route path="/admindashboard/:name" element={<AdminDashboard />} /> */}

<Route path="/AdminDashboard/:name" element={<AdminDashboard/>}></Route>
<Route path="/Dashboard/:name/:staffId" element={<Dashboard/>}></Route>

<Route path="findbyphoneno/:phoneno"  element={<Studentfindbyphoneno/>}/>
      <Route path="deletecompany/:id" element={<Deletecompany />} />
      <Route path="feespending" element={<Feespendingstudent />} />
      <Route path="findbyid/:id" element={<StudentFindById />} />
      <Route path="findbyname/:name" element={<Studentfindbyname />} />
      <Route path="student" element={<Student />} />
      <Route path="StudentTab" element={<StudentTab />} />
      <Route path="PlacementTab" element={<PlacementTab />} />
      <Route path="/PlacementData" element={<PlacementData />}></Route>
      <Route path="/ShowPlacement" element={<ShowPlacement />}></Route>

      <Route path="/PgdacPage" element={<PgdacPage />}></Route>
      <Route path="/PgdbdaPage" element={<PgdbdaPage />}></Route>
      <Route path="/PreCat" element={<PreCat />}></Route>
      <Route path="/MscitPage" element={<MscitPage />}></Route>






      <Route path="/prn" element={<PRNIDGenerator />}></Route>
      <Route path="/Company" element={<CompanyTab />}></Route>
      <Route path="/showcompany" element={<ShowCompany />}></Route>
      <Route path="/BatchTab" element={<BatchTab />}></Route>
      {/* <Route path="Receipt/:id" element={<Receipt />} /> */}

      <Route path="/pdata" element={<PlacementData />}></Route>
      <Route path="/createplacementrecord/:prn_Id" element={<CreatePlacementRecord />}></Route>
      <Route path="/placedbatch" element={<ShowPlacement />}></Route>
      <Route path="/ShowBatchWisePlacement/:batchId" element={<ShowBatchWisePlacement />}></Route>
      <Route path="/CampusLife" element={<CampusLife />}></Route>
      <Route path="/student" element={<Student />}></Route>

      {/* <Route path="ListPayment" element={<ListPayment />} />
      <Route path="Addpayment" element={<AddPayment />} /> */}

      <Route path="paymentup/:id" element={<Paymentup />} />

      <Route path="Addpayment/:studentid" element={<Addpayment/>}/>
      <Route path="Addpayment" element={<Addpayment/>}/>
      <Route path="Listpayment" element={<Listpayment/>}/>
     
      <Route path="paymentup/:id" element={<Paymentup/>}/>
      <Route path="receipt/:studentid/" element={<Receipt/>}/>



      <Route path="/PRNGenerator" element={<PRNIDGenerator/>}></Route>
      <Route path="/FacultyPage" element={<FacultyPage />}></Route>
      <Route path="/VerticalScrollingNotifications" element={<VerticalScrollingNotifications />}></Route>

      <Route path="/Footer" element={<Footer />}></Route>

    </Routes>
  </BrowserRouter>
);
reportWebVitals();
