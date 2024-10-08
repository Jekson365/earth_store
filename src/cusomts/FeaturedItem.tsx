import { Box, Stack } from '@mui/material'
import '../styles/admin.scss'
import CloseIcon from '@mui/icons-material/Close';

export const FeaturedItem = ({ product, content, action, popUpAction, setPopProduct }: any) => {
    const handlePop = () => {
        setPopProduct(product)
        popUpAction(true)
    }
    return (
        <>
            <div className="featured-item"
            >
                <Stack direction={'row'}
                    width={'100%'}
                    justifyContent={'space-between'}>
                    <Box
                        onClick={handlePop}
                    >
                        {content}
                    </Box>
                    <Box className='remove-button'
                        onClick={() => action(product.id)}
                    >
                        <CloseIcon />
                    </Box>
                </Stack>
            </div>
        </>
    )
}