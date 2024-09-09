import { useUpdateOpening } from '../../../hooks/openings/useUpdateOpening';
import { useOpening } from '../../../hooks/openings/useOpening';
import { Box, Typography, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import OpeningImages from './update opening/OpeningImages';


const OpeningData = () => {
  const { t } = useTranslation()
  const { updateOpening } = useUpdateOpening();
  const [openingData, setOpeningData] = useState<any>({
    title: "",
    min_title: "",
    min_title_ka: '',
    title_ka: "",
    opening_images_attributes: [],
  });
  const { getOpenings, opening } = useOpening();
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
    if (opening) {
      setOpeningData({
        title: opening.title,
        min_title: opening.min_title,
        min_title_ka: opening.min_title_ka,
        title_ka: opening.title_ka,
        image: null,
      });
    }
  }, [opening]);

  useEffect(() => {
    getOpenings();
  }, []);


  return (
    <>
      <Box>
        <Typography className="component-title">{t("admin.header")}</Typography>
        <form encType="multipart/form-data">
          <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
            <input
              type="text"
              value={openingData.title_ka}
              onChange={(e: any) =>
                setOpeningData({ ...openingData, title_ka: e.target.value })
              }
              placeholder={t("admin.title")}
              className="custom-input"
            />
            <input
              type="text"
              value={openingData.min_title_ka}
              onChange={(e: any) =>
                setOpeningData({ ...openingData, min_title_ka: e.target.value })
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
    </>

  )
}

export default OpeningData