import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import RegisterSeller from "./pages/Register/RegisterSeller";
import VoiceProfile from "./pages/VoiceProfile/VoiceProfile";
import BankAccount from "./pages/BankAccount/BankAccount";
import RegisterBuyer from "./pages/Register/RegisterBuyer";
import Voices from "./pages/Voices/Voices";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Layout from "./pages/Layout/Layout";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import ListVoice from "./pages/ListVoice/ListVoice";
import VoiceDetail from "./pages/VoiceDetail/VoiceDetail";
import PersistLogin from "./components/PersistLogin/PersistLogin";
import Posts from "./pages/Posts/Posts";
import ProjectUpload from "./pages/ProjectUpload/ProjectUpload";
import PostedProjectsManagement from "./pages/PostedProjectsManagement/PostedProjectsManagement";
import SendProject from "./pages/SendProject/SendProject";
import ProjectDescriptionToApply from "./pages/ProjectDescriptionForSeller/ProjectDescriptionToApply";
import Recruitment from "./pages/Recruitment/Recruitment";
import ProjectDescriptionConfirm from "./pages/ProjectDescriptionForSeller/ProjectDescriptionConfirm";
import AcceptApplication from "./pages/AcceptApplication/AcceptApplication";
import ProjectDetailForSeller from "./pages/ProjectDetailForSeller/ProjectDetailForSeller";
import UploadFileToProjectDetail from "./pages/UploadFileToProjectDetail/UploadFileToProjectDetail";
import ProjectDetailForBuyer from "./pages/ProjectDetailForBuyer/ProjectDetailForBuyer";
import ProjectApprovalAtDetail from "./pages/ProjectApprovalAtDetail/ProjectApprovalAtDetail";
import SentProjectsManagement from "./pages/SentProjectsManagement/SentProjectsManagement";
import SellerProfile from "./pages/SellerProfile/SellerProfile";
import TrackingProjectForSeller from "./pages/TrackingProjectForSeller/TrackingProjectForSeller";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/bank" element={<BankAccount />} />
        <Route path="/register" element={<RegisterSeller />} />
        <Route path="/register2" element={<RegisterBuyer />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/lv" element={<ListVoice />} />
        <Route path="/voicedetail/:id" element={<VoiceDetail />} />

        <Route
          path="/postedprojectsmanagement"
          element={<PostedProjectsManagement />}
        />
        <Route
          path="/sentprojectsmanagement"
          element={<SentProjectsManagement />}
        />
        <Route
          path="/projectmanagementdetail/:id"
          element={<ProjectApprovalAtDetail />}
        />

        <Route element={<RequireAuth allowedRoles={["buyer", "seller"]} />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["buyer"]} />}>
          <Route path="/voices" element={<Voices />} />
          <Route path="/upload" element={<ProjectUpload />} />
          <Route path="/sp/:id" element={<SendProject />} />
          <Route path="/aa" element={<AcceptApplication />} />
          <Route path="/pdfb" element={<ProjectDetailForBuyer />} />

        </Route>
        <Route element={<RequireAuth allowedRoles={["seller"]} />}>
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile" element={<VoiceProfile />} />
          <Route path="/pt1/:id" element={<ProjectDescriptionToApply />} />
          <Route path="/recruitment/:id" element={<Recruitment />} />
          <Route path="/uftpd" element={<UploadFileToProjectDetail />} />
          <Route path="/pdfs" element={<ProjectDetailForSeller />} />
          <Route path="/pt2" element={<ProjectDescriptionConfirm />} />
          <Route path="/profile" element={<SellerProfile />} />
          <Route path="/tpfs" element={<TrackingProjectForSeller />} />

        </Route>
      </Route>
    </Routes>
  );
};

export default App;
