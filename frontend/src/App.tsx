import { gql, useQuery } from "@apollo/client";

function App() {

  const BOOKS = gql`
    query Test {
      test {
        title
        author
      }
    }`;

  function Books() {

    const { loading, error, data } = useQuery(BOOKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data || !data.test) return <p>No data found</p>;

    return data.test.map(({ title, author }: { title: string; author: string }) => (
      <div key={title}>
        <p>{author}: {title}</p>
      </div>
    ));
  }

  return (
    <>
      <p>GraphQL Test</p>
      <Books />
    </>
  )
}

export default App;
