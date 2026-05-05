import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconInstagram from "@/assets/icons/IconInstagram.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "Mail",
    href: "mailto:contact@alexanderjtaylor.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/alexanderjordantaylor",
    linkTitle: `${SITE.title} on Instagram`,
    icon: IconInstagram,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
