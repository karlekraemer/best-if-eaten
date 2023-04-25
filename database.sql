
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- kitchen
CREATE TABLE "kitchen" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
    "name" VARCHAR (80),
	"location" VARCHAR (80),
	"exp_date" DATE,
	"amount" INT,
	"type" VARCHAR (80)	
);

-- spoiled
CREATE TABLE "spoiled" (
	"id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "name" VARCHAR (80),
	"location" VARCHAR (80),
	"exp_date" DATE,
	"amount" INT,
	"type" VARCHAR (80)	
);

-- cutting board
CREATE TABLE "cuttingBoard" (
	"id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "name" VARCHAR (80),
	"location" VARCHAR (80),
	"exp_date" DATE,
	"amount" INT,
	"type" VARCHAR (80)	
);

-- leftovers
CREATE TABLE "leftovers" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
    "name" VARCHAR (80),
	"location" VARCHAR (80),
	"exp_date" DATE,
	"servings" INT
);