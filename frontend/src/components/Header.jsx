const navBar = [
    { name: 'Home', href: '#home' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
]

export function Header() {
    return (
        <header className="bg-gray-700 text-white py-3 flex justify-around">
            {/* Logo */}
            <div>Todo App</div>

            {/* Desktop Navbar */}
            <nav>
                <ul className="flex">
                    {
                        navBar.map(link => (
                            <li key={link.name}>{link.name}</li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}