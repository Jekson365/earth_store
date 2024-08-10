import '../styles/partials/navigation.scss'
import {Stack, Typography, Box} from "@mui/material";
import {ShoppingBag} from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import DehazeIcon from '@mui/icons-material/Dehaze';
import {useState} from "react";
export const Navigation = () => {
    const [navOpen,setNavOpen] = useState<Boolean>(false)
    return (
        <>
            <div className={'navigation'}>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    p={2}
                    mt={2}
                >
                    <Typography className={'title'}>EARTH STORE</Typography>
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        gap={'30px'}
                    >
                        <Stack
                            display={navOpen ? 'none' : "flex"}
                            className={'responsive-nav'} direction={'row'} gap={'30px'}>
                            <Typography className={'nav-name'}>HOME</Typography>
                            <Typography className={'nav-name'}>ABOUT</Typography>
                            <Typography className={'nav-name'}>SHOP</Typography>
                            <Typography className={'nav-name'}>CONTACT</Typography>
                        </Stack>
                        <Stack direction={'row'} gap={'10px'} alignItems={'center'}>
                            <Box>
                                <ShoppingBag className={'icon'}
                                             sx={{fontSize: "30px"}}
                                />
                            </Box>
                            <Box>
                                <PersonIcon className={'icon person'}
                                            sx={{fontSize: "30px"}}
                                />
                            </Box>
                            <Box
                                onClick={()=>setNavOpen(!navOpen)}
                            >
                                <DehazeIcon className={'set-nav'}

                                            sx={{fontSize: "30px"}}
                                />
                            </Box>
                        </Stack>
                    </Stack>

                </Stack>
            </div>
        </>
    )
}