import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Genre from "./pages/genre/genre.tsx";
import Genre2 from "./pages/genre2/genre2.tsx";
import StoryFlow from "./pages/StoryFlow/index";
import StoryFlow2 from "./pages/StoryFlow2/StoryFlow2.tsx";
import ThemePage from "./pages/ThemePage/ThemePage.tsx";
import MainHome from "./pages/MainHome/MainHome.tsx";
import CreateStory from "./pages/CreateStory/CreateStory.tsx";
import SelectChar from "./pages/SelectChar/SelectChar.tsx";
import ThemePageNext from "./pages/ThemePage/ThemePageNext.tsx";
import BasicInfo from "./pages/BasicInfo/BasicInfo.tsx";
import ChatDC from "./pages/ChatDC/ChatDC.tsx";
import ChatAC from "./pages/ChatAC/ChatAC.tsx";
import SelectLevel from "./pages/SelectLevel/SelectLevel.tsx";
import ConfirmLevel from "./pages/ConfirmLevel/ConfirmLevel.tsx";
import MakeBook from "./pages/Makebook/MakeBook.tsx";
import MakeBook2 from "./pages/Makebook2/MakeBook2.tsx";
import Login from "./pages/Login/Login.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";
import Tutorial from "./pages/Tutorial/Tutorial.tsx";
import DalkongTutorial from "./pages/CharacterTutorial/DalkongTutorial.tsx";
import AlkongTutorial from "./pages/CharacterTutorial/AlkongTutorial.tsx";
import Navbar from "./pages/Navbar/Navbar.tsx";
import Navbar2 from "./pages/Navbar/Navbar2.tsx";
import MyBasic from "./pages/MyPage/MyBasic.tsx";
import OtherBasic from "./pages/MyPage/OtherBasic.tsx";
import OtherPage from "./pages/MyPage/OtherPage.tsx";
import OtherPageBook from "./pages/MyPage/OtherPageBook.tsx";
import MyPage from "./pages/MyPage/MyPage.tsx";
import MyReadBook from "./pages/MyPage/MyReadBook.tsx";
import MyPageBook from "./pages/MyPage/MyPageBook.tsx";
import MyPageForest from "./pages/MyPage/MyPageForest.tsx";
import MyPagePlant from "./pages/MyPage/MyPagePlant.tsx";
import PopularBook from "./pages/Search/PopularBook.tsx";
import Store from "./pages/Store/Store.tsx";
import Service from "./pages/Servicepages/Service.tsx";
import InquiryForm from "./pages/Servicepages/InquiryForm.tsx";
import InquiryHistory from "./pages/Servicepages/InquiryHistory.tsx";
import Search from "./pages/Search/Search.tsx";
import ACRoading from "./pages/Roading/ACRoading";
import DCRoading from "./pages/Roading/DCRoading";
import BookModal from "./pages/Search/BookModal.tsx";
import LastPage from "./pages/LastPage/LastPage.tsx";
import LastPage2 from "./pages/LastPage/LastPage2.tsx";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Genre />} />
        <Route path="/Genre2" element={<Genre2 />} />
        <Route path="/StoryFlow" element={<StoryFlow />} />
        <Route path="/StoryFlow2" element={<StoryFlow2 />} />
        <Route path="/ThemePage" element={<ThemePage />} />
        <Route path="/MainHome" element={<MainHome />} />
        <Route path="/CreateStory" element={<CreateStory />} />
        <Route path="/SelectChar" element={<SelectChar />} />
        <Route path="/ThemePageNext" element={<ThemePageNext />} />
        <Route path="/BasicInfo" element={<BasicInfo />} />
        <Route path="/ChatDC" element={<ChatDC />} />
        <Route path="/ChatAC" element={<ChatAC />} />
        <Route path="/SelectLevel" element={<SelectLevel />} />
        <Route path="/ConfirmLevel" element={<ConfirmLevel />} />
        <Route path="/Makebook" element={<MakeBook />} />
        <Route path="/Makebook2" element={<MakeBook2 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Tutorial" element={<Tutorial />} />
        <Route path="/AlkongTutorial" element={<AlkongTutorial />} />
        <Route path="/DalkongTutorial" element={<DalkongTutorial />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Navbar2" element={<Navbar2 />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MyBasic" element={<MyBasic />} />
        <Route path="/OTherBasic" element={<OtherBasic />} />
        <Route path="/OtherPage" element={<OtherPage />} />
        <Route path="/OtherPageBook" element={<OtherPageBook />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/MyPageBook" element={<MyPageBook />} />
        <Route path="/MyReadBook" element={<MyReadBook />} />
        <Route path="/MyPageForest" element={<MyPageForest />} />
        <Route path="/MyPagePlant" element={<MyPagePlant />} />
        <Route path="/PopularBook" element={<PopularBook />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/InquiryForm" element={<InquiryForm />} />
        <Route path="/InquiryHistory" element={<InquiryHistory />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/ACRoading" element={<ACRoading />} />
        <Route path="/DCRoading" element={<DCRoading />} />
        <Route path="/BookModal" element={<BookModal />} />
        <Route path="/LastPage" element={<LastPage />} />
        <Route path="/LastPage2" element={<LastPage2 />} />
      </Routes>
    </Router>
  );
};

export default App;
