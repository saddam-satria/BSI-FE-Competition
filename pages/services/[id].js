import { useRouter } from 'next/router';

const services = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  return (
    <div className="w-1/2">
      <h1>{id}</h1>
    </div>
  );
};

export default services;
