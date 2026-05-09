import locations from "@/data/locations.json";
import industries from "@/data/industries.json";
import useCases from "@/data/use-cases.json";
import referralPartners from "@/data/referral-partners.json";
import tools from "@/data/tools.json";
import directory from "@/data/directory.json";
import faqs from "@/data/faqs.json";

export type SlugItem = { slug: string };

export function getLocations() {
  return locations;
}

export function getLocationBySlug(slug: string) {
  return locations.find((item) => item.slug === slug);
}

export function getIndustries() {
  return industries;
}

export function getIndustryBySlug(slug: string) {
  return industries.find((item) => item.slug === slug);
}

export function getUseCases() {
  return useCases;
}

export function getUseCaseBySlug(slug: string) {
  return useCases.find((item) => item.slug === slug);
}

export function getReferralPartners() {
  return referralPartners;
}

export function getReferralPartnerBySlug(slug: string) {
  return referralPartners.find((item) => item.slug === slug);
}

export function getTools() {
  return tools;
}

export function getToolBySlug(slug: string) {
  return tools.find((item) => item.slug === slug);
}

export function getDirectoryListings() {
  return directory;
}

export function getFaqs() {
  return faqs;
}
