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
            <body>{children}</body>
        </html>
    )
}