import React from "react"
import {Button, Grid, Typography} from "@mui/material";

const Footer = () => {
    return (
        <div>
            <Grid className="bg-black text-white text-center mt-10"
                  container
                  sx={{bgcolor: "black", color: "white", py: 3}}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Kundeservice</Typography>
                    <div><Button className="pb-5" variant="h6">Kontakt Oss</Button></div>
                    <div><Button className="pb-5" variant="h6">Spørsmål og svar</Button></div>
                    <div><Button className="pb-5" variant="h6">Finn butikk</Button></div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Handle hos Oss</Typography>
                    <div><Button className="pb-5" variant="h6">Kjøpsvilkår</Button></div>
                    <div><Button className="pb-5" variant="h6">Personvernerklæring</Button></div>
                    <div><Button className="pb-5" variant="h6">Cookies</Button></div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Om Oss</Typography>
                    <div><Button className="pb-5" variant="h6">Jobb</Button></div>
                    <div><Button className="pb-5" variant="h6">Kampanjer</Button></div>
                </Grid>
            </Grid>

        </div>
    )
}
export default Footer