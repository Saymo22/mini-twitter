/*
  Warnings:

  - You are about to drop the column `post` on the `twittes` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `twittes` table. All the data in the column will be lost.
  - Added the required column `twitte` to the `twittes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_twittes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "twitte" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "twittes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_twittes" ("created_at", "id", "updated_at", "user_id") SELECT "created_at", "id", "updated_at", "user_id" FROM "twittes";
DROP TABLE "twittes";
ALTER TABLE "new_twittes" RENAME TO "twittes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
