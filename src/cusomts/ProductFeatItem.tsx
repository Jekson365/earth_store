import { Box, Stack, Typography } from '@mui/material'
import '../styles/admin.scss'
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

export const ProductFeatItem = ({ product, content, action, popUpAction, setPopProduct }: any) => {
    const { t } = useTranslation()
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
                        <Stack direction={'row'} gap={'10px'}>
                            <Typography>
                                {content}
                            </Typography>
                            |
                            <Typography>
                                {t('admin.amount')} - {product && product.amount}
                            </Typography>
                        </Stack>
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