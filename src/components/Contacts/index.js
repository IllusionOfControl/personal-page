const Contacts = () => {
    return (
        <section className="bg-black py-16 sm:py-28">
            <div className="px-4 mx-auto md:px-10">
                <div className="max-w-[1240px] grid grid-cols-1 sm:grid-cols-[2fr_4fr] px-4 mx-auto md:px-10">
                    <h1 className="text-5xl opacity-80 pb-4">Contact with <span className="text-rose-800">me</span></h1>
                    <div className="max-w-[700px] mx-auto pt-16 sm:pt-20 grid grid-cols-1 sm:grid-cols-2">
                        <p className="">Belarus, Brest</p>
                        <p className="">sergeyskorokhod2@gmail.com</p>
                        <p className="">Telegram</p>
                        <p className="">Github</p>
                        <p className="">Instagram</p>
                        <p className="">Twitter</p>
                        <p className="">LinkedIn</p>
                        <p className="">Discord</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;