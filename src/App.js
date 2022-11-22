import './App.css';
import Student from './Student';
import Sidebar from './Sidebar';
import { Routes, Route } from "react-router-dom";
import CreateStudent from './CreateStudent';
import EditStudent from './EditStudent';
import EditList from './EditList';
import DeleteList from './DeleteList';
import DeleteStudent from './DeleteStudent';
import Teacher from './Teacher';
import CreateTeacher from './CreateTeacher';
import EditListTeacher from './EditListTeacher';
import EditTeacher from './EditTeacher';
import DeleteListTeacher from './DeleteListTeacher';
import DeleteTeacher from './DeleteTeacher';
import Dashboard from './Dashboard';

function App() {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
         
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create-student" element={<CreateStudent />} />
                <Route path="/edit-student" element={<EditList />} />
                <Route path="/edit-student/:id" element={<EditStudent />} />
                <Route path="/list-students" element={<Student />} />
                <Route path="/delete-student" element={<DeleteList />} />
                <Route path="/delete-student/:id" element={<DeleteStudent />} />
                <Route path="/teachers" element={<Teacher />} />
                <Route path="/create-teacher" element={<CreateTeacher />} />
                <Route path="/edit-teacher" element={<EditListTeacher />} />
                <Route path="/edit-teacher/:id" element={<EditTeacher />} />
                <Route path="/delete-teacher" element={<DeleteListTeacher />} />
                <Route path="/delete-teacher/:id" element={<DeleteTeacher />} />
              </Routes>
            </div>
                </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
         </div>
  );
}

export default App;
