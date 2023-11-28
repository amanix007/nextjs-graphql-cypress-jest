import { ApolloServer } from "@apollo/server"
import { PrismaClient } from "@prisma/client"
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { prisma } from "../../../prisma/db";
export type Context = {
  prisma: PrismaClient
}

const appolowServer = new ApolloServer<Context>({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(appolowServer, { context: async (req, res) => ({ req, res, prisma }) })