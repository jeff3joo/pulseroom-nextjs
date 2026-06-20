export const metadata = {
    title: 'Pulse Room',
    description: 'Room Based Chatting Website',
}

export default function RootLayout({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <header
                    style = {{
                        backgroundColor: "lightblue",
                        padding: "1rem",
                    }}
                >
                    <p>Pulse Room</p>
                </header>
                {children}
                <footer
                    style={{
                        background: "grey",
                        padding: "1rem"
                    }}
                >
                    <p>Footer</p>
                </footer>
            </body>
        </html>
    )
}