import Image from "next/image";

function Header() {
    return (
        <div className="bg">
            {/* left div : logo */}
            <div className="relative flex items-center justify-center h-10">
                <Image 
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* middle div : search */}
            <div>

            </div>

            {/* right div : sign in */}
            <div>

            </div>

        </div>
    )
}

export default Header;
