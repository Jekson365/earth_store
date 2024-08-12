import { Box, Grid, Stack, Typography } from "@mui/material"
import '../../styles/admin.scss'

const Admin = () => {
    return (
        <>
            <Box mt={15}></Box>
            <div className="admin-cover">
                <Stack direction={'column'} alignItems={'flex-start'} gap={'40px'}>
                    <Box>
                        <Typography className="component-title">Header</Typography>
                        <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                            <input type="text" placeholder="title" className="custom-input" />
                            <input type="text" placeholder="subtitle" className="custom-input" />
                        </Stack>
                        <Box mt={2}>
                            <button className="main-button">SAVE</button>
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
                            <input type="text" placeholder="title" className="custom-input" />
                            <input type="text" placeholder="subtitle" className="custom-input" />
                        </Stack>
                        <Box mt={2}>
                            <button className="main-button">SAVE</button>
                        </Box>
                    </Box>

                    <Box>
                        <Typography className="component-title">Priorities</Typography>
                        <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                            <input type="text" placeholder="title" className="custom-input" />
                            <input type="text" placeholder="subtitle" className="custom-input" />
                            <select className="custom-input"
                                style={{
                                    background: "white",
                                    minWidth: "300px",
                                }}
                            >
                                <option>icon one</option>
                                <option>icon two</option>
                                <option>icon three</option>
                                <option>icon four</option>
                            </select>
                        </Stack>
                        <Stack direction={'row'} mt={3} gap={'20px'} flexWrap={'wrap'}>
                            <div className="featured-item">
                                prior name
                            </div>
                            <div className="featured-item">
                                prior
                            </div>
                            <div className="featured-item">
                                prior me
                            </div>
                        </Stack>
                        <Box mt={2}>
                            <button className="main-button">SAVE</button>
                        </Box>
                    </Box>

                    <Box>
                        <Typography className="component-title">About</Typography>
                        <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                            <input type="text" placeholder="title" className="custom-input" />
                            <input type="text" placeholder="description" className="custom-input" />
                            <input type="file" placeholder="image" className="custom-input" />

                        </Stack>
                        <Stack direction={'row'} mt={3} gap={'20px'} flexWrap={'wrap'}>
                            <div className="featured-item">
                                about 1
                            </div>
                            <div className="featured-item">
                                about 1
                            </div>
                            <div className="featured-item">
                                about 1
                            </div>
                        </Stack>
                        <Box mt={2}>
                            <button className="main-button">SAVE</button>
                        </Box>
                    </Box>

                    <Box>
                        <Typography className="component-title">Categories</Typography>
                        <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                            <input type="text" placeholder="title" className="custom-input" />
                        </Stack>
                        <Stack direction={'row'} mt={3} gap={'20px'} flexWrap={'wrap'}>
                            <div className="featured-item">
                                category 1
                            </div>
                            <div className="featured-item">
                                category 1
                            </div>
                            <div className="featured-item">
                                category 1
                            </div>
                        </Stack>
                        <Box mt={2}>
                            <button className="main-button">SAVE</button>
                        </Box>
                    </Box>

                    <Box>
                        <Typography className="component-title">Products</Typography>
                        <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                            <input type="text" placeholder="title" className="custom-input" />
                            <input type="number" placeholder="price" className="custom-input" />
                            <select className="custom-input"
                                style={{
                                    background: "white",
                                    minWidth: "300px",
                                }}
                            >
                                <option>cat one</option>
                                <option>cat two</option>
                                <option>cat three</option>
                                <option>cat four</option>
                            </select>
                            <textarea className="custom-input"
                                style={{ width: "100%" }}
                            />
                        </Stack>
                        <Stack direction={'row'} mt={3} gap={'20px'} flexWrap={'wrap'}>
                            <div className="featured-item">
                                category 1
                            </div>
                            <div className="featured-item">
                                category 1
                            </div>
                            <div className="featured-item">
                                category 1
                            </div>
                        </Stack>
                        <Box mt={2}>
                            <button className="main-button">SAVE</button>
                        </Box>
                    </Box>

                </Stack>
            </div>

        </>
    )
}

export default Admin