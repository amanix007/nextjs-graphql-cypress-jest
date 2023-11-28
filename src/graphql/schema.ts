export const typeDefs = `#graphql
type Novel {
 id: ID!
 title: String
 image: String
 createdAt: String
 updatedAt: String
 authors: [Author]
}

type Author {
 id: ID!
 name:String
 novelId:String
}
type Query {
 nodel(id: ID!): Novel
 novels: [Novel]
}

type Mutation{
 addNovel(image: String, title: String): Novel
 updateNovel(image: String, title: String, image: String): Novel
 deleteNovel(id: String): Novel
 addAuthor(nodelId: ID!, name: String): Author
 deleteAuthor(nodelId: ID!): Author

}

`