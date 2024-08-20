import { Alert, Snackbar } from "@mui/material"

export const CustomError = ({ open, setOpen } : any) => {
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
                <Alert variant="filled" severity="error">
                    ველი ცარიელია
                </Alert>
            </Snackbar>
        </>
    )
}