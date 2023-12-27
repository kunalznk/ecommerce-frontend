const Footer = () => {
  return (
    <>
      <footer class="w-full bg-white">
        <div class="flex flex-row flex-wrap items-center justify-center text-center bg-white md:justify-between">
          <img
            src="https://avatars.githubusercontent.com/u/50258809?v=4"
            alt="logo-ct"
            class="w-10 rounded-full"
          />
          <ul class="flex flex-wrap items-center gap-6 text-base font-base">
            <li>
              <a
                href="#"
                class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500"
              >
                License
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500"
              >
                Contribute
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* <span class="block border-t border-blue-gray-50" /> */}
      </footer>
    </>
  );
};

export default Footer;
