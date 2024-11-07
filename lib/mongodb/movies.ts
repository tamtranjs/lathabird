import client from "./client";

export async function getMovies(query: string) {
  try {
    await client.connect();
    // set namespace
    const database = client.db("sample_mflix");
    const coll = database.collection("movies");
    // define pipeline
    const agg = [
      {
        $search: {
          index: "autocomplete-tutorial",
          autocomplete: { query: query, path: "title" },
        },
      },
      { $limit: 20 },
      { $project: { _id: 0, title: 1 } },
    ];
    // run pipeline
    const result = await coll.aggregate(agg);
    // print results
    await result.forEach((doc) => console.log(doc));
  } finally {
    await client.close();
  }
}
