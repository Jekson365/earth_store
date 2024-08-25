import { Box, Grid, Stack, Typography } from "@mui/material"
import { themes } from "../../../Themes"
import { useEffect, useState } from "react"

export const CustomTheme = () => {
    const [number, setNumber] = useState<Number | null>(null)
    const [currentTheme, setCurrentTheme] = useState<any>(null)
    const handleSelect = (id: Number) => {
        setNumber(id)
    }
    useEffect(() => {
        setCurrentTheme(Number(JSON.parse(localStorage.getItem('theme_id'))) || null)
    }, [])
    const handleSave = () => {
        localStorage.setItem('theme_id', JSON.stringify(number))
        window.location.href = '/'
    }
    useEffect(()=> {
        console.log(currentTheme)
    },[])
    return (
        <>
            <Typography className="component-title">Themes</Typography>
            <Grid container spacing={5} xs={12} md={6}
                style={{ maxWidth: '1200px' }}
            >
                {themes.map((e) => {
                    return (
                        <>
                            <Grid item>
                                <Stack direction={'row'} gap={'10px'} className="colors-cover"
                                    style={{
                                        outline: e.id === currentTheme ? '2px solid black' : ""
                                    }}
                                    onClick={() => handleSelect(e.id)}
                                >
                                    {e.colors.map((color) => {
                                        return (
                                            <>
                                                <Box
                                                    style={{
                                                        background: color,
                                                        width: "40px",
                                                        height: "40px",
                                                        borderRadius: "50%",
                                                    }}
                                                >
                                                </Box>
                                            </>
                                        )
                                    })}
                                </Stack>
                            </Grid>
                        </>
                    )
                })}
            </Grid>
            <button className="admin-button" onClick={handleSave}>SAVE</button>
        </>
    )
}