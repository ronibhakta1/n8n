import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

interface Config {
  DB_URL : string;
}

const Config = Readonly<Config> = {
  DB_URL = ""
}

export const prisma = PrismaClient();
