import {
  FaSearchLocation,
  FaTelegram,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope
} from 'react-icons/fa'
import Link from "next/link";
import {socials, location} from "../../data";

const Contacts = () => {
  return (
    <section className="bg-black py-16 sm:py-28" id="contacts-section">
      <div className="px-4 mx-auto md:px-10">
        <div className="max-w-[1240px] grid grid-cols-1 sm:grid-cols-[2fr_4fr] px-4 mx-auto md:px-10">
          <h1 className="text-5xl pb-4">Contact with <span className="text-rose-800">me</span></h1>
          <div className="max-w-[700px] mx-auto pt-16 sm:pt-20 grid grid-cols-1 md:grid-cols-2 text-xl gap-4">
            <Link className="hover:text-rose-600 transition-colors" href={location.link}><FaSearchLocation className="inline mr-2"/>{location.title}</Link>
            <Link className="hover:text-rose-600 transition-colors" href={socials.email_link}><FaEnvelope className="inline mr-2"/>{socials.email}</Link>
            <Link className="hover:text-rose-600 transition-colors" href={socials.telegram_link}><FaTelegram className="inline mr-2"/>{socials.telegram}</Link>
            <Link className="hover:text-rose-600 transition-colors" href={socials.github_link}><FaGithub className="inline mr-2"/>{socials.github}</Link>
            <Link className="hover:text-rose-600 transition-colors" href={socials.instagram_link}><FaInstagram className="inline mr-2"/>{socials.instagram}</Link>
            <Link className="hover:text-rose-600 transition-colors" href={socials.linkedin_link}><FaLinkedin className="inline mr-2"/>{socials.linkedin}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;