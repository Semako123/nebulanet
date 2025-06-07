import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-40 mb-20">
      <div className="flex justify-between flex-wrap gap-y-10 md:flex-nowrap">
        {/* Company Description */}
        <div>
          <Link href="/">
            <h2 className="text-xl font-semibold font-orb mb-7">NebulaNet</h2>
          </Link>
          <p className="mt-2 text-sm leading-relaxed font-extralight text-gray-500 tracking-wider">
            NebulaNet builds decentralized, AI-native infrastructure designed
            for a quantum-resilient future.
            <br />
            Engineered with ✨ across the decentralized web.
          </p>
        </div>
 
        <div className="flex gap-x-20">
          <div className="">
            <h3 className="text-xl font mb-5">Socials</h3>
            <ul className="space-y-4 font-extralight text-sm text-gray-500">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="text-xl mb-5">Info</h3>
            <ul className="space-y-4 text-sm font-extralight text-gray-500">
              <li>
                <Link href="/docs" className="hover:underline">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:underline">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-20 font-extralight text-xs text-gray-700">
        © 2025 NebulaNet Protocol Foundation
        <span className="text-gray-500"> | All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
