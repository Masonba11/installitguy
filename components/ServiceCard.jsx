import Link from "next/link";
import Image from "next/image";
import { servicesContent } from "../data/servicesContent";
import { simplifiedServices } from "../data/simplifiedServices";
import { serviceImageMap, getServiceHeroImage } from "../utils/serviceImages";

export default function ServiceCard({ service, city = null }) {
  const getServiceName = (serviceSlug) => {
    return (
      simplifiedServices[serviceSlug]?.name ||
      servicesContent[serviceSlug]?.name ||
      serviceSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    );
  };

  const getServiceDescription = (serviceSlug) => {
    return (
      simplifiedServices[serviceSlug]?.description ||
      servicesContent[serviceSlug]?.shortDescription ||
      "Professional installation and repair services."
    );
  };

  const serviceName = getServiceName(service);
  const serviceDescription = getServiceDescription(service);
  const href = city
    ? `/service-areas/${city}/${service}`
    : `/services/${service}`;

  const heroImage = getServiceHeroImage(service);
  const serviceImages = serviceImageMap[service] || [];
  const serviceImage = heroImage
    ? heroImage
    : serviceImages.length > 0
    ? serviceImages[0]
    : null;
  const imagePath = serviceImage
    ? `/images/installit-guy/${serviceImage}`
    : null;

  return (
    <Link href={href} className="block">
      <div className="service-card group hover:shadow-xl transition-all duration-300 cursor-pointer">
        {imagePath && (
          <div className="service-image">
            <Image
              src={imagePath}
              alt={serviceName}
              width={400}
              height={150}
              className="w-full h-[150px] object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
            {serviceName}
          </h3>

          <p className="text-gray-600 mb-4 leading-relaxed">
            {serviceDescription}
          </p>

          <div className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
            Learn More
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
