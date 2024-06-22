import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const findAllUsers = async () => {
    return await prisma.user.findMany();
};

export const findUserById = async (id: number) => {
    return await prisma.user.findUnique({ where: { id } });
};

export const createUser = async (data: { email: string; name?: string; password: string }) => {
    return await prisma.user.create({ data });
};

export const updateUser = async (id: number, data: { email?: string; name?: string; password?: string }) => {
    return await prisma.user.update({
        where: { id },
        data,
    });
};

export const deleteUser = async (id: number) => {
    return await prisma.user.delete({ where: { id } });
};
