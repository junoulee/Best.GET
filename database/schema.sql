set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"user_id" serial NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"hashedPassword" varchar(255) NOT NULL,
	"address_type" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"address_line1" varchar(255) NOT NULL,
	"address_line_2" varchar(255) NOT NULL,
	"city" varchar(255) NOT NULL,
	"state" varchar(255) NOT NULL,
	"created_at" TIMESTAMP(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."products" (
	"productId" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"manufacturer" varchar(255) NOT NULL,
	"description" TEXT NOT NULL,
	"price" DECIMAL(8,2) NOT NULL,
	"imageUrl" varchar(255) NOT NULL,
  "category" varchar(255) NOT NULL,
	"created_at" TIMESTAMP(255) NOT NULL,
	CONSTRAINT "products_pk" PRIMARY KEY ("productId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."orders" (
	"order_id" serial NOT NULL,
	"user_id" serial NOT NULL,
	"status" varchar(255) NOT NULL,
	"subtotal" DECIMAL(8,2) NOT NULL,
	"tax" DECIMAL(8,2) NOT NULL,
	"shipping" DECIMAL(8,2) NOT NULL,
	"total" DECIMAL(8,2) NOT NULL,
	"created_at" TIMESTAMP(255) NOT NULL,
	CONSTRAINT "orders_pk" PRIMARY KEY ("order_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."order_items" (
	"order_item_id" serial NOT NULL,
	"order_id" integer NOT NULL,
	"productId" integer NOT NULL,
	"quantity" integer NOT NULL,
	"price" DECIMAL(8,2) NOT NULL,
	CONSTRAINT "order_items_pk" PRIMARY KEY ("order_item_id")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "orders" ADD CONSTRAINT "orders_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");

ALTER TABLE "order_items" ADD CONSTRAINT "order_items_fk0" FOREIGN KEY ("order_id") REFERENCES "orders"("order_id");
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_fk1" FOREIGN KEY ("productId") REFERENCES "products"("productId");
