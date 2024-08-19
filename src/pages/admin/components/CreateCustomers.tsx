import { Box, Typography, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { useCreateCustomers } from "../../../hooks/customers/useCreateCustomers"
import { useCustomers } from "../../../hooks/customers/useCustomers"
import { useRemoveCustomers } from "../../../hooks/customers/useRemoveCustomers"

export const CreateCustomers = () => {
    const [customer, setCustomer] = useState<any>({})
    const { removeCustomers } = useRemoveCustomers()
    const { customers, fetchCustomers } = useCustomers()
    const { createCustomers } = useCreateCustomers()

    useEffect(()=> {
        fetchCustomers()
    },[])
    return (
        <>
            <Box>
                <Typography className="component-title">Customers</Typography>
                <form encType="multipart/form-data">
                    <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                        <input
                            type="text"
                            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                            placeholder="name"
                            className="custom-input"
                        />
                        <input
                            type="text"
                            onChange={(e) => setCustomer({ ...customer, surname: e.target.value })}
                            placeholder="surname"
                            className="custom-input"
                        />
                        <input
                            type="text"
                            placeholder="review"
                            onChange={(e: any) => setCustomer({ ...customer, review_text: e.target.value })}
                            className="custom-input"
                        />
                    </Stack>
                </form>
                <Stack direction={'row'} mt={3} gap={'20px'} flexWrap={'wrap'}>
                    {customers && customers.map((e: any) => {
                        return (
                            <>
                                <div className="featured-item"
                                    onClick={() => removeCustomers(e.id)}
                                >
                                    {e.name} - {e.surname}
                                </div>
                            </>
                        )
                    })}
                </Stack>
                <Box mt={2}>
                    <button
                        className="main-button"
                        onClick={() => createCustomers(customer)}
                    >
                        SAVE
                    </button>
                </Box>
            </Box>
        </>
    )
}