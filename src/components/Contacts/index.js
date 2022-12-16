import {
  FaSearchLocation,
  FaTelegram,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaEnvelope
} from 'react-icons/fa'
import Link from "next/link";
import {socials} from "../../data";

const Contacts = () => {
  return (
    <section className="bg-black py-16 sm:py-28">
      <div className="px-4 mx-auto md:px-10">
        <div className="max-w-[1240px] grid grid-cols-1 sm:grid-cols-[2fr_4fr] px-4 mx-auto md:px-10">
          <h1 className="text-5xl opacity-80 pb-4">Contact with <span className="text-rose-800">me</span></h1>
          <div className="max-w-[700px] mx-auto pt-16 sm:pt-20 grid grid-cols-1 sm:grid-cols-2 text-xl gap-4">
            <p><span><FaSearchLocation className="inline mr-2"/></span>Belarus, Brest</p>
            <Link href={socials.email_link}><FaEnvelope className="inline mr-2"/>{socials.email}</Link>
            <Link href={socials.telegram_link}><FaTelegram className="inline mr-2"/>{socials.telegram}</Link>
            <Link href={socials.github_link}><FaGithub className="inline mr-2"/>{socials.github}</Link>
            <Link href={socials.instagram_link}><FaInstagram className="inline mr-2"/>{socials.instagram}</Link>
            <p><span><FaTwitter className="inline mr-2"/></span>Twitter</p>
            <p><span><FaLinkedin className="inline mr-2"/></span>LinkedIn</p>
            <p><span><FaDiscord className="inline mr-2"/></span>Discord</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;