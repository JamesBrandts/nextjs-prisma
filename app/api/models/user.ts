import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";


export type {User}

const prisma = new PrismaClient();

export function getUser(id: number): Promise<User | null> {
    return prisma.user.findUnique({
        where: {
            id,
        },
    });
}

export function createUser(data: User): Promise<User> {
    return prisma.user.create({
        data,
    });
}

export function updateUser(id: number, data: User): Promise<User> {
    return prisma.user.update({
        where: {
            id,
        },
        data,
    });
}

export function deleteUser(id: number): Promise<User> {
    return prisma.user.delete({
        where: {
            id,
        },
    });
}

export function getUsers(): Promise<User[]> {
    return prisma.user.findMany();
}