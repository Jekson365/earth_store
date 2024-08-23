import { useEffect, useState } from 'react';
import { useUpdateContactInfo } from '../../../hooks/contact_infos/useUpdateContactInfo';
import { Box, Stack, Typography } from '@mui/material';
import { useContactInfo } from '../../../hooks/contact_infos/useContactInfo';

function ContactInfo() {
    const [contactInfoParams, setContactInfoParams] = useState({
        email: '', // Default to an empty string to avoid uncontrolled to controlled input warnings
        phone_number: '',
        location: '',
        id: null
    });
    const { updateContactInfo } = useUpdateContactInfo();
    const { contactInfos, fetchContactInfos } = useContactInfo();

    useEffect(() => {
        fetchContactInfos();
    }, []);

    // Update contactInfoParams when contactInfos are fetched
    useEffect(() => {
        if (contactInfos) {
            setContactInfoParams({
                email: contactInfos.email || '',
                phone_number: contactInfos.phone_number || '',
                location: '',
                id: contactInfos.id
            });
        }
    }, [contactInfos]);

    return (
        <>
            <Box>
                <Typography className="component-title">Contact</Typography>
                <form encType="multipart/form-data">
                    <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                        <input
                            type="text"
                            value={contactInfoParams.email}
                            onChange={(e) => setContactInfoParams({ ...contactInfoParams, email: e.target.value })}
                            placeholder="email"
                            className="custom-input"
                        />
                        <input
                            type="text"
                            value={contactInfoParams.phone_number}
                            onChange={(e) => setContactInfoParams({ ...contactInfoParams, phone_number: e.target.value })}
                            placeholder="phone number"
                            className="custom-input"
                        />
                        <input
                            type="text"
                            placeholder="location"
                            onChange={(e: any) => setContactInfoParams({ ...contactInfoParams, location: e.target.value })}
                            className="custom-input"
                        />
                    </Stack>
                </form>

                <Box mt={2}>
                    <button
                        className="admin-button"
                        onClick={() => updateContactInfo(contactInfoParams)}
                    >
                        SAVE
                    </button>
                </Box>
            </Box>
        </>
    );
}

export default ContactInfo;
