import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const pages = [
    { href: "/about-us", title: "About Us" },
    { href: "/shop", title: "Shop" },
    { href: "/categories", title: "Categories" },
    { href: "/blogs", title: "Blogs" },
    { href: "/reviews", title: "Reviews" },
    { href: "/faq", title: "FAQ" },
    { href: "/contact-us", title: "Contact Us" },
  ];

  const category = [
    { href: "/about-us", title: "About Us" },
    { href: "/shop", title: "Shop" },
    { href: "/categories", title: "Categories" },
    { href: "/blogs", title: "Blogs" },
  ];

  const resources = [
    { href: "/return-policy", title: "Return Policy" },
    { href: "/terms-and-conditions", title: "Terms and Conditions" },
  ];

  const socials = [
    { href: "https://twitter.com/", src: "/images/ic-twitter.svg", alt: "Twitter" },
    { href: "https://www.facebook.com/", src: "/images/ic-facebook.svg", alt: "Facebook" },
    { href: "https://www.youtube.com/", src: "/images/ic-youtube.svg", alt: "YouTube" },
    { href: "https://www.instagram.com/", src: "/images/ic-insta.svg", alt: "Instagram" },
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="w-full p-4 lg:p-0 lg:w-3/6 mx-auto">
        <div className="flex justify-between">
          <div>
            <h4 className=" mb-8">PAGES</h4>
            <nav className="text-neutral-400 text-xs space-y-2">
              {pages.map((page, index) => (
                <Link key={index} href={page.href} className="block hover:text-white duration-300">
                  {page.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className=" mb-8">CATEGORIES</h4>
            <nav className="text-neutral-400 text-xs space-y-2">
              {category.map((cat, index) => (
                <Link key={index} href={cat.href} className="block hover:text-white duration-300">
                  {cat.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className=" mb-8">RESOURCES</h4>
            <nav className="text-neutral-400 text-xs space-y-2">
              {resources.map((resource, index) => (
                <Link key={index} href={resource.href} className="block hover:text-white duration-300">
                  {resource.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="footer-wrap bg-black-800 text-white pt-8">
          <div className="mx-auto">
            <div className="footer-btm flex flex-col-reverse md:flex-row justify-between items-center border-t border-gray-700 pt-8">
              <div className="text-xs text-neutral-400 mt-6 lg:mt-0">© 2025 &nbsp;Global Times</div>
              <div className="ft-social flex items-center space-x-8">
                {socials.map((social, index) => (
                  <a key={index} href={social.href} target="_blank" className="social-link w-inline-block">
                    <Image src={social.src} alt={social.alt} width={14} height={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;