import { Box, Typography, Stack } from "@mui/material";
import { t } from "i18next";
import { useState, useEffect } from "react";
import { useUpdatePostcard } from "../../../hooks/postcards/useUpdatePostcard";

const CustomPostcard = ({setOpen }: any) => {
    const { updatePostcard } = useUpdatePostcard();
    const [postCardData, setPostCardData] = useState<any>({
        title: '',
        min_title: "",
        image: '',
    });
    const handlePostCard = () => {
        if (!postCardData.title || !postCardData.min_title) {
            setOpen(true);
        } else {
            try {
                console.log(postCardData)
                updatePostcard(postCardData);
                window.location.href = '/';
            } catch (err) {
                console.error(err);
            }
        }
    };
    useEffect(() => {
        if (postCardData) {
            setPostCardData({
                title: postCardData.title,
                min_title: postCardData.min_title,
                image: null,
            });
        }
    }, []);
    return (
        <>
            <Box>
                <Typography className="component-title">{t("admin.postcard")}</Typography>
                <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                    <input
                        type="text"
                        value={postCardData.title}
                        onChange={(e) =>
                            setPostCardData({ ...postCardData, title: e.target.value })
                        }
                        placeholder={t("admin.title")}
                        className="custom-input"
                    />
                    <input
                        type="text"
                        value={postCardData.min_title}
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
        </>
    )
}

export default CustomPostcard