set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
    "user_id" SERIAL PRIMARY KEY,
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "hashedPassword" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "public"."products" (
    "product_id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "manufacturer" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "price" NUMERIC(10,2) NOT NULL,
    "image_url" VARCHAR(200),
    "category" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "public"."orders" (
    "order_id" SERIAL PRIMARY KEY,
    "user_id" INT NOT NULL,
    "status" VARCHAR(20) NOT NULL,
    "subtotal" NUMERIC(10,2) NOT NULL,
    "tax" NUMERIC(10,2) NOT NULL,
    "shipping" NUMERIC(10,2) NOT NULL,
    "total" NUMERIC(10,2) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE "public"."order_items" (
    "order_item_id" SERIAL PRIMARY KEY,
    "order_id" INT NOT NULL,
    "product_id" INT NOT NULL,
    "quantity" INT NOT NULL,
    "price" NUMERIC(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
