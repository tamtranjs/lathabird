import client from "./client";

export async function getCities(query: string) {
  try {
    const database = client.db("lathabird");
    const coll = database.collection("world_cities");

    const agg = [
      {
        $search: {
          index: "default",
          autocomplete: {
            query: query,
            path: "city",
            fuzzy: {
              maxEdits: 2,
              prefixLength: 3,
            },
          },
        },
      },
      { $limit: 10 },
      { $project: { _id: 1, city: 1, country: 1 } },
    ];

    const result = await coll.aggregate(agg);

    const data: WorldCity[] = [];
    await result.forEach((doc) => {
      console.log(doc);
      data.push({
        id: doc._id.toString() as string,
        city: doc.city as string,
        country: doc.country as string,
      });
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
  }
}
