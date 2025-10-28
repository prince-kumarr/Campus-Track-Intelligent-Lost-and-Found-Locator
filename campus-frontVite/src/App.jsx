import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginComponent/LoginPage";
import AdminMenu from "./Components/LoginComponent/AdminMenu";
import StudentMenu from "./Components/LoginComponent/StudentMenu";
import SigninPage from "./Components/LoginComponent/SignupPage";
import SingleStudentDetails from "./Components/LoginComponent/SingleStudentDetails";
import LostItemSubmit from "./Components/ItemComponent/LostItemSubmit";
import LostItemReport from "./Components/ItemComponent/LostItemReport";
import FoundItemSubmission from "./Components/ItemComponent/FoundItemSubmission";
import FoundItemReport from "./Components/ItemComponent/FoundItemReport";
import Personal from "./Components/LoginComponent/Personal";

import DeleteStudentList from "./Components/LoginComponent/DeleteStudentList";
import LostItemTrack from "./Components/ItemComponent/LostItemTrack";
import FoundItemTrack from "./Components/ItemComponent/FoundItemTrack"; // Import the new component
import MarkAsFound from "./Components/ItemComponent/MarkAsFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Authentication */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/Register" element={<SigninPage />} />

          {/* Admin and Student Menus */}
          <Route path="/AdminMenu" element={<AdminMenu />} />
          <Route path="/StudentMenu" element={<StudentMenu />} />

          {/* Student Management */}
          <Route path="/SingleStudentDetail" element={<SingleStudentDetails />} />
        
          <Route path="/DeleteStudentList" element={<DeleteStudentList />} />

          {/* Lost Item Routes */}
          <Route path="/LostSubmit" element={<LostItemSubmit />} />
          <Route path="/LostReport" element={<LostItemReport />} />
          <Route path="/LostItemTrack" element={<LostItemTrack />} />

          {/* Found Item Routes */}
          <Route path="/FoundSubmit" element={<FoundItemSubmission />} />
          <Route path="/FoundReport" element={<FoundItemReport />} />
          <Route path="/FoundItemTrack" element={<FoundItemTrack />} /> {/* Add the new route here */}

          {/* Mark as Found Route */}
          <Route path="/mark-found/:id" element={<MarkAsFound />} />

          {/* Personal Info */}
          <Route path="/Personal" element={<Personal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;