import { Context } from "@/pages/api/graphql";

export const resolvers = {
  Query: {
    novel: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.novel.findUnique({
        where: { id: args.id }
      })

    },
    novels: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.novel.findMany({
        include: { author: true }
      })

    },
  },
  Novel: {

    authors: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.novel.findMany({
        where: { novelId: parent.id }
      })

    },
  },
  Mutation: {
    addNovel: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.novel.create({
        data: {
          title: args.title,
          image: args.image,
        }
      })
    },
    updateNovel: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.novel.update({
        where: {
          id: args.id,
        },
        data: {
          title: args.title,
          image: args.image,
        }
      })
    },
    deleteNovel: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.novel.delete({
        where: {
          id: args.id,
        }
      })
    },
  }
}