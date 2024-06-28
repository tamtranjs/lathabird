import client from "./client";

export async function getCities(query: string) {
  try {
    await client.connect();

    const database = client.db("lathabird");
    const coll = database.collection("world_cities");

    const agg = [
      {
        $search: {
          index: "default",
          autocomplete: {
            query: query,
            path: "city",
          },
        },
      },
      { $limit: 20 },
      { $project: { _id: 1, city: 1, country: 1 } },
    ];

    const result = await coll.aggregate(agg);

    const data = (await result.toArray()).map((doc) => {
      return {
        id: doc._id.toString() as string,
        city: doc.city as string,
        country: doc.country as string,
      };
    });

    return {
      ok: true,
      data: data,
    };
  } catch (error) {
    return {
      ok: false,
      error: error,
      data: [],
    };
  } finally {
    await client.close();
  }
}
