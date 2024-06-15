import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const findAllComments = async () => {
    return await prisma.comment.findMany();
};

export const findCommentById = async (id: number) => {
    return await prisma.comment.findUnique({ where: { id } });
};

export const createComment = async (data: { content: string; postId: number; userId: number }) => {
    return await prisma.comment.create({ data });
};

export const updateComment = async (id: number, data: { content?: string }) => {
    return await prisma.comment.update({
        where: { id },
        data,
    });
};

export const deleteComment = async (id: number) => {
    return await prisma.comment.delete({ where: { id } });
};
