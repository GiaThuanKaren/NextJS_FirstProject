function Home({ data }) {
  console.log(data);
  return (
    <>
      <h1>Home Page</h1>
      {data.map(function (item, idx) {
        return (
          <>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </>
        );
      })}
    </>
  );
}

export default Home;
export async function getStaticProps() {
  // fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(res=>res.json())
  //     .then(item=>{
  //         return {
  //             props: {
  //               data: item,
  //             },
  //           };
  //     })
  //     .catch(e=>{
  //         console.log(e)
  //     })
  const respone = await fetch("https://jsonplaceholder.typicode.com/users");
  const resutl = await respone.json();
  return {
    props: {
      data: resutl,
    },
  };
}
