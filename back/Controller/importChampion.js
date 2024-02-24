// importChampionController.js
import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";

const prisma = new PrismaClient();

export async function importChampions(req, res) {
    try {
        const data = readFileSync("champions.json", "utf8");
        const champions = JSON.parse(data);
        for (const champion of champions) {
            await prisma.champion.create({
                data: champion,
            });
        }
        console.log(`${champions.length} champions ont été ajouté.`);
        res.status(200).json({
            message: `${champions.length} champions ont été ajoutés.`,
        });
    } catch (e) {
        console.error("Erreur lors de l'importation des champions: ", e);
        res.status(500).json({
            message: "Erreur lors de l'importation des champions.",
        });
    }
} 

export default importChampions;