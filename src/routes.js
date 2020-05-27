import React from "react";
// import ListYourCar from "./components/Add-car/ListYourCar";
// import ListYourBook from "./components/List-your-book/ListYourBook";
// import ListMyBook from "./components/List-my-book/ListMyBook";
// import Home from "./components/Home/Home";
// import Reset from "./components/Authentication/Forgot/Reset";
import DashBoard from "./components/DashBoard";
// import ViewAllCar from "./components/View-all-car/ViewAllCar";
// import RentalCar from "./components/Rental-car/RentalCar";
// import CarDetail from "./components/Car/CarDetail";
// import Account from "./components/Profile/Account";
import ErrorPage from "./components/Error/404";
import ChartCom from "./components/chart/chart";
// import MyCar from "./components/My-car/MyCar";
// import MyDrive from "./components/My-car/MyDrive";
// import HowJuzWork from "./components/How-juz-work/HowJuzWork";
// import Booking from "./components/Booking/Booking";
// import ListMyCar from "./components/List-my-car/ListMyCar";
// import ApproveTransaction from "./components/List-your-book/ApproveTransaction"
// import BookingInfo from "./components/List-my-book/BookingInfo";
// import Support from "./components/Support/Support";
// import TrustAndSafety from "./components/Trust-And-Safety/TrustAndSafety";
// import ViewYearlyCar from "./components/View-yearly-car/ViewYearlyCar";
// import SearchDriver from "./components/Search-driver/SearchDriver";
// import ListDriver from "./components/List-driver/ListDriver";
// import ApplyDriver from "./components/List-driver/ApplyDriver";
// import DriverDetail from "./components/Driver/DriverDetail";
// import FAQs from "./components/FAQs/Faqs";
// import Supercars from "./components/Supercar/Supercars";
// import SupercarDetail from "./components/Supercar/SupercarDetail";
const routes = [
  {
    path: "/",
    exact: true,
    main: DashBoard
  },{
    path: "/error",
    exact: true,
    main: ErrorPage
  },
  {
    path: "/chart",
    export: true,
    main: ChartCom
  }

];

export default routes;
