import { Box, Stack, Typography } from "@mui/material"
import '../../styles/admin.scss'
import { useContext, useEffect, useState } from "react"
import { CurrentUser } from "../../App"
import { useUpdateOpening } from "../../hooks/openings/useUpdateOpening"
import { useUpdatePostcard } from "../../hooks/postcards/useUpdatePostcard"
import { UpdatePrior } from "./components/UpdatePrior"
import { CreateProduct } from "./components/CreateProduct"
import { CreateCategory } from "./components/CreateCategory"
import { CreateAbout } from "./components/CreateAbout"

const Admin = () => {
    const { currentUser } = useContext<any>(CurrentUser)
    const [user] = useState(Object.keys(currentUser).length === 0 ? false : currentUser)
    const { updateOpening } = useUpdateOpening()
    const { updatePostcard } = useUpdatePostcard()

    useEffect(() => {
        if (user) {
            if (user.role_id === 1) {
                window.location.href = '/'
            }
        }
        else {
            window.location.href = '/'
        }
    }, [user])


    const [openingData, setOpeningData] = useState<any>({ title: "", min_title: "" })
    const [postCardData, setPostCardData] = useState<any>({ title: '', min_title: "" })

    const handlePostCard = () => {
        try {
            updatePostcard(postCardData)
            window.location.href = '/'
        }
        catch (err) {
            throw err
        }
    }

    return (
        <>
            <Box mt={15}></Box>
            <div className="admin-cover">
                <Stack direction={'column'} alignItems={'flex-start'} gap={'40px'}>
                    <Box>
                        <Typography className="component-title">Header</Typography>
                        <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                            <input type="text"
                                onChange={(e: any) => setOpeningData({ ...openingData, title: e.target.value })}
                                placeholder="title" className="custom-input" />
                            <input type="text"
                                onChange={(e: any) => setOpeningData({ ...openingData, min_title: e.target.value })}
                                placeholder="subtitle" className="custom-input" />
                        </Stack>
                        <Box mt={2}>
                            <button className="main-button"
                                onClick={() => updateOpening(openingData)}
                            >SAVE</button>
                        </Box>
                    </Box>
                    <Box>
                        <Typography className="component-title">Featured</Typography>
                        <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                            <select className="custom-input"
                                style={{
                                    background: "white",
                                    minWidth: "300px",
                                }}
                            >
                                <option>product one</option>
                                <option>product one</option>
                                <option>product one</option>
                                <option>product one</option>
                            </select>
                        </Stack>
                        <Stack direction={'row'} mt={3} gap={'20px'} flexWrap={'wrap'}>
                            <div className="featured-item">
                                product name
                            </div>
                            <div className="featured-item">
                                product
                            </div>
                        </Stack>
                        <Box mt={2}>
                            <button className="main-button">SAVE</button>
                        </Box>
                    </Box>

                    <Box>
                        <Typography className="component-title">Postcard</Typography>
                        <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                            <input type="text"
                                onChange={(e) => setPostCardData({ ...postCardData, title: e.target.value })}
                                placeholder="title" className="custom-input" />
                            <input type="text"
                                onChange={(e) => setPostCardData({ ...postCardData, min_title: e.target.value })}
                                placeholder="subtitle" className="custom-input" />
                        </Stack>
                        <Box mt={2}>
                            <button className="main-button"
                                onClick={handlePostCard}
                            >SAVE</button>
                        </Box>
                    </Box>

                    <UpdatePrior />

                    <CreateAbout/>
                    <CreateCategory />
                    <CreateProduct />
                </Stack>
            </div>

        </>
    )
}

export default Admin