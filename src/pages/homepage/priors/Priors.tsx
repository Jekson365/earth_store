import { Box, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { PriorIcons } from '../../../icons/prioricons';
import Typography from "@mui/material/Typography";
import { UsePriors } from '../../../hooks/priors/usePriors';
import { useEffect } from 'react';
export const Priors = () => {
    const { priors, fetchPriors } = UsePriors()
    useEffect(() => {
        fetchPriors()
    }, [])
    return (
        <>
            <div className={'priors-section'}>
                <div className={'inner-section'}>
                    <Grid container columnSpacing={3} rowSpacing={5} justifyContent={'center'}>
                        {priors && priors.map((e: any) => {
                            return (
                                <>
                                    <Grid item xs={12} md={4}>
                                        <Stack direction={'row'}
                                            gap={'20px'} alignItems={'flex-start'} className={'each-prior'}>
                                            <div className={'icon'}>
                                                {(() => {
                                                    const matchedIcon = PriorIcons.find((m) => m.id === e.icon_id);
                                                    return matchedIcon ? <><Box className='prior-icon'>{matchedIcon.icon}</Box></> : null;
                                                })()}
                                            </div>
                                            <Stack direction={'column'} gap={'5px'}>
                                                <Typography className={'title'}>{e.title}</Typography>
                                                <Typography className={'desc'}>{e.description}</Typography>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                </>
                            )
                        })}
                    </Grid>
                </div>
            </div>
        </>
    )
}