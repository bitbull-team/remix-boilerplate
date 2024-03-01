import Layout from "../components/Layout";
import type { MetaFunction } from "@remix-run/node";
import {Link} from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export const loader = async () => {
  return null;
};

export default function Page() {

  return (
    <Layout>
      index del sito, vai a <Link to="/home">Storyblok</Link>;
    </Layout>
  );
}
