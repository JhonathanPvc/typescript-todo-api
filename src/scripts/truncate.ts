import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    // Delete all Todo records first (to handle foreign keys)
    await prisma.todo.deleteMany();
    // Delete all User records
    await prisma.user.deleteMany();
    console.log('All records deleted successfully.');
  } catch (error) {
    console.error('Error deleting records:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
