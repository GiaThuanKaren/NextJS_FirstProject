import React from "react";

function id({ data }) {
  return (
    <div>
      <>
        <p>{data.title}</p>
        <p>{data.body}</p>
      </>
    </div>
  );
}

export default id;

export async function getStaticPaths() {
    let respone = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await respone.json();
    let arrPaths = data.map(item=>{
        return {
            params:{
                id:`${item.id}`
            }
        }
    })
  return {
    paths: arrPaths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const respone = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await respone.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
