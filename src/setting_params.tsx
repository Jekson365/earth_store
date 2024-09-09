import { CreateSocial } from "./pages/admin/CreateSocial";
import ContactInfo from "./pages/admin/components/ContactInfo";
import { CreateAbout } from "./pages/admin/components/CreateAbout";
import { CreateCategory } from "./pages/admin/components/CreateCategory";
import { CreateCustomers } from "./pages/admin/components/CreateCustomers";
import { CreateProduct } from "./pages/admin/components/CreateProduct";
import { CreateSlider } from "./pages/admin/components/CreateSlider";
import CustomPostcard from "./pages/admin/components/CustomPostcard";
import { CustomTheme } from "./pages/admin/components/CustomTheme";
import OpeningData from "./pages/admin/components/OpeningData";
import Settings from "./pages/admin/components/Settings";
import { UpdateFeat } from "./pages/admin/components/UpdateFeat";
import { UpdatePrior } from "./pages/admin/components/UpdatePrior";

export const sections : any = [
    {
      id: 8,
      name: "პროდუქტები",
      data: <CreateProduct/>
    },
    {
      id: 7,
      name: "კატეგორიები",
      data: <CreateCategory/>
    },
    {
      id: 1,
      name: "ჰედერი",
      data: <OpeningData/>
    },
    {
      id: 2,
      name: "გამორჩეული",
      data: <UpdateFeat/>
    },
    {
      id: 3,
      name: "ღია ბარათი",
      data: <CustomPostcard/>
    },
    {
      id: 4,
      name: "მომხმარებელი",
      data: <CreateCustomers/>
    },
    {
      id: 5,
      name: "პრიორიტეტბი",
      data: <UpdatePrior/>
    },
    {
      id: 6,
      name: "ბლოგი",
      data: <CreateAbout/>
    },
    {
      id: 9,
      name: "სლიადერი",
      data: <CreateSlider/>
    },
    {
      id: 10,
      name: "კონტაქტი",
      data: <ContactInfo/>
    },
    {
      id: 11,
      name: "სოციალური",
      data: <CreateSocial/>
    },
    {
      id: 12,
      name: "თემები",
      data: <CustomTheme/>
    },
    {
      id:13,
      name:"პარამეტრები",
      data: <Settings/>
    }
  ]