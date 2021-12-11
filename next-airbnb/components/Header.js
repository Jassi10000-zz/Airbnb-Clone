import Image from "next/image";

function Header() {
    return (
        <header>
            {/* left div : logo */}
            <div className='relative flex items-center h-10 w-20'>
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

        </header>
    )
}

export default Header;
