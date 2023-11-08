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
import ProjectDescriptionToConfirm from "./pages/ProjectDescriptionForSeller/ProjectDescriptionToConfirm";
import AcceptApplication from "./pages/AcceptApplication/AcceptApplication";
import ProjectDetailForSeller from "./pages/ProjectDetailForSeller/ProjectDetailForSeller";
import UploadFileToProjectDetail from "./pages/UploadFileToProjectDetail/UploadFileToProjectDetail";
import ProjectDetailForBuyer from "./pages/ProjectDetailForBuyer/ProjectDetailForBuyer";
import ProjectApprovalAtDetail from "./pages/ProjectApprovalAtDetail/ProjectApprovalAtDetail";
import SentProjectsManagement from "./pages/SentProjectsManagement/SentProjectsManagement";
import SellerProfile from "./pages/SellerProfile/SellerProfile";
import TrackingProjectForSeller from "./pages/TrackingProjectForSeller/TrackingProjectForSeller";
import TrackingProjectForBuyer from "./pages/TrackingProjectForBuyer/TrackingProjectForBuyer";
import ProjectDescriptionForManager from "./pages/ProjectDescriptionForManager/ProjectDescriptionForManager";
import ProjectDetailForManager from "./pages/ProjectDetailForManager/ProjectDetailForManager";
import Payment from "./pages/Payment/Payment";
import TextAnalysis from "./pages/TextAnalysis.js/TextAnalysis";
import AnalyzeSellerForBuyer from "./pages/AnalyzeSellerForBuyer/AnalyzeSellerForBuyer";
import AnalyzeSellerForBuyerDetail from "./pages/AnalyzeSellerForBuyerDetail/AnalyzeSellerForBuyerDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/" element={<Login />} /> {/* figma 1 */}
        <Route path="/register" element={<RegisterSeller />} /> {/* figma 2 */}
        <Route path="/register2" element={<RegisterBuyer />} /> {/* figma 3 */}
        {/* Buyer + Seller */}
        <Route element={<RequireAuth allowedRoles={["buyer", "seller"]} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/bank" element={<BankAccount />} /> {/* figma 4 */}
        </Route>
        {/* Manager */}
        <Route element={<RequireAuth allowedRoles={["manager"]} />}>
          <Route path="/lv" element={<ListVoice />} /> {/* figma 6 */}
          <Route path="/voicedetail/:id" element={<VoiceDetail />} />
          {/* figma 7 */}
          <Route
            path="/postedprojectsmanagement"
            element={<PostedProjectsManagement />}
          />
          {/* figma 12 & 13 & 25*/}
          <Route
            path="/sentprojectsmanagement"
            element={<SentProjectsManagement />}
          />
          {/* figma 12 & 13 & 25 */}
          <Route
            path="/projectmanagementdetail/:id"
            element={<ProjectApprovalAtDetail />}
          />
          {/* figma 14 */}
          <Route
            path="/projectdescriptionmanagement/:id"
            element={<ProjectDescriptionForManager />}
          />
          {/*figma 30 */}
          <Route path="/pdfm/:id" element={<ProjectDetailForManager />} />
          {/* figma 31 */}
        </Route>
        {/* Buyer */}
        <Route element={<RequireAuth allowedRoles={["buyer"]} />}>
          <Route path="/voices" element={<Voices />} /> {/* figma 9 */}
          <Route path="/upload" element={<ProjectUpload />} /> {/* figma 11 */}
          <Route path="/sp/:id" element={<SendProject />} /> {/* figma 16 */}
          <Route path="/candidatelist/:id" element={<AcceptApplication />} />
          {/* figma 20 */}
          <Route path="/officiallist/:id" element={<ProjectDetailForBuyer />} />
          {/* figma 23 */}
          <Route path="/tpfb" element={<TrackingProjectForBuyer />} />
          {/* figma 27 */}
          <Route path="/payment/:id" element={<Payment />} />
          {/* figma 29 */}
          <Route path="/analysis" element={<TextAnalysis />} />
          {/* figma 33 */}
          <Route path="/asfb/:id" element={<AnalyzeSellerForBuyer />} />
          {/* figma 34 */}
          <Route
            path="/asfbd/:id/:id2"
            element={<AnalyzeSellerForBuyerDetail />}
          />
          {/* figma 35 */}
        </Route>
        {/* Seller */}
        <Route element={<RequireAuth allowedRoles={["seller"]} />}>
          <Route path="/your-voice" element={<VoiceProfile />} />
          {/* figma 5 */}
          <Route path="/posts" element={<Posts />} /> {/* figma 15 */}
          <Route path="/pt2/:id" element={<ProjectDescriptionToConfirm />} />
          {/* figma 17 */}
          <Route path="/pt1/:id" element={<ProjectDescriptionToApply />} />
          {/* figma 18 */}
          <Route path="/recruitment/:id" element={<Recruitment />} />
          {/* figma 19 */}
          <Route path="/pdfs/:id" element={<ProjectDetailForSeller />} />
          {/* figma 21 */}
          <Route path="/uftpd/:id" element={<UploadFileToProjectDetail />} />
          {/* figma 22 */}
          <Route path="/profile" element={<SellerProfile />} />
          {/* figma 24 */}
          <Route path="/tpfs" element={<TrackingProjectForSeller />} />
          {/* figma 26 */}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
