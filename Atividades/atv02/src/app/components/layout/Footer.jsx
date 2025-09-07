export default function Footer() {
  return (
    <footer className="bg-[#08090e] mt-10">
      {/* Grid principal */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm text-gray-600">

        {/* Logo + descrição */}
        <div className="cursor-default">
          <div className="flex items-center gap-2">
            <img src="./logo/grammarly.png" alt="" className="w-7 h-7" />
            <span className="font-bold text-lg hover:text-green-600">Grammarly</span>
          </div>
          <p className="mt-4 text-gray-500 leading-relaxed">
            AI communication assistance for work, school, and everywhere you write.
          </p>
        </div>

        {/* Coluna Product */}
        <div>
          <h4 className="font-bold text-gray-200 mb-3 cursor-default">Product</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-600 transition">Why Grammarly</a></li>
            <li><a href="#" className="hover:text-green-600 transition">For Work</a></li>
            <li><a href="#" className="hover:text-green-600 transition">For Education</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Compare Plans</a></li>
          </ul>
        </div>

        {/* Coluna Company */}
        <div>
          <h4 className="font-bold text-gray-200 mb-3 cursor-default">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-600 transition">About Us</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Careers</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Press</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Blog</a></li>
          </ul>
        </div>

        {/* Coluna Support */}
        <div>
          <h4 className="font-bold text-gray-200 mb-3 cursor-default">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-600 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500 cursor-default">
        © 2025 Grammarly, Inc. All rights reserved.
      </div>
    </footer>
  );
}
