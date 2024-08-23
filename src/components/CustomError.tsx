import { Alert, Snackbar } from "@mui/material"

export const CustomError = ({ open, setOpen,message,severity } : any) => {
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
                <Alert variant="filled" severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}