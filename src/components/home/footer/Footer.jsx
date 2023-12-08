function Footer() {
    return (
        <footer className="bg-neutral-900 h-46 text-center p-10 text-stone-100">
            <span>Just for footer dont&apos;t take serious 😉. </span>
            <p>
                Copyright &copy; {new Date().getFullYear()}{" "}
                <a
                    className="text-blue-500 underline"
                    href="https://github.com/LynxQuas"
                    target="_blank"
                    rel="noreferrer"
                >
                    La Pyae Hmue Aung.
                </a>{" "}
                All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
