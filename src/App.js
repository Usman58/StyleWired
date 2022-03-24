import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import { Container } from "react-bootstrap";
import Header from "./Layout/Header";
import FirstNewProfileScreen from "./Screens/FirstNewProfileScreen";
import BottomsScreen from "./Screens/BottomsScreen";
import LetsTalk from "./Screens/LetsTalkAboutU";
import FirstSizeScreen from "./Screens/FirstSizeScreen";
import SecondSizeScreen from "./Screens/SecondSizeScreen";
import SecondNewProfileScreen from "./Screens/SecondNewProfileScreen";
import BodyTS from "./Screens/BodyTS";
import TopsScreen from "./Screens/TopsScreen";
import CharacteristicScreen from "./Screens/CharacteristicScreen";
import HeelHeightScreen from "./Screens/HeelHeightScreen";
import SFTypeScreen from "./Screens/SFTypeScreen";
import OutFitFreeTime from "./Screens/OutFitFreeTime";
import OutFitWork from "./Screens/OutFitWork";
import StylistScreen from "./Screens/StylistScreen";
import ColorsScreen from "./Screens/ColorsScreen";
import ThirdSizeScreen from "./Screens/ThirdSizeScreen";
import FourthSizeScreen from "./Screens/FourthSizeScreen";
import MenBottomsFit from "./Screens/MenBottomsFit";
import MenTopsFit from "./Screens/MenTopsFit";
import ComfortableShoesScreen from "./Screens/ComfortableShoesScreen";
import AnythingWear from "./Screens/AnythingWear";
import RemarksScreen from "./Screens/RemarksScreen";
import UploadImagesScreen from "./Screens/UploadImagesScreen";
import SignupScreen from "./Screens/SignupScreen";
import CompleteStyleProfile from "./Screens/CompleteStyleProfile";
import DashboardScreen from "./Screens/DashboardScreen";
import FCreateOrderScreen from "./Screens/FirstCreateOrderScreen";
import SecondCreateOrderScreen from "./Screens/SecondCreateOrderScreen";
import ThirdCreateOrderScreen from "./Screens/ThirdCreateOrderScreen";
import FourthCreateOrderScreen from "./Screens/FourthCreateOrderScreen";
import FifthCreateOrderScreen from "./Screens/FifthCreateOrderScreen";
import CheckoutScreen from "./Screens/CheckoutScreen";
import SecondCheckoutScreen from "./Screens/SecondCheckoutScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import DropDown from "./Components/DropDown";
import SecondDashboard from "./Screens/SecondDashboard";
import ThirdDashboard from "./Screens/ThirdDashboard";
import OrderDetailsScreen from "./Screens/OrderDetailsScreen";
import StarterProfileView from "./Screens/StarterProfileView";
import theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import ImagesPricesScreen from "./Screens/ImagesPricesScreen";
import StarterHome from "./Screens/StarterHome";
import StarterSignUp from "./Screens/StarterSignUp";
import StarterLogin from "./Screens/StarterLogin";
import StarterAbout from "./Screens/StarterAbout";
import StarterWorks from "./Screens/StarterWorks";
import MenBusyWorkScreen from "./Screens/MenBusyWorkScreen";
import MenFreeTimeScreen from "./Screens/MenFreeTimeScreen";
import MenCharacteristicsScreen from "./Screens/MenCharacteristicsScreen";
import MyProfileScreen from "./Screens/MyProfileScreen";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <main>
            <Container>
              <Routes>
                <Route path="" element={<HomeScreen />} exact />
                <Route
                  path="/createnewstyleprofile"
                  element={<FirstNewProfileScreen />}
                />
                 <Route
                  path="/myprofile"
                  element={<MyProfileScreen />}
                />
                <Route path="/usualsize" element={<FirstSizeScreen />} />
                <Route path="/extrasize" element={<SecondSizeScreen />} />
                <Route
                  exact
                  path="/selectperson/woman"
                  element={<LetsTalk />}
                />
                 <Route
                  exact
                  path="/selectperson/girl"
                  element={<LetsTalk />}
                />
                <Route
                  exact
                  path="/selectperson/man"
                  element={<ThirdSizeScreen />}
                />
                 <Route
                  exact
                  path="/selectperson/boy"
                  element={<ThirdSizeScreen />}
                />
                <Route
                  exact
                  path="/menbusywork"
                  element={<MenBusyWorkScreen />}
                />
                 <Route
                  exact
                  path="/menfreetime"
                  element={<MenFreeTimeScreen />}
                />
                <Route path="/whatspick" element={<SecondNewProfileScreen />} />
                <Route path="/whatsfemine" element={<BodyTS />} />
                <Route path="/topstyle" element={<TopsScreen />} />
                <Route path="/drop" element={<DropDown />} />
                <Route path="/bottomstyle" element={<BottomsScreen />} />
                <Route
                  path="/letstalkshoes"
                  element={<CharacteristicScreen />}
                />
                <Route path="/subduded" element={<HeelHeightScreen />} />
                <Route path="/preferredshowstyle" element={<SFTypeScreen />} />
                <Route path="/hangingfreetime" element={<OutFitFreeTime />} />
                <Route path="/worktime" element={<OutFitWork />} />
                <Route path="/anyfashion" element={<StylistScreen />} />
                <Route path="/colors" element={<ColorsScreen />} />
                <Route path="/whatsizesusually" element={<ThirdSizeScreen />} />
                <Route
                  path="/extratailoredlook"
                  element={<FourthSizeScreen />}
                />
                <Route path="/mentopsfit" element={<MenTopsFit />} />
                <Route path="/bottomsuit" element={<MenBottomsFit />} />
                <Route path="/feetinto" element={<MenCharacteristicsScreen />} />
                <Route
                  path="/usualpreference"
                  element={<ComfortableShoesScreen />}
                />
                <Route path="/Anyno-nosforclothes" element={<AnythingWear />} />
                <Route
                  path="/finalfashioninsight"
                  element={<RemarksScreen />}
                />
                <Route path="/gotpictures" element={<UploadImagesScreen />} />
                <Route path="/signuppage" element={<SignupScreen />} />
                <Route path="/setthanks" element={<CompleteStyleProfile />} />
                <Route
                  path="/customerdashboard"
                  element={<DashboardScreen />}
                />
                <Route path="/fcreateorder" element={<FCreateOrderScreen />} />
                <Route
                  path="/screateorder"
                  element={<SecondCreateOrderScreen />}
                />
                <Route
                  path="/tcreateorder"
                  element={<ThirdCreateOrderScreen />}
                />
                <Route
                  path="/focreateorder"
                  element={<FourthCreateOrderScreen />}
                />
                <Route
                  path="/ficreateorder"
                  element={<FifthCreateOrderScreen />}
                />
                <Route
                  path="/ficreateorder"
                  element={<FifthCreateOrderScreen />}
                />
                <Route path="/checkout" element={<CheckoutScreen />} />
                <Route
                  path="/selectdateandtime"
                  element={<SecondCheckoutScreen />}
                />
                <Route path="/payment" element={<PaymentScreen />} />
                <Route path="/stylistflow" element={<SecondDashboard />} />
                <Route path="/orderaccepted" element={<ThirdDashboard />} />
                <Route
                  path="/viewstyleprofiles"
                  element={<OrderDetailsScreen />}
                />
                <Route
                  path="/vieweachstyleprofiles"
                  element={<StarterProfileView />}
                />
                <Route path="/addsuggestion" element={<ImagesPricesScreen />} />
                <Route path="/starterhome" element={<StarterHome />} />
                <Route path="/starterignup" element={<StarterSignUp />} />
                <Route path="/starterlogin" element={<StarterLogin />} />
                <Route path="/starterabout" element={<StarterAbout />} />
                <Route path="/starterWorks" element={<StarterWorks />} />
                {/*
          https://cranky-lalande-cd72eb.netlify.app/
          customerdashboard
          fcreateorder
          checkout
          stylistflow
          orderaccepted
          viewstyleprofiles
          vieweachstyleprofiles
          addsuggestion
          starterhome
          starterignup
          starterlogin
          starterabout
          starterWorks

          */}

                {/* <Header /> 
    <FiCreateOrderScreen />  
    <ThemeProvider theme={theme}>
       <StarterHeader />
      <Starter /> 
  
      
      
     <StarterProfileView 
      <StarterFooter />
    </ThemeProvider> */}
              </Routes>
            </Container>
          </main>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
