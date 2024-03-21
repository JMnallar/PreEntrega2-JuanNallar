export default function FooterComponent() {
    return (
        <div className="bg-black font-bold text-white lg:flex lg:justify-center lg:items-center py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <h5 className="text-sm font-semibold">Contacto</h5>
                        <div className="footer2">
                            <p>storesalta@gmail.com</p>
                            <p>3872257476</p>
                            <p>Salta, Argentina</p>
                            <a href="#">Boton de arrepentimiento</a>
                        </div>
                    </div>
                </div>
            </div>
    );
}