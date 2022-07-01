import Link from "next/link"
function Home({data} ) {
//   console.log();
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/about">
        User
      </Link>
      {data.map(function (item, idx) {
        return (
          <>
            <Link href={`/post/${item.id}`} passHref>
            <a>{item.id}</a>
            </Link>
              <p></p>
            <p>{item.title}</p>
            
            <p>{item.body}</p>
          </>
        );
      })}
    </>
  );
}

export default Home;
export async function getStaticProps() {
  const respone = await fetch("https://jsonplaceholder.typicode.com/posts");
  const resutl = await respone.json();
  return {
    props: {
      data: resutl,
    },
  };
}
