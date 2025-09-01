export default function Footer() {
    return (
        <footer className="bg-[#08090e] mt-10">
            <div className="mx-auto px-40 py-8 grid md:grid-cols-4 gap-20 text-sm text-gray-600">

                <div className="cursor-default">
                    <div className="flex items-center gap-2">
                        <img src="./logo/grammarly.png" alt="" className="w-7 h-7" />
                        <span className="font-bold text-lg hover:text-green-600">Grammarly</span>
                    </div>
                    <p className="mt-4 text-gray-500">
                        AI communication assistance for work, school, and everywhere you write.
                    </p>
                </div>


                <div>
                    <h4 className="font-bold text-gray-800 mb-3 cursor-default">Product</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-green-600">Why Grammarly</a></li>
                        <li><a href="#" className="hover:text-green-600">For Work</a></li>
                        <li><a href="#" className="hover:text-green-600">For Education</a></li>
                        <li><a href="#" className="hover:text-green-600">Compare Plans</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-gray-800 mb-3 cursor-default">Company</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-green-600">About Us</a></li>
                        <li><a href="#" className="hover:text-green-600">Careers</a></li>
                        <li><a href="#" className="hover:text-green-600">Press</a></li>
                        <li><a href="#" className="hover:text-green-600">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-gray-800 mb-3 cursor-default">Support</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-green-600">Help Center</a></li>
                        <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-green-600">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-green-600">Contact</a></li>
                    </ul>
                </div>
            </div>


            <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500 cursor-default">
                © 2025 Grammarly, Inc. All rights reserved.
            </div>
        </footer>
    );
}