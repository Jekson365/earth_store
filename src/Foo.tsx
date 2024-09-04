import { Grid } from "@mui/material"

export const Foo = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (
        <>
            <Grid container height={'100vh'}>
                {arr.map(() => {
                    return (
                        <>
                            <Grid item xs={3}
                                minHeight={'300px'}
                            >
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img 
                                            style={{
                                                width:"100%",
                                                height:"100%",
                                                objectFit:"cover"
                                            }}
                                            src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"/>
                                        </div>
                                        <div className="flip-card-back">
                                            <h1>John Doe</h1>
                                            <p>Architect & Engineer</p>
                                            <p>We love that guy</p>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </>
                    )
                })}
            </Grid>
        </>
    )
}