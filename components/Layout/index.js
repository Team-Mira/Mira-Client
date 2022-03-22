import { Container } from "@mui/material"
import NavBar from "./navbar"

export default function Layout({children}) {
    return (
        <>
            <NavBar />
            <Container>{children}</Container>
        </>
    )
}
