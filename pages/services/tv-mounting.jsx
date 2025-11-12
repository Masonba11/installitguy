import ServicePage, {
  getServerSideProps as getBaseServicePageProps,
} from "./[service]";

export const getServerSideProps = async () =>
  getBaseServicePageProps({ params: { service: "tv-mounting" } });

export default ServicePage;
