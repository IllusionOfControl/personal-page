import {
  FaSearchLocation,
  FaTelegram,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";
import React from "react";

const Contacts = ({ location, contacts, socials }) => {
  return (
    <section className="mx-auto container py-8" id="contacts-section">
      <h1 className="text-3xl">
        <span className="text-neutral-300">Contact with </span>
        <span className="text-rose-800">me</span>
      </h1>
      <hr className="border-neutral-800 border-1 my-4" />
      <div className="mx-auto">
        <div className="flex justify-between text-neutral-400">
          <div className="my-auto flex flex-col space-y-4">
            <Link
              className="hover:text-rose-600 transition-colors"
              href={location.link}
            >
              <FaSearchLocation className="inline mr-2" />
              {location.title}
            </Link>
            <Link
              className="hover:text-rose-600 transition-colors"
              href={"mailto:" + contacts.email}
            >
              <FaEnvelope className="inline mr-2" />
              {contacts.email}
            </Link>
            <Link
              className="hover:text-rose-600 transition-colors"
              href={"tel:+" + contacts.phone}
            >
              <FaPhone className="inline mr-2" />+{contacts.phone}
            </Link>
          </div>
          <div className="my-auto flex flex-col space-y-4">
            <Link
              className="hover:text-rose-600 transition-colors"
              href={socials.telegram_link}
            >
              <FaTelegram className="inline mr-2" />
              {socials.telegram}
            </Link>
            <Link
              className="hover:text-rose-600 transition-colors"
              href={socials.github_link}
            >
              <FaGithub className="inline mr-2" />
              {socials.github}
            </Link>
            <Link
              className="hover:text-rose-600 transition-colors"
              href={socials.instagram_link}
            >
              <FaInstagram className="inline mr-2" />
              {socials.instagram}
            </Link>
            <Link
              className="hover:text-rose-600 transition-colors"
              href={socials.linkedin_link}
            >
              <FaLinkedin className="inline mr-2" />
              {socials.linkedin}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
