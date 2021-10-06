import { motion } from 'framer-motion';
import Card from '../../components/Card';

export default function Projects({ data }) {
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

export async function getStaticProps() {
  const res = await fetch(process.env.URL);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
