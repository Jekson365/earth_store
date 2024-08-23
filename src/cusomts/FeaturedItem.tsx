import { Box, Stack } from '@mui/material'
import '../styles/admin.scss'
import CloseIcon from '@mui/icons-material/Close';

export const FeaturedItem = ({ id, content, action }: any) => {
    return (
        <>
            <div className="featured-item"
            >
                <Stack direction={'row'}
                    width={'100%'}
                    justifyContent={'space-between'}>
                    <Box>
                        {content}
                    </Box>
                    <Box className='remove-button'
                        onClick={() => action(id)}
                    >
                        <CloseIcon />
                    </Box>
                </Stack>
            </div>
        </>
    )
}