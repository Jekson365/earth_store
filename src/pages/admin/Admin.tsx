import { Box, Stack, Typography } from "@mui/material";
import '../../styles/admin.scss';
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { CurrentUser } from "../../App";
import { useUpdateOpening } from "../../hooks/openings/useUpdateOpening";
import { useUpdatePostcard } from "../../hooks/postcards/useUpdatePostcard";
import { UpdatePrior } from "./components/UpdatePrior";
import { CreateProduct } from "./components/CreateProduct";
import { CreateCategory } from "./components/CreateCategory";
import { CreateAbout } from "./components/CreateAbout";
import { UpdateFeat } from "./components/UpdateFeat";
import ContactInfo from "./components/ContactInfo";
import { useOpening } from "../../hooks/openings/useOpening";
import { CreateCustomers } from "./components/CreateCustomers";
import { CustomError } from "../../components/CustomError";
import { CustomTheme } from "./components/CustomTheme";
import OpeningImages from "./components/update opening/OpeningImages";
import { useTranslation } from "react-i18next";
import { CreateSlider } from "./components/CreateSlider";
import { CreateSocial } from "./CreateSocial";
import { useLocation } from "react-router-dom";

const Admin = () => {
  const { currentUser } = useContext<any>(CurrentUser);
  const [user, setUser] = useState<any>({});
  const { updateOpening } = useUpdateOpening();
  const [open, setOpen] = useState(false);
  const location = useLocation()
  const { updatePostcard } = useUpdatePostcard();
  const { t } = useTranslation();
  
  const applyShopStyles = () => {
    document.documentElement.style.setProperty('--nav-item-color', 'black');
};

  useEffect(() => {
    if (!currentUser || Object.keys(currentUser).length === 0) {
      setUser(false);

    } else {
      setUser(currentUser);
    }
  }, [currentUser]);

  useLayoutEffect(() => {
    if (location.pathname === '/admin') {
      applyShopStyles()
    }
  }, [location.pathname])

  useEffect(() => {
    if (user) {
      if (user.role_id === 1) {
        window.location.href = '/';
      }
    }
  }, [user]);

  const [openingData, setOpeningData] = useState<any>({
    title: "",
    min_title: "",
    opening_images_attributes: [],
  });

  const { getOpenings, opening } = useOpening();
  const [postCardData, setPostCardData] = useState<any>({
    title: '',
    min_title: "",
    image: ''
  });

  const handlePostCard = () => {
    if (!postCardData.title || !postCardData.min_title) {
      setOpen(true);
    } else {
      try {
        updatePostcard(postCardData);
        window.location.href = '/';
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleOpeningImages = (event: any) => {
    const files = event.target.files;
    const imagesArray = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      imagesArray.push({ image: file });
    }

    setOpeningData({
      ...openingData,
      opening_images_attributes: imagesArray,
    });
  };

  useEffect(() => {
    getOpenings();
  }, []);

  useEffect(() => {
    if (opening) {
      setOpeningData({
        title: opening.title,
        min_title: opening.min_title,
        image: null,
      });
    }
  }, [opening]);

  return (
    <>
      <CustomError
        open={open}
        setOpen={setOpen}
        message={t("admin.no_file_chosen")}
        severity={'error'}
      />
      <Box mt={15}></Box>
      <div className="admin-cover">
        <Stack direction={'column'} alignItems={'flex-start'} gap={'40px'}>
          <Box>
            <Typography className="component-title">{t("admin.header")}</Typography>
            <form encType="multipart/form-data">
              <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                <input
                  type="text"
                  value={openingData.title}
                  onChange={(e: any) =>
                    setOpeningData({ ...openingData, title: e.target.value })
                  }
                  placeholder={t("admin.title")}
                  className="custom-input"
                />
                <input
                  type="text"
                  value={openingData.min_title}
                  onChange={(e: any) =>
                    setOpeningData({ ...openingData, min_title: e.target.value })
                  }
                  placeholder={t("admin.subtitle")}
                  className="custom-input"
                />
                <input
                  multiple
                  onChange={handleOpeningImages}
                  type="file"
                  className="custom-input"
                />
              </Stack>
            </form>
            <OpeningImages />
            <Box mt={2}>
              <button className="admin-button" onClick={() => updateOpening(openingData)}>
                {t("admin.save")}
              </button>
            </Box>
          </Box>
          <div className="line"></div>
          <UpdateFeat />
          <div className="line"></div>
          <Box>
            <Typography className="component-title">{t("admin.postcard")}</Typography>
            <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
              <input
                type="text"
                onChange={(e) =>
                  setPostCardData({ ...postCardData, title: e.target.value })
                }
                placeholder={t("admin.title")}
                className="custom-input"
              />
              <input
                type="text"
                onChange={(e) =>
                  setPostCardData({ ...postCardData, min_title: e.target.value })
                }
                placeholder={t("admin.subtitle")}
                className="custom-input"
              />
              <input
                type="file"
                onChange={(e: any) =>
                  setPostCardData({ ...postCardData, image: e.target.files[0] })
                }
                className="custom-input"
              />
            </Stack>
            <Box mt={2}>
              <button className="admin-button" onClick={handlePostCard}>
                {t("admin.save")}
              </button>
            </Box>
          </Box>
          <div className="line"></div>
          <CreateCustomers />
          <div className="line"></div>
          <UpdatePrior />
          <div className="line"></div>
          <CreateAbout />
          <div className="line"></div>
          <CreateCategory />
          <div className="line"></div>
          <CreateProduct />
          <div className="line"></div>
          <CreateSlider />
          <div className="line"></div>
          <ContactInfo />
          <div className="line"></div>
          <CreateSocial />
          <div className="line"></div>
          <CustomTheme />
        </Stack>
      </div>
    </>
  );
};

export default Admin;
