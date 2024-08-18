import { Box, FormControl, MenuItem, Select, Stack, Typography } from "@mui/material"
import { PriorIcons } from "../../../icons/prioricons"
import React, { useEffect } from "react";
import { createPrior } from "../../../hooks/priors/useCreatePrior";
import { UsePriors } from "../../../hooks/priors/usePriors";
import { useRemovePrior } from "../../../hooks/priors/useRemovePrior";


export const UpdatePrior = () => {
    const { priors, fetchPriors } = UsePriors()
    const { handleRemove } = useRemovePrior()
    const [selectedValue, setSelectedValue] = React.useState(
        {
            title: "",
            description: "",
            icon_id: ""
        }
    );

    const handlePrior = () => {
        createPrior(selectedValue)
    }
    useEffect(() => {
        fetchPriors()
    }, [])
    return (
        <>
            <Box>
                <Typography className="component-title">Priorities</Typography>
                <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                    <input type="text"
                        onChange={(e: any) => setSelectedValue({ ...selectedValue, title: e.target.value })}
                        placeholder="title" className="custom-input" />
                    <input type="text"
                        onChange={(e: any) => setSelectedValue({ ...selectedValue, description: e.target.value })}
                        placeholder="subtitle" className="custom-input" />
                    <FormControl>
                        <Select
                            labelId="icon-select-label"
                            value={selectedValue}
                            onChange={(e: any) => setSelectedValue({ ...selectedValue, icon_id: e.target.value })}
                            className="custom-input"
                            style={{
                                padding: "0",
                                background: "white",
                                minWidth: "300px",
                            }}
                            renderValue={() => {
                                const selectedItem = PriorIcons.find((item: any) => item.id === selectedValue.icon_id);
                                return (
                                    <Stack direction="row" alignItems="center" gap="10px">
                                        {selectedItem?.icon}
                                        <Typography>{selectedItem?.name}</Typography>
                                    </Stack>
                                );
                            }}
                        >
                            {PriorIcons.map((e) => (
                                <MenuItem key={e.id} value={e.id}>
                                    <Stack direction="row" gap="10px" alignItems="center">
                                        {e.icon}
                                        <Typography>{e.name}</Typography>
                                    </Stack>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>
                <Stack direction={'row'} mt={3} gap={'20px'} flexWrap={'wrap'}>
                    {priors && priors.map((e: any) => {
                        return (
                            <>
                                <div className="featured-item"
                                    onClick={()=>handleRemove(e.id)}
                                >
                                    <Stack direction={'row'} justifyContent={'space-between'} gap={'80px'}>
                                        <Box>
                                            {e.title}
                                        </Box>
                                        <Box>
                                            {(() => {
                                                const matchedIcon = PriorIcons.find((m) => m.id === e.icon_id);
                                                return matchedIcon ? <>{matchedIcon.icon}</> : null;
                                            })()}
                                        </Box>
                                    </Stack>
                                </div>
                            </>
                        )
                    })}
                </Stack>
                <Box mt={2}>
                    <button className="main-button"
                        onClick={handlePrior}
                    >SAVE</button>
                </Box>
            </Box>
        </>
    )
}