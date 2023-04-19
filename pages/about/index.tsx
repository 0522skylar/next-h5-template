import fetcher from '../../lib/request';

function About(props) {
  const { data } = props;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetcher('https://api.example.com/data');
  console.log(data)
  return {
    props: {
      data,
    },
  };
}

export default About;
