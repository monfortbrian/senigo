import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t space-y-4">
      <div className="wrapper flex flex-col sm:flex-row items-start justify-between p-5">
        <div className="flex-1 flex flex-col items-start justify-center sm:justify-start gap-4 mb-5 sm:mb-0">
          <Link href="/" className="mb-4">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={128}
              height={38}
            />
          </Link>
          <p className="text-sm text-gray-600">
            The all-in-one platform for hosting impactful events, fostering
            meaningful connections, and celebrating milestones.
          </p>
          <div className="flex items-center">
            <h3 className="mr-1 text-sm text-gray-600 font-extralight">Payment available:</h3>
            <Image
              src="/assets/images/stripe-ar21.svg"
              alt="stripe logo"
              width={64}
              height={19}
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-7 mb-5 sm:mb-0">
          <h1 className="text-lg font-medium text-primary">Use Senigo</h1>
          <nav className="flex flex-col gap-1">
            <Link href="/" className="text-sm text-gray-600 hover:text-primary">
              Home
            </Link>
            <Link
              href="/events/create"
              className="text-sm text-gray-600 hover:text-primary"
            >
              Create Events
            </Link>
            <Link
              href="/profile"
              className="text-sm text-gray-600 hover:text-primary"
            >
              My Ticket
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-600 hover:text-primary"
            >
              About Us
            </Link>
            <Link href="/" className="text-sm text-gray-600 hover:text-primary">
              FAQs
            </Link>
          </nav>
        </div>

        <div className="flex-1 flex flex-col items-center sm:items-start justify-center sm:justify-start gap-7">
          <h1 className="text-lg font-medium text-primary">
            Connect With Us
          </h1>
          <div className="flex items-center">
            <div className="mr-4">
              <img
                src="/assets/images/facebook-logo.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </div>
            <div className="mr-4">
              <img
                src="/assets/images/instagram-logo.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </div>
            <div className="mr-4">
              <img
                src="/assets/images/x-logo.svg"
                alt="X - formerly twitter"
                width={24}
                height={24}
              />
            </div>
            <div className="mr-4">
              <img
                src="/assets/images/linkedin-logo.svg"
                alt="Linkedin"
                width={24}
                height={24}
              />
            </div>
            <div className="mr-4">
              <img
                src="/assets/images/youtube-logo.svg"
                alt="Youtube"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-600">
        2024 Senigo. All Rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
