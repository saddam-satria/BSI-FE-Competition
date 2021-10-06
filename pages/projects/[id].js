import Card from '../../components/Card';
import { motion } from 'framer-motion';

export default function ProjectDetail({ data }) {
  const variants = {
    out: {
      opacity: '0%',
      y: '100%',
    },
    in: {
      opacity: '100%',
      y: 0,
    },
  };

  return (
    <motion.div variants={variants} transition={{ duration: 2 }} initial="out" animate="in">
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4">
        {data.length
          ? data.map((item, index) => {
              return <Card key={index} title={item.title} tags={item.tags} subTitle={item.subTitle} img={item.img} />;
            })
          : null}
      </div>
    </motion.div>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://my-json-server.typicode.com/saddam-satria/lomba-bsi/master/db.json/projects');
  const data = await res.json();
  const paths = data.map((item) => ({
    params: { id: item.tags[0].split(' ')[0].toLowerCase() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(process.env.URL);
  const data = await res.json();

  const filterData = data.filter((item) => {
    return item.tags[0].split(' ')[0].toLowerCase() === params.id;
  });

  return {
    props: {
      data: filterData,
    },
  };
}
