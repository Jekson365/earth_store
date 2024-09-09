import { Box, Stack } from "@mui/material";
import '../../styles/admin.scss';
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { CurrentUser } from "../../App";
import { CustomError } from "../../components/CustomError";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import { sections } from "../../setting_params";

const Admin = () => {
  const { currentUser } = useContext<any>(CurrentUser);
  const [user, setUser] = useState<any>({});
  const [open, setOpen] = useState(false);
  const location = useLocation()
  const [currentTab,setCurrentTab] = useState<Number>(13)
 
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
        <div className="slider-cover">
          <Swiper
            scrollbar={{
              hide: true,
            }}
            breakpoints={{
              1000: {
                slidesPerView:8,
                spaceBetween:20
              },
              0: {
                slidesPerView:3,
                spaceBetween:0
              }
            }}
            modules={[Scrollbar]}
            className="mySwiper"
          >
            {sections && sections.map((e: any) => {
              return (
                <>
                  <SwiperSlide>
                    <div className="inner-tab-box"
                      onClick={()=>setCurrentTab(e.id)}
                    >
                      <p>{e.name}</p>
                    </div>
                  </SwiperSlide>
                </>
              )
            })}
          </Swiper>
        </div>
        <Stack direction={'column'} alignItems={'flex-start'} gap={'40px'}
          minHeight={'100vh'}
        >
          {sections.find((item : any)=> item.id === currentTab).data}
        </Stack>
      </div>
    </>
  );
};

export default Admin;
