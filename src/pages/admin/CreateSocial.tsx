import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useCreateSocial } from "../../hooks/socials/useCreateSocial";
import { useSocials } from "../../hooks/socials/useSocials";

export const CreateSocial = () => {
    const { createSocial } = useCreateSocial();
    const { t } = useTranslation();
    const { social, fetchSocial } = useSocials();

    const [socials, setSocials] = useState<any>([
        {
            social_link: "",
            id: 1,
        },
        {
            social_link: "",
            id: 2,
        },
    ]);

    useEffect(() => {
        fetchSocial();
    }, []);

    useEffect(() => {
        if (social) {
            setSocials(social.map((item: any) => ({
                social_link: item.social_link || "",
                id: item.id,
            })));
        }
    }, [social]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const updatedSocials = socials.map((social: any) => {
            if (social.id === id) {
                return { ...social, social_link: e.target.value };
            }
            return social;
        });
        setSocials(updatedSocials);
    };

    const submit = () => {
        createSocial(socials);
        window.location.reload()
    };

    return (
        <>
            <Typography className="component-title">{t('admin.social')}</Typography>
            <Stack direction={'column'} width={'100%'} gap={'10px'}>
                <Typography>Facebook</Typography>
                <input
                    type="text"
                    placeholder="Facebook.com"
                    className="custom-input"
                    value={socials.find((social: any) => social.id === 1)?.social_link || ''}
                    onChange={(e) => handleInputChange(e, 1)}
                    width={'100%'}
                />
                <Typography>Instagram</Typography>
                <input
                    type="text"
                    placeholder="Instagram.com"
                    className="custom-input"
                    value={socials.find((social: any) => social.id === 2)?.social_link || ''}
                    onChange={(e) => handleInputChange(e, 2)}
                    width={'100%'}
                />
            </Stack>
            <button className="admin-button" onClick={submit}>
                {t('admin.save')}
            </button>
        </>
    );
}
