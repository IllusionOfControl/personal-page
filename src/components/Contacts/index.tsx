import React from "react";
import Link from "next/link";
import {
  FaSearchLocation,
  FaTelegram,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { ContactsData, LocationData, SocialsData } from "@/types";

interface ContactsProps {
  location: LocationData;
  contacts: ContactsData;
  socials: SocialsData;
}

const Contacts: React.FC<ContactsProps> = ({ location, contacts, socials }) => {
  return (
    <section className="mx-auto container py-12 scroll-mt-24" id="contacts">
      <h1 className="text-3xl font-bold">
        <span className="text-neutral-800 dark:text-neutral-200">Contact with </span>
        <span className="text-rose-700 dark:text-rose-600">me</span>
      </h1>
      <hr className="border-neutral-200 dark:border-neutral-800 border-1 my-4" />
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-6 text-neutral-600 dark:text-neutral-400">
          <div className="my-auto flex flex-col space-y-4">
            {location?.title && (
              <Link
                className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center"
                href={location.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSearchLocation className="mr-2.5 text-rose-600" />
                {location.title}
              </Link>
            )}
            {contacts?.email && (
              <Link
                className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center"
                href={`mailto:${contacts.email}`}
              >
                <FaEnvelope className="mr-2.5 text-rose-600" />
                {contacts.email}
              </Link>
            )}
            {contacts?.phone && (
              <Link
                className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center"
                href={`tel:+${contacts.phone.replace(/\D/g, "")}`}
              >
                <FaPhone className="mr-2.5 text-rose-600" />
                {contacts.phone}
              </Link>
            )}
          </div>
          <div className="my-auto flex flex-col space-y-4">
            {socials?.telegram && (
              <Link
                className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center"
                href={socials.telegram_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="mr-2.5 text-rose-600" />
                {socials.telegram}
              </Link>
            )}
            {socials?.github && (
              <Link
                className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center"
                href={socials.github_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2.5 text-rose-600" />
                {socials.github}
              </Link>
            )}
            {socials?.instagram && (
              <Link
                className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center"
                href={socials.instagram_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="mr-2.5 text-rose-600" />
                {socials.instagram}
              </Link>
            )}
            {socials?.linkedin && (
              <Link
                className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center"
                href={socials.linkedin_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="mr-2.5 text-rose-600" />
                {socials.linkedin}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
